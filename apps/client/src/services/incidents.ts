// services/incidents.ts

import { api } from "@/lib/axios"
import { IncidentForm, IncidentResponse } from "@/types/incidentModal" 

export interface PaginatedIncidentResponse {
  data: Array<IncidentForm & { _id: string }>
  total: number
  page: number
  totalPages: number
  hasMore: boolean
}

export const fetchIncidents = async (page = 1, limit = 10, organization: string): Promise<PaginatedIncidentResponse> => {
  try {
    // console.log('Fetching incidents with params:', { page, limit, organization });
    const { data } = await api.get("/incidents", { params: { page, limit, organization } });
    // console.log('Received incidents data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching incidents:', error);
    throw error;
  }
}

export const createIncident = async (incident: IncidentForm) => {
  const { data } = await api.post("/incidents", incident)
  return data as IncidentResponse
}

export const updateIncident = async ({ id, data }: { id: string, data: IncidentForm }) => {
  const { data: incident } = await api.put<IncidentResponse>(`/incidents/${id}`, data)
  return incident
}

export const deleteIncident = async (id: string) => {
  await api.delete(`/incidents/${id}`)
  return id
}
