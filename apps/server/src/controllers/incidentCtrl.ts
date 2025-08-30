// controllers/incidentCtrl.ts

import { Request, Response } from "express"
import { Incident } from "../models/Incident"

export const getIncidents = async (_: Request, res: Response) => {
  const incidents = await Incident.find()
  res.json(incidents)
}

export const addIncident = async (req: Request, res: Response) => {
  const incident = new Incident(req.body)
  await incident.save()
  res.status(201).json(incident)
}

export const updateIncident = async (req: Request, res: Response) => {
  const { id } = req.params
  const updated = await Incident.findByIdAndUpdate(id, req.body, { new: true })
  res.json(updated)
}

export const deleteIncident = async (req: Request, res: Response) => {
  const { id } = req.params
  await Incident.findByIdAndDelete(id)
  res.status(204).send()
}
