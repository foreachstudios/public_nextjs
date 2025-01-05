"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const findings = [
  {
    id: "F-001",
    description: "Weak password policy detected",
    severity: "Medium",
    status: "Open",
    date: "2024-03-20",
  },
  {
    id: "F-002",
    description: "Unencrypted data storage",
    severity: "High",
    status: "Resolved",
    date: "2024-03-19",
  },
  {
    id: "F-003",
    description: "Missing audit logs",
    severity: "Low",
    status: "In Progress",
    date: "2024-03-18",
  },
]

export function ComplianceReport() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Severity</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {findings.map((finding) => (
          <TableRow key={finding.id}>
            <TableCell>{finding.id}</TableCell>
            <TableCell>{finding.description}</TableCell>
            <TableCell>
              <Badge variant={
                finding.severity === "High" ? "destructive" :
                finding.severity === "Medium" ? "default" : "secondary"
              }>
                {finding.severity}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge variant={
                finding.status === "Open" ? "destructive" :
                finding.status === "In Progress" ? "default" : "secondary"
              }>
                {finding.status}
              </Badge>
            </TableCell>
            <TableCell>{finding.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}