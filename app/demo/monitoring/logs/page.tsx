"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LogViewer } from "@/components/monitoring/log-viewer"

export default function LogsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">System Logs</h1>
      <Card>
        <CardHeader>
          <CardTitle>Log Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <LogViewer />
        </CardContent>
      </Card>
    </div>
  )
}