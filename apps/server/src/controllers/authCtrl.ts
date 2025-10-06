// src/controllers/authCtrl.ts

import { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { Account } from "../models/Account"

const JWT_SECRET = process.env.JWT_SECRET || "supersecret"

export const me = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    // req.user comes from authMiddleware (id, role, organization)
    res.status(200).json({
      user: {
        id: req.user.id,
        email: req.user.email,
        role: req.user.role,
        organization: req.user.organization,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user info" });
  }
};

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password, organization } = req.body
        const hashed = await bcrypt.hash(password, 10)
        const account = new Account({ email, password: hashed, role: "user", organization })
        await account.save()
        res.status(201).json({
            message: "User registered successfully",
            account: {
                email: account.email,
                role: account.role,
                organization: account.organization,
            },
        })
    } catch (err: any) {
        if (err.code === 11000) {
            return res.status(400).json({ error: "Email already exists" });
        }
        if (err.message.includes('validation failed')) {
            return res.status(400).json({ error: "Invalid organization. Must be PTC, GICC, or ALL" });
        }
        console.error('Registration error:', err);
        res.status(400).json({ error: "Registration failed: " + err.message })
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const user = await Account.findOne({ email })
        if (!user) return res.status(400).json({ error: "Invalid credentials" })

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" })

        const token = jwt.sign(
            { id: user._id, email: user.email, role: user.role, organization: user.organization },
            JWT_SECRET,
            { expiresIn: "1d" }
        )

        // set httpOnly cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000,
        })

        res.status(200).json({
            message: "Login successful",
            account: {
                email: user.email,
                role: user.role,
                organization: user.organization,
            },
        })
    } catch (err) {
        res.status(400).json({ error: "Login failed" })
    }
}

export const logout = (req: Request, res: Response) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    })
    res.status(200).json({ message: "Logout successful" })
}
 