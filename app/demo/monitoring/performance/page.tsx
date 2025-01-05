"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Info, Cpu, HardDrive, Network, MemoryStick } from "lucide-react"

// Performance Metrics Data
const metrics = [
  { name: "CPU Usage", value: "45%", status: "normal", icon: Cpu },
  { name: "Memory Usage", value: "72%", status: "warning", icon: MemoryStick },
  { name: "Network I/O", value: "1.2 GB/s", status: "normal", icon: Network },
  { name: "Disk Usage", value: "85%", status: "critical", icon: HardDrive },
]

// Resource Utilization Data
const resources = [
  { name: "CPU Cores", used: 12, total: 16, unit: "cores" },
  { name: "Memory", used: 28, total: 32, unit: "GB" },
  { name: "Storage", used: 850, total: 1000, unit: "GB" },
  { name: "Network Bandwidth", used: 8.5, total: 10, unit: "Gbps" },
]

// Latency Data
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

export default function PerformancePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Performance Monitoring</h1>
      
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Demo Mode</AlertTitle>
        <AlertDescription>
          You are viewing demo performance data. Metrics are simulated.
        </AlertDescription>
      </Alert>

      {/* Performance Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.name}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <metric.icon className="h-5 w-5" />
                  <span className="font-medium">{metric.name}</span>
                </div>
                <Badge variant={
                  metric.status === "critical" ? "destructive" :
                  metric.status === "warning" ? "warning" : "secondary"
                }>
                  {metric.value}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Resource Utilization and Latency Metrics */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Resource Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {resources.map((resource) => {
                const percentage = (resource.used / resource.total) * 100
                return (
                  <div key={resource.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{resource.name}</span>
                      <span>
                        {resource.used} / {resource.total} {resource.unit}
                      </span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                    <p className="text-xs text-muted-foreground text-right">
                      {percentage.toFixed(1)}% utilized
                    </p>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Latency Metrics</CardTitle>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>
      </div>
    </div>
  )
}