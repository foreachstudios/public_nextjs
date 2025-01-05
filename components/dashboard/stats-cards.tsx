"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatsCardProps {
  title: string
  value: string | number
  subtitle?: string
}

function StatsCard({ title, value, subtitle }: StatsCardProps) {
  return (
    <Card className="cursor-pointer hover:shadow-2xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </CardContent>
    </Card>
  )
}

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
       <StatsCard 
        title="Accounts"
        value={245}
        subtitle="+4 from last month"
      />
      <StatsCard 
        title="Total Resources"
        value={245}
        subtitle="+4 from last month"
      />
      <StatsCard 
        title="Resources (Issues)"
        value={89}
        subtitle="+2 from last week"
      />
      <StatsCard 
        title="Total Policies"
        value={3}
        subtitle="-2 from yesterday"
      />
      <StatsCard 
        title="Policies (Issues)"
        value={3}
        subtitle="-2 from yesterday"
      />
      <StatsCard 
        title="Issues"
        value={3}
        subtitle="-2 from yesterday"
      />
    </div>
  )
}