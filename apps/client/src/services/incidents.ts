// services/incidents.ts

import { api } from "@/lib/axios"
import { IncidentDetails } from "@/types/incidentDetails"

export const fetchIncidents = async (): Promise<IncidentDetails[]> => {
  const { data } = await api.get("/incidents")
  return data
}

export const createIncident = async (incident: IncidentDetails) => {
  const { data } = await api.post("/incidents", incident)
  return data
}

export const updateIncident = async (incident: IncidentDetails) => {
  const { data } = await api.put(`/incidents/${incident.id}`, incident)
  return data
}

export const deleteIncident = async (id: string) => {
  await api.delete(`/incidents/${id}`)
  return id
}
