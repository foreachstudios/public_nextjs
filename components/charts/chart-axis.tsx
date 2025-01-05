"use client"

import { XAxis, YAxis } from "recharts"
import { BaseAxisProps } from "./types"

const defaultAxisStyle = {
  stroke: "hsl(var(--muted-foreground))",
  fontSize: 12,
  tickLine: false,
  axisLine: false,
}

interface ChartAxisProps extends BaseAxisProps {
  variant: "x" | "y"
}

export function ChartAxis({ variant, dataKey, tickFormatter, orientation }: ChartAxisProps) {
  const props = {
    ...defaultAxisStyle,
    orientation,
    id: 0, // Add this line
    ...(variant === "x" ? { dataKey } : { tickFormatter }),
  }

  return variant === "x" ? <XAxis {...props} /> : <YAxis {...props} />
}