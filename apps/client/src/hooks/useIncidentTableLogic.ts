// hooks/useIncidentTableLogic.ts
import { useEffect, useState } from "react"

export function useIncidentTableLogic<T extends { _id?: string; tempId?: string }>(initial: T[]) {
  const [details, setDetails] = useState<T[]>(() =>
    initial.map(row => ({
      ...row,
      tempId: row.tempId ?? crypto.randomUUID(), // runtime guarantee
    }))
  )

  useEffect(() => {
    setDetails(prev =>
      prev.map(row => ({
        ...row,
        tempId: row.tempId ?? crypto.randomUUID(),
      }))
    )
  }, [])

  return { details, setDetails }
}
