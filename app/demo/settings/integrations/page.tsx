"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IntegrationSettings } from "@/components/settings/integration-settings"

export default function IntegrationsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Integrations</h1>
      <Card>
        <CardHeader>
          <CardTitle>Integration Management</CardTitle>
        </CardHeader>
        <CardContent>
          <IntegrationSettings />
        </CardContent>
      </Card>
    </div>
  )
}