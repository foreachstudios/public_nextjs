"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AccessControl } from "@/components/permissions/access-control"

export default function AccessControlPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Access Control</h1>
      <Card>
        <CardHeader>
          <CardTitle>Access Management</CardTitle>
        </CardHeader>
        <CardContent>
          <AccessControl />
        </CardContent>
      </Card>
    </div>
  )
}