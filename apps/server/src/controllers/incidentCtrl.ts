import { Request, Response } from "express"
import { Incident } from "../models/Incident"

export const getIncidents = async (_: Request, res: Response) => {
  try {
    const incidents = await Incident.find().sort({ createdAt: -1 }) // newest first
    res.json(incidents)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch incidents" })
  }
}

export const addIncident = async (req: Request, res: Response) => {
  try {
    console.log('Received incident data:', req.body);
    
    // Create new incident without _id field
    const { _id, ...incidentData } = req.body;
    const incident = new Incident(incidentData);
    
    await incident.save();
    res.status(201).json(incident);
  } catch (err) {
    console.error('Error creating incident:', err);
    if (err instanceof Error) {
      if ((err as any).code === 11000) {
        res.status(400).json({ error: 'Duplicate refNo found. Please try again.' });
      } else {
        res.status(400).json({ error: err.message });
      }
    } else {
      res.status(400).json({ error: 'Failed to create incident' });
    }
  }
}

export const updateIncident = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const updated = await Incident.findByIdAndUpdate(id, req.body, { new: true })
    if (!updated) return res.status(404).json({ error: "Incident not found" })
    res.json(updated)
  } catch (err) {
    res.status(400).json({ error: "Failed to update incident" })
  }
}

export const deleteIncident = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const deleted = await Incident.findByIdAndDelete(id)
    if (!deleted) return res.status(404).json({ error: "Incident not found" })
    res.status(204).send()
  } catch (err) {
    res.status(400).json({ error: "Failed to delete incident" })
  }
}
