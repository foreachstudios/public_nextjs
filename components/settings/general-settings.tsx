"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export function GeneralSettings() {
  const [settings, setSettings] = useState({
    companyName: "Acme Corp",
    timezone: "UTC",
    emailNotifications: true,
    slackNotifications: false,
  })

  const handleSave = () => {
    // TODO: Implement save functionality
    console.log("Saving settings:", settings)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="companyName">Company Name</Label>
        <Input
          id="companyName"
          value={settings.companyName}
          onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="timezone">Timezone</Label>
        <Select
          value={settings.timezone}
          onValueChange={(value) => setSettings({ ...settings, timezone: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="UTC">UTC</SelectItem>
            <SelectItem value="EST">Eastern Time</SelectItem>
            <SelectItem value="PST">Pacific Time</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="emailNotifications">Email Notifications</Label>
          <Switch
            id="emailNotifications"
            checked={settings.emailNotifications}
            onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="slackNotifications">Slack Notifications</Label>
          <Switch
            id="slackNotifications"
            checked={settings.slackNotifications}
            onCheckedChange={(checked) => setSettings({ ...settings, slackNotifications: checked })}
          />
        </div>
      </div>

      <Button onClick={handleSave} className="w-full">
        Save Changes
      </Button>
    </div>
  )
}