"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, Edit, Trash2 } from "lucide-react"

const rules = [
  {
    name: "High CPU Usage",
    condition: "CPU > 90% for 5 minutes",
    severity: "Critical",
    status: "Active",
    lastTriggered: "2024-03-20 13:45:00",
  },
  {
    name: "Low Storage Space",
    condition: "Storage < 10% free",
    severity: "Warning",
    status: "Active",
    lastTriggered: "2024-03-19 22:30:00",
  },
  {
    name: "Failed Login Attempts",
    condition: "> 5 failed attempts in 10 minutes",
    severity: "High",
    status: "Inactive",
    lastTriggered: "Never",
  },
]

export function AlertRules() {
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Rule
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Condition</TableHead>
            <TableHead>Severity</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Triggered</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rules.map((rule) => (
            <TableRow key={rule.name}>
              <TableCell>{rule.name}</TableCell>
              <TableCell>{rule.condition}</TableCell>
              <TableCell>
                <Badge variant={
                  rule.severity === "Critical" ? "destructive" :
                  rule.severity === "High" ? "default" : "secondary"
                }>
                  {rule.severity}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={rule.status === "Active" ? "default" : "secondary"}>
                  {rule.status}
                </Badge>
              </TableCell>
              <TableCell>{rule.lastTriggered}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}