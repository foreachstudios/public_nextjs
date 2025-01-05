"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, HardDrive, Network, Memory } from "lucide-react"

const metrics = [
  { name: "CPU Usage", value: "45%", status: "normal", icon: Cpu },
  { name: "Memory Usage", value: "72%", status: "warning", icon: Memory },
  { name: "Network I/O", value: "1.2 GB/s", status: "normal", icon: Network },
  { name: "Disk Usage", value: "85%", status: "critical", icon: HardDrive },
]

export function PerformanceMetrics() {
  return (
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
  )
}