// routes/incidents.ts

import { Router } from "express"
import { getIncidents, addIncident, updateIncident, deleteIncident } from "../controllers/incidentCtrl"
import { authMiddleware } from "../middleware/authMiddleware"

const router = Router()

router.use(authMiddleware) // protect all incident routes

router.get("/", getIncidents)
router.post("/", addIncident)
router.put("/:id", updateIncident)
router.delete("/:id", deleteIncident)

export default router
