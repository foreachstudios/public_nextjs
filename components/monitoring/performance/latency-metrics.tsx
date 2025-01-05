"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const latencyData = [
  {
    endpoint: "API Gateway",
    p50: "45ms",
    p90: "120ms",
    p99: "250ms",
    status: "normal",
  },
  {
    endpoint: "Database Queries",
    p50: "15ms",
    p90: "45ms",
    p99: "85ms",
    status: "normal",
  },
  {
    endpoint: "Cache Access",
    p50: "2ms",
    p90: "5ms",
    p99: "12ms",
    status: "normal",
  },
  {
    endpoint: "Storage Operations",
    p50: "25ms",
    p90: "75ms",
    p99: "180ms",
    status: "warning",
  },
]

export function LatencyMetrics() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Endpoint</TableHead>
          <TableHead>p50</TableHead>
          <TableHead>p90</TableHead>
          <TableHead>p99</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {latencyData.map((data) => (
          <TableRow key={data.endpoint}>
            <TableCell>{data.endpoint}</TableCell>
            <TableCell>{data.p50}</TableCell>
            <TableCell>{data.p90}</TableCell>
            <TableCell>{data.p99}</TableCell>
            <TableCell>
              <Badge variant={data.status === "normal" ? "secondary" : "warning"}>
                {data.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}