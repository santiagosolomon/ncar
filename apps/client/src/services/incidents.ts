// services/incidents.ts

import { api } from "@/lib/axios"
import { IncidentForm } from "@/types/incidentModal" 

interface IncidentResponse extends IncidentForm {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchIncidents = async (): Promise<IncidentResponse[]> => {
  const { data } = await api.get("/incidents")
  return data
}

export const createIncident = async (incident: IncidentForm) => {
  const { data } = await api.post("/incidents", incident)
  return data as IncidentResponse
}

export const updateIncident = async (incident: IncidentResponse) => {
  const { data } = await api.put(`/incidents/${incident._id}`, incident)
  return data as IncidentResponse
}

export const deleteIncident = async (id: string) => {
  await api.delete(`/incidents/${id}`)
  return id
}
