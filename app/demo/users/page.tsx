"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"
import { UserOverview } from "@/components/users/user-overview"

export default function UsersPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">User Management</h1>
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Demo Mode</AlertTitle>
        <AlertDescription>
          You are viewing demo user data. Changes will not be persisted.
        </AlertDescription>
      </Alert>
      <Card>
        <CardHeader>
          <CardTitle>Users Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <UserOverview />
        </CardContent>
      </Card>
    </div>
  )
}