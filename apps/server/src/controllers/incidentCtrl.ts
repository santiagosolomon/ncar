// controllers/incidentCtrl.ts

import { Request, Response } from "express";
import { Incident } from "../models/Incident";
import { sendIncidentEmail } from "../utils/sendIncidentEmail";

/**
 * GET /api/incidents
 * Fetch paginated incidents with search and organization filtering.
 */
export const getIncidents = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10, organization, search = "" } = req.query;
    const userOrg = req.user?.organization;

    const pageNum = Number(page);
    const limitNum = Number(limit);

    // === FILTER SETUP ===
    const filter: Record<string, any> = {};

    // Organization filter
    if (userOrg === "ALL") {
      if (organization && organization !== "ALL") {
        filter.organization = organization;
      }
    } else {
      filter.organization = userOrg;
    }

    // === ADVANCED SEARCH FILTER ===
    if (search) {
      const searchStr = String(search).trim();
      const regex = new RegExp(searchStr, "i");

      // Match both refNo (converted to string) and description
      filter.$or = [
        {
          $expr: {
            $regexMatch: {
              input: { $toString: "$refNo" },
              regex: searchStr,
              options: "i",
            },
          },
        },
        { description: { $regex: regex } },
      ];
    }

    // === FETCH DATA IN PARALLEL ===
    const [incidents, total] = await Promise.all([
      Incident.find(filter)
        .lean() // faster & memory-efficient
        .skip((pageNum - 1) * limitNum)
        .limit(limitNum)
        .sort({ createdAt: -1 }),
      Incident.countDocuments(filter),
    ]);

    return res.json({
      data: incidents,
      total,
      page: pageNum,
      totalPages: Math.ceil(total / limitNum),
    });
  } catch (err) {
    console.error("Error fetching incidents:", err);
    return res.status(500).json({ error: "Failed to fetch incidents" });
  }
};

/**
 * POST /api/incidents
 * Create a new incident.
 */
export const addIncident = async (req: Request, res: Response) => {
  try {
    const user = req.user as { organization: string; role: string };
    const { _id, organization: orgFromBody, ...incidentData } = req.body;

    // Determine organization based on user role
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

    // Respond immediately
    res.status(201).json(incident);

    // Send email asynchronously (non-blocking)
    sendIncidentEmail(incident).catch((emailErr) => {
      console.error("Incident saved but failed to send email:", emailErr);
    });
  } catch (err) {
    console.error("Error creating incident:", err);
    return res.status(400).json({ error: "Failed to create incident" });
  }
};

/**
 * PUT /api/incidents/:id
 * Update an existing incident.
 */
export const updateIncident = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updated = await Incident.findByIdAndUpdate(id, req.body, {
      new: true,
      lean: true, // return plain object for performance
    });

    if (!updated) {
      return res.status(404).json({ error: "Incident not found" });
    }

    return res.json(updated);
  } catch (err) {
    console.error("Error updating incident:", err);
    return res.status(400).json({ error: "Failed to update incident" });
  }
};

/**
 * DELETE /api/incidents/:id
 * Delete an incident.
 */
export const deleteIncident = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Incident.findByIdAndDelete(id).lean();

    if (!deleted) {
      return res.status(404).json({ error: "Incident not found" });
    }

    return res.status(204).send();
  } catch (err) {
    console.error("Error deleting incident:", err);
    return res.status(400).json({ error: "Failed to delete incident" });
  }
};
