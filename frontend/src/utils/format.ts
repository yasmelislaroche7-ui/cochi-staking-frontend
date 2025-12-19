import { formatUnits } from "viem"

export const formatToken = (value?: bigint) =>
  value ? Number(formatUnits(value, 18)).toFixed(4) : "0.0000"

export const formatDate = (ts: number) =>
  ts === 0 ? "-" : new Date(ts * 1000).toLocaleString()
