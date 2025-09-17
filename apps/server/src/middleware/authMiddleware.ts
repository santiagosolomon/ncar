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
      user?: { id: string; role: string; organization: string };
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
    const cookieToken = (req as any).cookies?.token; // cookie-parser required in app
    const authHeader = (req.headers.authorization || "").toString();
    const bearerToken = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : undefined;
    const token = cookieToken || bearerToken;

    if (!token) {
      res.status(401).json({ error: "No token, authorization denied" });
      return;
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { id: string; role: string; organization: string };
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Token is not valid" });
  }
};
