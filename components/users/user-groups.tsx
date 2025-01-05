"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, Edit, Trash2, Users } from "lucide-react"

const groups = [
  {
    name: "Administrators",
    members: 5,
    policies: ["AdminAccess", "AuditAccess"],
    status: "Active",
  },
  {
    name: "Developers",
    members: 12,
    policies: ["DeveloperAccess", "S3Access"],
    status: "Active",
  },
  {
    name: "Analysts",
    members: 8,
    policies: ["ReadOnlyAccess", "ReportingAccess"],
    status: "Active",
  },
]

export function UserGroups() {
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Group
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Members</TableHead>
            <TableHead>Policies</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {groups.map((group) => (
            <TableRow key={group.name}>
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  {group.name}
                </div>
              </TableCell>
              <TableCell>{group.members}</TableCell>
              <TableCell>
                <div className="flex gap-1">
                  {group.policies.map((policy) => (
                    <Badge key={policy} variant="secondary">
                      {policy}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={group.status === "Active" ? "default" : "secondary"}>
                  {group.status}
                </Badge>
              </TableCell>
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