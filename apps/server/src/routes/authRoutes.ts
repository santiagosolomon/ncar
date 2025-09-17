// routes/authRoutes.ts

import express from "express"
import { login, register, logout, me } from "../controllers/authCtrl"
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router()

router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);

// ✅ protected route
router.get("/me", authMiddleware, me);

export default router
