"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LineChart } from "@/components/charts/line-chart"
import { Activity, Server, Database, Cloud } from "lucide-react"

const services = [
  { name: "API Gateway", status: "Healthy", uptime: "99.99%", icon: Activity },
  { name: "EC2 Instances", status: "Warning", uptime: "99.95%", icon: Server },
  { name: "RDS Database", status: "Healthy", uptime: "99.99%", icon: Database },
  { name: "S3 Storage", status: "Healthy", uptime: "100%", icon: Cloud },
]

const uptimeData = [
  { name: "Mon", total: 100 },
  { name: "Tue", total: 99.9 },
  { name: "Wed", total: 99.99 },
  { name: "Thu", total: 99.95 },
  { name: "Fri", total: 99.99 },
  { name: "Sat", total: 100 },
  { name: "Sun", total: 99.99 },
]

export function MonitoringOverview() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-4">
        {services.map((service) => (
          <Card key={service.name}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <service.icon className="h-5 w-5" />
                  <span className="font-medium">{service.name}</span>
                </div>
                <Badge variant={service.status === "Healthy" ? "default" : "warning"}>
                  {service.status}
                </Badge>
              </div>
              <div className="mt-4">
                <div className="text-2xl font-bold">{service.uptime}</div>
                <p className="text-xs text-muted-foreground">Uptime last 7 days</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardContent className="pt-6">
          <LineChart data={uptimeData} dataKey="total" />
        </CardContent>
      </Card>
    </div>
  )
}