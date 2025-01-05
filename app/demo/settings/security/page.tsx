"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SecuritySettings } from "@/components/settings/security-settings"

export default function SecuritySettingsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Security Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Security Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <SecuritySettings />
        </CardContent>
      </Card>
    </div>
  )
}