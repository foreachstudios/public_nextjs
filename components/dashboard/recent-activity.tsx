"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const recentActivity = [
  {
    user: "John Doe",
    action: "Created new IAM role",
    resource: "AdminRole",
    timestamp: "2024-03-20 14:30:00",
  },
  {
    user: "Jane Smith",
    action: "Modified policy",
    resource: "S3AccessPolicy",
    timestamp: "2024-03-20 14:15:00",
  },
  {
    user: "Mike Johnson",
    action: "Deleted user",
    resource: "temp-user-1",
    timestamp: "2024-03-20 14:00:00",
  },
]

export function RecentActivity() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Action</TableHead>
          <TableHead>Resource</TableHead>
          <TableHead>Timestamp</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentActivity.map((activity, index) => (
          <TableRow key={index}>
            <TableCell>{activity.user}</TableCell>
            <TableCell>{activity.action}</TableCell>
            <TableCell>{activity.resource}</TableCell>
            <TableCell>{activity.timestamp}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}