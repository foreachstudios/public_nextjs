"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GeneralSettings } from "@/components/settings/general-settings"

export default function GeneralSettingsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">General Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <GeneralSettings />
        </CardContent>
      </Card>
    </div>
  )
}