"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"

const logs = [
  {
    timestamp: "2024-03-20 14:30:00",
    level: "ERROR",
    service: "API Gateway",
    message: "Rate limit exceeded for endpoint /api/v1/users",
  },
  {
    timestamp: "2024-03-20 14:29:55",
    level: "INFO",
    service: "EC2",
    message: "Instance i-1234abcd started successfully",
  },
  {
    timestamp: "2024-03-20 14:29:45",
    level: "WARN",
    service: "RDS",
    message: "High CPU utilization detected on db-instance-1",
  },
]

export function LogViewer() {
  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search logs..." className="pl-8" />
          </div>
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Timestamp</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {logs.map((log) => (
            <TableRow key={log.timestamp}>
              <TableCell className="font-mono text-sm">
                {log.timestamp}
              </TableCell>
              <TableCell>
                <Badge variant={
                  log.level === "ERROR" ? "destructive" :
                  log.level === "WARN" ? "default" : "secondary"
                }>
                  {log.level}
                </Badge>
              </TableCell>
              <TableCell>{log.service}</TableCell>
              <TableCell className="max-w-xl truncate">
                {log.message}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}