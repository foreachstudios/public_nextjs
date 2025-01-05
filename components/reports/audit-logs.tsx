"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Download, Calendar } from "lucide-react"

const auditLogs = [
  {
    timestamp: "2024-03-20 14:30:00",
    user: "john.doe@example.com",
    action: "Policy Update",
    resource: "IAM Policy: S3Access",
    details: "Added new S3 bucket permissions",
  },
  {
    timestamp: "2024-03-20 14:25:00",
    user: "jane.smith@example.com",
    action: "User Creation",
    resource: "IAM User: new-developer",
    details: "Created new IAM user with developer permissions",
  },
  {
    timestamp: "2024-03-20 14:20:00",
    user: "admin@example.com",
    action: "Role Deletion",
    resource: "IAM Role: deprecated-role",
    details: "Removed unused IAM role",
  },
]

export function AuditLogs() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search audit logs..." className="pl-8 w-[300px]" />
          </div>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Timestamp</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Resource</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {auditLogs.map((log, index) => (
            <TableRow key={index}>
              <TableCell className="font-mono text-sm">
                {log.timestamp}
              </TableCell>
              <TableCell>{log.user}</TableCell>
              <TableCell>
                <Badge variant="secondary">{log.action}</Badge>
              </TableCell>
              <TableCell>{log.resource}</TableCell>
              <TableCell className="max-w-md truncate">
                {log.details}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}