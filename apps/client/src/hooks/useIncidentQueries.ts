// hooks/useIncidentQueries.ts

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchIncidents, createIncident, updateIncident, deleteIncident, PaginatedIncidentResponse } from "@/services/incidents"
import { IncidentForm } from "@/types/incidentModal" 

export const useIncidents = (
  page: number,
  limit: number,
  organization: string,
  search: string
) =>
  useQuery<PaginatedIncidentResponse>({
    queryKey: ["incidents", page, limit, organization, search],
    queryFn: () => fetchIncidents(page, limit, organization, search),
    // Add better error handling
    retry: 1,
    // Only refetch when search string is different
    enabled: true,
  });



export const useAddIncident = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: createIncident,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["incidents"] }),
  })
}

export const useUpdateIncident = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: updateIncident,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["incidents"] }),
  })
}

export const useDeleteIncident = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: deleteIncident,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["incidents"] }),
  })
}
