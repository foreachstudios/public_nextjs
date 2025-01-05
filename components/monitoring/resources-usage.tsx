"use client"

import { Progress } from "@/components/ui/progress"

interface ResourcesUsageProps {
  type: "ec2" | "s3" | "rds"
}

export function ResourcesUsage({ type }: ResourcesUsageProps) {
  const getUsageData = (type: string) => {
    switch (type) {
      case "ec2":
        return { used: 12, total: 20, unit: "instances" }
      case "s3":
        return { used: 850, total: 1000, unit: "GB" }
      case "rds":
        return { used: 4, total: 5, unit: "instances" }
      default:
        return { used: 0, total: 0, unit: "" }
    }
  }

  const data = getUsageData(type)
  const percentage = (data.used / data.total) * 100

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Used: {data.used} {data.unit}</span>
        <span>Total: {data.total} {data.unit}</span>
      </div>
      <Progress value={percentage} className="h-2" />
      <p className="text-xs text-muted-foreground text-right">
        {percentage.toFixed(1)}% used
      </p>
    </div>
  )
}