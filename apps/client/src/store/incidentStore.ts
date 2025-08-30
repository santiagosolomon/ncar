//store/incidentStore.ts

import { create } from "zustand"

type RowMode = "view" | "edit" | "delete-confirm" | "add"

interface IncidentStore {
  rowModes: Record<string, RowMode>
  setMode: (id: string, mode: RowMode) => void
  reset: (id: string) => void
}

export const useIncidentStore = create<IncidentStore>((set) => ({
  rowModes: {},
  setMode: (id, mode) => set((s) => ({ rowModes: { ...s.rowModes, [id]: mode } })),
  reset: (id) =>
    set((s) => {
      const { [id]: _, ...rest } = s.rowModes
      return { rowModes: rest }
    }),
}))
