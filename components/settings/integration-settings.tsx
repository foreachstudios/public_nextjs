"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, GitBranch, MessageSquare, Bell } from "lucide-react"

const integrations = [
  {
    name: "AWS Integration",
    description: "Connect your AWS account",
    icon: Cloud,
    status: "Connected",
    fields: [
      { label: "AWS Account ID", value: "123456789012" },
      { label: "Region", value: "us-east-1" },
    ],
  },
  {
    name: "GitHub Integration",
    description: "Link your GitHub repositories",
    icon: GitBranch,
    status: "Not Connected",
    fields: [
      { label: "Organization", value: "" },
      { label: "Repository", value: "" },
    ],
  },
  {
    name: "Slack Integration",
    description: "Send notifications to Slack",
    icon: MessageSquare,
    status: "Connected",
    fields: [
      { label: "Workspace", value: "Acme Corp" },
      { label: "Channel", value: "#alerts" },
    ],
  },
  {
    name: "PagerDuty Integration",
    description: "Manage incident alerts",
    icon: Bell,
    status: "Not Connected",
    fields: [
      { label: "API Key", value: "" },
      { label: "Service ID", value: "" },
    ],
  },
]

export function IntegrationSettings() {
  return (
    <div className="space-y-6">
      {integrations.map((integration) => (
        <Card key={integration.name}>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <integration.icon className="h-5 w-5 mt-1" />
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Label className="text-base">{integration.name}</Label>
                    <Badge variant={integration.status === "Connected" ? "default" : "secondary"}>
                      {integration.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {integration.description}
                  </p>
                  <div className="mt-4 space-y-4">
                    {integration.fields.map((field) => (
                      <div key={field.label} className="space-y-2">
                        <Label>{field.label}</Label>
                        <Input 
                          value={field.value}
                          placeholder={`Enter ${field.label.toLowerCase()}`}
                          className="max-w-md"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Button variant={integration.status === "Connected" ? "destructive" : "default"}>
                {integration.status === "Connected" ? "Disconnect" : "Connect"}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}