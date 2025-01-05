"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"
import { PermissionsOverview } from "@/components/permissions/permissions-overview"

export default function PermissionsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Permissions Management</h1>
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Demo Mode</AlertTitle>
        <AlertDescription>
          You are viewing demo permissions data. Changes will not be persisted.
        </AlertDescription>
      </Alert>
      <Card>
        <CardHeader>
          <CardTitle>Permissions Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <PermissionsOverview />
        </CardContent>
      </Card>
    </div>
  )
}