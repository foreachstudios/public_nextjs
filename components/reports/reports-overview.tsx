"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart } from "@/components/charts/bar-chart"
import { FileText, Users, Shield, AlertTriangle } from "lucide-react"

const reportTypes = [
  { name: "Access Reports", count: 156, trend: "+12%", icon: Users },
  { name: "Security Reports", count: 89, trend: "-5%", icon: Shield },
  { name: "Audit Logs", count: 1234, trend: "+8%", icon: FileText },
  { name: "Incidents", count: 23, trend: "-15%", icon: AlertTriangle },
]

const reportData = [
  { name: "Access", value: 156 },
  { name: "Security", value: 89 },
  { name: "Audit", value: 123 },
  { name: "Incidents", value: 23 },
]

export function ReportsOverview() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-4">
        {reportTypes.map((report) => (
          <Card key={report.name}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <report.icon className="h-5 w-5" />
                  <span className="font-medium">{report.name}</span>
                </div>
                <Badge variant={report.trend.startsWith("+") ? "default" : "secondary"}>
                  {report.trend}
                </Badge>
              </div>
              <div className="mt-4">
                <div className="text-2xl font-bold">{report.count}</div>
                <p className="text-xs text-muted-foreground">Total reports</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardContent className="pt-6">
          <BarChart data={reportData} dataKey="value" />
        </CardContent>
      </Card>
    </div>
  )
}