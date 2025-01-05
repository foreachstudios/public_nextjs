"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Settings,
  Shield,
  Users,
  AlertCircle,
  BarChart3,
  Lock,
  FileText,
  Bell,
  Cog,
  Network,
  Key,
} from "lucide-react"

const items = [
  {
    title: "Dashboard",
    href: "/demo",
    icon: LayoutDashboard,
  },
  {
    title: "IAM Users",
    href: "/demo/users",
    icon: Users,
    subItems: [
      { title: "User Management", href: "/demo/users/management" },
      { title: "Groups", href: "/demo/users/groups" },
      { title: "Roles", href: "/demo/users/roles" },
    ],
  },
  {
    title: "Permissions",
    href: "/demo/permissions",
    icon: Lock,
    subItems: [
      { title: "Policies", href: "/demo/permissions/policies" },
      { title: "Access Control", href: "/demo/permissions/access-control" },
    ],
  },
  {
    title: "Monitoring",
    href: "/demo/monitoring",
    icon: BarChart3,
    subItems: [
      { title: "Resources", href: "/demo/monitoring/resources" },
      { title: "Performance", href: "/demo/monitoring/performance" },
      { title: "Logs", href: "/demo/monitoring/logs" },
    ],
  },
  {
    title: "Reports",
    href: "/demo/reports",
    icon: FileText,
    subItems: [
      { title: "Access Reports", href: "/demo/reports/access" },
      { title: "Audit Logs", href: "/demo/reports/audit" },
      { title: "Compliance", href: "/demo/reports/compliance" },
    ],
  },
  {
    title: "Alerts",
    href: "/demo/alerts",
    icon: Bell,
    subItems: [
      { title: "Alert Rules", href: "/demo/alerts/rules" },
      { title: "Notifications", href: "/demo/alerts/notifications" },
    ],
  },
  {
    title: "Settings",
    href: "/demo/settings",
    icon: Settings,
    subItems: [
      { title: "General", href: "/demo/settings/general" },
      { title: "Security", href: "/demo/settings/security" },
      { title: "Integrations", href: "/demo/settings/integrations" },
    ],
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="w-64 min-h-screen border-r bg-card">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {items.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href ? "bg-accent text-accent-foreground" : "transparent"
                  )}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Link>
                {item.subItems && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={cn(
                          "flex items-center rounded-lg px-3 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                          pathname === subItem.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                        )}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}