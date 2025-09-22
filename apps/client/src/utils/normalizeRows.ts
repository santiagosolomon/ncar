// utils/normalizeRows.ts
export function normalizeRows<T extends { _id?: string; tempId?: string }>(
  rows: T[]
): (T & { tempId: string })[] {
  return rows.map((row) => ({
    ...row,
    tempId: row.tempId || row._id || crypto.randomUUID(),
  }));
}
