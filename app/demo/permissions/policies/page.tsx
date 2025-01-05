"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Policies } from "@/components/permissions/policies"

export default function PoliciesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">IAM Policies</h1>
      <Card>
        <CardHeader>
          <CardTitle>Policies Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Policies />
        </CardContent>
      </Card>
    </div>
  )
}