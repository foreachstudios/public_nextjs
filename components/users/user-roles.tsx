"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, Edit, Trash2, Shield } from "lucide-react"

const roles = [
  {
    name: "EC2-Admin",
    service: "EC2",
    type: "AWS Service Role",
    permissions: ["ec2:*"],
    status: "Active",
  },
  {
    name: "S3-ReadOnly",
    service: "S3",
    type: "AWS Service Role",
    permissions: ["s3:Get*", "s3:List*"],
    status: "Active",
  },
  {
    name: "RDS-Operator",
    service: "RDS",
    type: "AWS Service Role",
    permissions: ["rds:Describe*", "rds:Modify*"],
    status: "Inactive",
  },
]

export function UserRoles() {
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Role
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Permissions</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.name}>
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <Shield className="mr-2 h-4 w-4" />
                  {role.name}
                </div>
              </TableCell>
              <TableCell>{role.service}</TableCell>
              <TableCell>{role.type}</TableCell>
              <TableCell>
                <div className="flex gap-1">
                  {role.permissions.map((permission) => (
                    <Badge key={permission} variant="secondary">
                      {permission}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={role.status === "Active" ? "default" : "secondary"}>
                  {role.status}
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