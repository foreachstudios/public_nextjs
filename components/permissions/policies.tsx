"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, Edit, Trash2, FileCode } from "lucide-react"

const policies = [
  {
    name: "AdminPolicy",
    description: "Full administrative access",
    type: "Customer Managed",
    version: "v1",
    status: "Active",
  },
  {
    name: "DeveloperAccess",
    description: "Access for development resources",
    type: "Customer Managed",
    version: "v2",
    status: "Active",
  },
  {
    name: "ReadOnlyAccess",
    description: "Read-only access to all resources",
    type: "AWS Managed",
    version: "v1",
    status: "Active",
  },
]

export function Policies() {
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Policy
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Version</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {policies.map((policy) => (
            <TableRow key={policy.name}>
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <FileCode className="mr-2 h-4 w-4" />
                  {policy.name}
                </div>
              </TableCell>
              <TableCell>{policy.description}</TableCell>
              <TableCell>
                <Badge variant="secondary">{policy.type}</Badge>
              </TableCell>
              <TableCell>{policy.version}</TableCell>
              <TableCell>
                <Badge variant={policy.status === "Active" ? "default" : "secondary"}>
                  {policy.status}
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