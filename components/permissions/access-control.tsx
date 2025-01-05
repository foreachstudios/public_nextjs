"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, Edit, Trash2, Lock } from "lucide-react"

const accessRules = [
  {
    resource: "Production DB",
    principal: "DevOps Team",
    permission: "Full Access",
    condition: "IP Range: 10.0.0.0/8",
    status: "Active",
  },
  {
    resource: "Staging Environment",
    principal: "Developers",
    permission: "Read/Write",
    condition: "Working Hours Only",
    status: "Active",
  },
  {
    resource: "Monitoring Dashboard",
    principal: "Support Team",
    permission: "Read Only",
    condition: "MFA Required",
    status: "Active",
  },
]

export function AccessControl() {
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Rule
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Resource</TableHead>
            <TableHead>Principal</TableHead>
            <TableHead>Permission</TableHead>
            <TableHead>Condition</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accessRules.map((rule) => (
            <TableRow key={rule.resource}>
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <Lock className="mr-2 h-4 w-4" />
                  {rule.resource}
                </div>
              </TableCell>
              <TableCell>{rule.principal}</TableCell>
              <TableCell>
                <Badge variant="secondary">{rule.permission}</Badge>
              </TableCell>
              <TableCell>{rule.condition}</TableCell>
              <TableCell>
                <Badge variant={rule.status === "Active" ? "default" : "secondary"}>
                  {rule.status}
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