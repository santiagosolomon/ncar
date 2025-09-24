//controllers/incidentCtrl.ts

import { Request, Response } from "express"
import { Incident } from "../models/Incident"
import { sendIncidentEmail } from "../utils/sendIncidentEmail"

// controllers/incidentCtrl.ts
export const getIncidents = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10, organization } = req.query;
    const userOrg = req.user?.organization;

    let filter: any = {};

    if (userOrg === "ALL") {
      // Admins can see both orgs
      if (organization && organization !== "ALL") {
        filter.organization = organization; // if dropdown picks PTC or GICC
      }
      // else leave filter empty = fetch all incidents
    } else {
      filter.organization = userOrg; // normal users locked to their org
    }

    const incidents = await Incident.find(filter)
      .skip((+page - 1) * +limit)
      .limit(+limit)
      .sort({ createdAt: -1 });

    const total = await Incident.countDocuments(filter);

    res.json({
      data: incidents,
      total,
      page: +page,
      totalPages: Math.ceil(total / +limit),
    });
  } catch (err) {
    console.error("Error fetching incidents:", err);
    res.status(500).json({ error: "Failed to fetch incidents" });
  }
};


export const addIncident = async (req: Request, res: Response) => {
  try {
    const user = req.user as { organization: string; role: string };

    const { _id, organization: orgFromBody, ...incidentData } = req.body;

    let finalOrg: string;

    if (user.organization === "ALL") {
      if (orgFromBody === "PTC" || orgFromBody === "GICC") {
        finalOrg = orgFromBody;
      } else {
        return res
          .status(400)
          .json({ error: "Admins must select PTC or GICC organization" });
      }
    } else {
      finalOrg = user.organization;
    }

    const incident = new Incident({
      ...incidentData,
      organization: finalOrg,
    });

    await incident.save();

    // ✅ Respond to client immediately
    res.status(201).json(incident);

    // ✅ Kick off email in the background (not blocking)
    sendIncidentEmail(incident).catch((emailErr) => {
      console.error("Incident saved but failed to send email:", emailErr);
    });
  } catch (err) {
    console.error("Error creating incident:", err);
    res.status(400).json({ error: "Failed to create incident" });
  }
};



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
