"use client"

import { ResponsiveContainer } from "recharts"
import { BaseChartProps } from "./types"

export function BaseChart({ children, height = 350 }: { children: React.ReactNode, height?: number }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      {children}
    </ResponsiveContainer>
  )
}