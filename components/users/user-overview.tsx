"use client"

import { BarChart } from "@/components/charts/bar-chart"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const userData = [
  { name: "Admins", value: 5 },
  { name: "Developers", value: 42 },
  { name: "Analysts", value: 28 },
  { name: "Support", value: 15 },
  { name: "Readonly", value: 35 },
]

const userStats = [
  { label: "Total Users", value: "125", status: "default" },
  { label: "Active Now", value: "48", status: "success" },
  { label: "Inactive", value: "12", status: "warning" },
  { label: "Locked", value: "3", status: "destructive" },
]

export function UserOverview() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-4">
        {userStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <Badge variant={stat.status as "default" | "success" | "warning" | "destructive"}>
                  {stat.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="h-[400px]">
        <BarChart data={userData} dataKey="value" />
      </div>
    </div>
  )
}