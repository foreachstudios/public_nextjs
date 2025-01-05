"use client"

import { BarChart } from "@/components/charts/bar-chart"

const data = [
  { name: "EC2", value: 12 },
  { name: "S3", value: 8 },
  { name: "RDS", value: 4 },
  { name: "Lambda", value: 15 },
  { name: "ECS", value: 6 },
]

export function ResourcesOverview() {
  return <BarChart data={data} dataKey="value" />
}