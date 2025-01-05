"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertRules } from "@/components/alerts/alert-rules"

export default function AlertRulesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Alert Rules</h1>
      <Card>
        <CardHeader>
          <CardTitle>Active Rules</CardTitle>
        </CardHeader>
        <CardContent>
          <AlertRules />
        </CardContent>
      </Card>
    </div>
  )
}