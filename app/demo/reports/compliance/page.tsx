"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ComplianceReport } from "@/components/reports/compliance-report"
import { ComplianceScore } from "@/components/reports/compliance-score"

export default function CompliancePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Compliance Reports</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Compliance Score</CardTitle>
          </CardHeader>
          <CardContent>
            <ComplianceScore />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Findings</CardTitle>
          </CardHeader>
          <CardContent>
            <ComplianceReport />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}