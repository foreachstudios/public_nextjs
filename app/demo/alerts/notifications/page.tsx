"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NotificationSettings } from "@/components/alerts/notification-settings"

export default function NotificationsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Notification Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Alert Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <NotificationSettings />
        </CardContent>
      </Card>
    </div>
  )
}