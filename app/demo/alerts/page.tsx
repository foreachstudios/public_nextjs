"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"
import { AlertsOverview } from "@/components/alerts/alerts-overview"

export default function AlertsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Alerts Dashboard</h1>
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Demo Mode</AlertTitle>
        <AlertDescription>
          You are viewing demo alert data. Notifications are simulated.
        </AlertDescription>
      </Alert>
      <Card>
        <CardHeader>
          <CardTitle>Alerts Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <AlertsOverview />
        </CardContent>
      </Card>
    </div>
  )
}