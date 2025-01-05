"use client"

import { Progress } from "@/components/ui/progress"

export function SecurityScore() {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Overall Score</span>
          <span className="text-sm font-medium">85%</span>
        </div>
        <Progress value={85} className="h-2" />
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Password Policy</span>
          <span className="text-sm font-medium">90%</span>
        </div>
        <Progress value={90} className="h-2" />
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">MFA Adoption</span>
          <span className="text-sm font-medium">75%</span>
        </div>
        <Progress value={75} className="h-2" />
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Access Reviews</span>
          <span className="text-sm font-medium">95%</span>
        </div>
        <Progress value={95} className="h-2" />
      </div>
    </div>
  )
}