"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const resources = [
  {
    name: "web-server-1",
    type: "EC2",
    region: "us-east-1",
    status: "Running",
    lastUpdated: "2024-03-20 14:30:00",
  },
  {
    name: "app-data",
    type: "S3",
    region: "us-east-1",
    status: "Active",
    lastUpdated: "2024-03-20 14:15:00",
  },
  {
    name: "prod-db",
    type: "RDS",
    region: "us-east-1",
    status: "Available",
    lastUpdated: "2024-03-20 14:00:00",
  },
]

export function ResourcesList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Region</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Updated</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {resources.map((resource) => (
          <TableRow key={resource.name}>
            <TableCell>{resource.name}</TableCell>
            <TableCell>{resource.type}</TableCell>
            <TableCell>{resource.region}</TableCell>
            <TableCell>
              <Badge variant="outline">{resource.status}</Badge>
            </TableCell>
            <TableCell>{resource.lastUpdated}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}