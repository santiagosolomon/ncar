// src/middleware/authMiddleware.ts
import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

/**
 * Add a 'user' field to Express Request via declaration merging.
 * You can also put this in a global types file (e.g. src/types/express.d.ts).
 */
declare global {
  namespace Express {
    interface Request {
      user?: { id: string; email: string; role: string; organization: string };
    }
  }
}

/**
 * Properly typed middleware as RequestHandler.
 * - reads token from cookie (preferred) or Authorization header (fallback)
 * - verifies token and attaches decoded payload to req.user
 * - responds 401 on missing/invalid token (and returns void)
 */
export const authMiddleware: RequestHandler = (req, res, next) => {
  try {
    // First check cookie token
    const cookieToken = req.cookies?.token;
    
    // Fallback to Authorization header
    const authHeader = req.headers.authorization?.toString();
    const bearerToken = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : undefined;
    
    const token = cookieToken || bearerToken;

    if (!token) {
      return res.status(401).json({ 
        error: "No token, authorization denied",
        redirectTo: "/login"
      });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as { 
        id: string; 
        email: string;  
        role: string; 
        organization: string 
      };
      req.user = decoded;
      next();
    } catch (jwtError) {
      // If token is expired or invalid, clear the cookie
      res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict"
      });
      return res.status(401).json({ 
        error: "Token is invalid or expired",
        redirectTo: "/login"
      });
    }
  } catch (err) {
    console.error("Auth middleware error:", err);
    return res.status(500).json({ error: "Server error in auth middleware" });
  }
};
