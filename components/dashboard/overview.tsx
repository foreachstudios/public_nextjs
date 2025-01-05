"use client"

import { LineChart } from "@/components/charts/line-chart"

const data = [
  { name: "Jan", total: 245 },
  { name: "Feb", total: 267 },
  { name: "Mar", total: 298 },
  { name: "Apr", total: 320 },
  { name: "May", total: 342 },
  { name: "Jun", total: 378 },
]

export function Overview() {
  return <LineChart data={data} dataKey="total" />
}