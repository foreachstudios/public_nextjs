"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"
import { MonitoringOverview } from "@/components/monitoring/monitoring-overview"

export default function MonitoringPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Infrastructure Monitoring</h1>
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Demo Mode</AlertTitle>
        <AlertDescription>
          You are viewing demo monitoring data. Real-time updates are simulated.
        </AlertDescription>
      </Alert>
      <Card>
        <CardHeader>
          <CardTitle>Monitoring Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <MonitoringOverview />
        </CardContent>
      </Card>
    </div>
  )
}