"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AccessReports } from "@/components/reports/access-reports"

export default function AccessReportsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Access Reports</h1>
      <Card>
        <CardHeader>
          <CardTitle>Access Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <AccessReports />
        </CardContent>
      </Card>
    </div>
  )
}