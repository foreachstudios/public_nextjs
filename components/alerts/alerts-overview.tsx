"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Bell, Shield, Activity } from "lucide-react"

const alertStats = [
  { name: "Active Alerts", count: 12, status: "warning", icon: AlertCircle },
  { name: "Alert Rules", count: 45, status: "default", icon: Bell },
  { name: "Security Alerts", count: 3, status: "destructive", icon: Shield },
  { name: "System Health", count: 98, status: "success", icon: Activity, suffix: "%" },
]

const recentAlerts = [
  {
    title: "High CPU Usage",
    description: "EC2 instance i-1234abcd exceeding 90% CPU utilization",
    severity: "critical",
    timestamp: "2024-03-20 14:30:00",
  },
  {
    title: "Failed Login Attempts",
    description: "Multiple failed login attempts detected from IP 192.168.1.100",
    severity: "high",
    timestamp: "2024-03-20 14:25:00",
  },
  {
    title: "Low Storage Space",
    description: "RDS instance running low on available storage",
    severity: "medium",
    timestamp: "2024-03-20 14:20:00",
  },
]

export function AlertsOverview() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-4">
        {alertStats.map((stat) => (
          <Card key={stat.name}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <stat.icon className="h-5 w-5" />
                  <span className="font-medium">{stat.name}</span>
                </div>
                <Badge variant={stat.status as "default" | "warning" | "destructive" | "success"}>
                  {stat.count}{stat.suffix || ""}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        {recentAlerts.map((alert, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium">{alert.title}</h4>
                    <Badge variant={
                      alert.severity === "critical" ? "destructive" :
                      alert.severity === "high" ? "warning" : "default"
                    }>
                      {alert.severity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{alert.description}</p>
                  <p className="text-xs text-muted-foreground">{alert.timestamp}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}