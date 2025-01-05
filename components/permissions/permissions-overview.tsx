"use client"

import { BarChart } from "@/components/charts/bar-chart"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const permissionsData = [
  { name: "Read", value: 156 },
  { name: "Write", value: 98 },
  { name: "Execute", value: 45 },
  { name: "Admin", value: 12 },
]

const permissionStats = [
  { label: "Total Policies", value: "89", status: "default" },
  { label: "Active Roles", value: "34", status: "success" },
  { label: "Custom Policies", value: "23", status: "warning" },
  { label: "System Policies", value: "66", status: "secondary" },
]

export function PermissionsOverview() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-4">
        {permissionStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <Badge variant={stat.status as "default" | "success" | "warning" | "secondary"}>
                  {stat.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="h-[400px]">
        <BarChart data={permissionsData} dataKey="value" />
      </div>
    </div>
  )
}