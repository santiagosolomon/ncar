import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchIncidents, createIncident } from "@/services/incidents";
import { Incident } from "@ncar/types";

export function useIncidents() {
  return useQuery<Incident[]>({
    queryKey: ["incidents"],
    queryFn: fetchIncidents,
  });
}

export function useCreateIncident() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createIncident,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["incidents"] });
    },
  });
}
