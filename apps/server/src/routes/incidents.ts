// routes/incidents.ts

import { Router } from "express"
import { getIncidents, addIncident, updateIncident, deleteIncident } from "../controllers/incidentCtrl"

const router = Router()

router.get("/", getIncidents)
router.post("/", addIncident)
router.put("/:id", updateIncident)
router.delete("/:id", deleteIncident)

export default router
