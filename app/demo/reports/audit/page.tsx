"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AuditLogs } from "@/components/reports/audit-logs"

export default function AuditPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Audit Logs</h1>
      <Card>
        <CardHeader>
          <CardTitle>Audit Trail</CardTitle>
        </CardHeader>
        <CardContent>
          <AuditLogs />
        </CardContent>
      </Card>
    </div>
  )
}