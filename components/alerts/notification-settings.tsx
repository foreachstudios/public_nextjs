"use client"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageSquare, Bell, Phone } from "lucide-react"
import { useState } from "react"

export function NotificationSettings() {
  const [channels, setChannels] = useState([
    {
      name: "Email Notifications",
      description: "Receive alerts via email",
      icon: Mail,
      enabled: true,
      config: "john.doe@example.com",
    },
    {
      name: "Slack Integration",
      description: "Send alerts to Slack channel",
      icon: MessageSquare,
      enabled: true,
      config: "#alerts-channel",
    },
    {
      name: "SMS Alerts",
      description: "Get critical alerts via SMS",
      icon: Phone,
      enabled: false,
      config: "+1 (555) 123-4567",
    },
    {
      name: "Push Notifications",
      description: "Browser push notifications",
      icon: Bell,
      enabled: true,
      config: "All browsers",
    },
  ])

  const handleConfigChange = (index: number, value: string) => {
    const newChannels = [...channels]
    newChannels[index].config = value
    setChannels(newChannels)
  }

  const handleToggle = (index: number) => {
    const newChannels = [...channels]
    newChannels[index].enabled = !newChannels[index].enabled
    setChannels(newChannels)
  }

  return (
    <div className="space-y-6">
      {channels.map((channel, index) => (
        <Card key={channel.name}>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <channel.icon className="h-5 w-5 mt-1" />
                <div>
                  <Label className="text-base">{channel.name}</Label>
                  <p className="text-sm text-muted-foreground">
                    {channel.description}
                  </p>
                  <div className="mt-2">
                    <Input 
                      value={channel.config}
                      onChange={(e) => handleConfigChange(index, e.target.value)}
                      className="max-w-md"
                      disabled={!channel.enabled}
                    />
                  </div>
                </div>
              </div>
              <Switch 
                checked={channel.enabled}
                onCheckedChange={() => handleToggle(index)}
              />
            </div>
          </CardContent>
        </Card>
      ))}
      
      <Button className="w-full">
        Save Changes
      </Button>
    </div>
  )
}