// hooks/useIncidentQueries.ts

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchIncidents, createIncident, updateIncident, deleteIncident } from "@/services/incidents"
import { IncidentForm } from "@/types/incidentModal" 

export const useIncidents = () =>
  useQuery({ queryKey: ["incidents"], queryFn: fetchIncidents })

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
