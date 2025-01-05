"use client"

import { Progress } from "@/components/ui/progress"

const complianceItems = [
  { name: "Password Policy", score: 95 },
  { name: "Access Controls", score: 88 },
  { name: "Data Encryption", score: 100 },
  { name: "Audit Logging", score: 92 },
]

export function ComplianceScore() {
  const overallScore = Math.round(
    complianceItems.reduce((acc, item) => acc + item.score, 0) / complianceItems.length
  )

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-medium">Overall Score</span>
          <span className="text-lg font-medium">{overallScore}%</span>
        </div>
        <Progress value={overallScore} className="h-2" />
      </div>
      {complianceItems.map((item) => (
        <div key={item.name}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">{item.name}</span>
            <span className="text-sm font-medium">{item.score}%</span>
          </div>
          <Progress value={item.score} className="h-2" />
        </div>
      ))}
    </div>
  )
}