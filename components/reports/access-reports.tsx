"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart } from "@/components/charts/bar-chart"

const accessData = [
  { name: "GET", value: 1250 },
  { name: "POST", value: 850 },
  { name: "PUT", value: 420 },
  { name: "DELETE", value: 125 },
]

const recentAccess = [
  {
    user: "john.doe@example.com",
    resource: "S3 Bucket: data-archive",
    action: "GetObject",
    timestamp: "2024-03-20 14:30:00",
    status: "Success",
  },
  {
    user: "jane.smith@example.com",
    resource: "EC2 Instance: web-server-1",
    action: "StartInstance",
    timestamp: "2024-03-20 14:28:00",
    status: "Success",
  },
  {
    user: "admin@example.com",
    resource: "IAM Role: DevOps",
    action: "UpdateRole",
    timestamp: "2024-03-20 14:25:00",
    status: "Denied",
  },
]

export function AccessReports() {
  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="pt-6">
          <BarChart data={accessData} dataKey="value" />
        </CardContent>
      </Card>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Resource</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Timestamp</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentAccess.map((access, index) => (
            <TableRow key={index}>
              <TableCell>{access.user}</TableCell>
              <TableCell>{access.resource}</TableCell>
              <TableCell>{access.action}</TableCell>
              <TableCell>{access.timestamp}</TableCell>
              <TableCell>
                <Badge variant={access.status === "Success" ? "default" : "destructive"}>
                  {access.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}