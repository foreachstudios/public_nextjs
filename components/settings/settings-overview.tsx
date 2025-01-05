"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Shield, Link as LinkIcon, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const settingCategories = [
  {
    name: "General Settings",
    description: "Basic configuration and preferences",
    icon: Settings,
    status: "Configured",
    link: "/demo/settings/general",
  },
  {
    name: "Security Settings",
    description: "Security and authentication configuration",
    icon: Shield,
    status: "Review Required",
    link: "/demo/settings/security",
  },
  {
    name: "Integrations",
    description: "External service connections",
    icon: LinkIcon,
    status: "2 Active",
    link: "/demo/settings/integrations",
  },
  {
    name: "Notifications",
    description: "Alert and notification preferences",
    icon: Bell,
    status: "Configured",
    link: "/demo/alerts/notifications",
  },
]

export function SettingsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {settingCategories.map((category) => (
        <Card key={category.name}>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <category.icon className="h-5 w-5 mt-1" />
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium">{category.name}</h3>
                    <Badge variant="secondary">{category.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>
              <Link href={category.link}>
                <Button variant="ghost" size="sm">
                  Configure
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}