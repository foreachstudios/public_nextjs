"use client"

import { Progress } from "@/components/ui/progress"

const resources = [
  { name: "CPU Cores", used: 12, total: 16, unit: "cores" },
  { name: "Memory", used: 28, total: 32, unit: "GB" },
  { name: "Storage", used: 850, total: 1000, unit: "GB" },
  { name: "Network Bandwidth", used: 8.5, total: 10, unit: "Gbps" },
]

export function ResourceUtilization() {
  return (
    <div className="space-y-6">
      {resources.map((resource) => {
        const percentage = (resource.used / resource.total) * 100
        return (
          <div key={resource.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{resource.name}</span>
              <span>
                {resource.used} / {resource.total} {resource.unit}
              </span>
            </div>
            <Progress value={percentage} className="h-2" />
            <p className="text-xs text-muted-foreground text-right">
              {percentage.toFixed(1)}% utilized
            </p>
          </div>
        )
      })}
    </div>
  )
}