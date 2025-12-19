export function formatNumber(value?: number | bigint): string {
  if (value === undefined || value === null) return "0";

  const num =
    typeof value === "bigint"
      ? Number(value)
      : value;

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 4,
  }).format(num);
}
