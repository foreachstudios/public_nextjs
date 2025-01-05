"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserGroups } from "@/components/users/user-groups"

export default function GroupsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">User Groups</h1>
      <Card>
        <CardHeader>
          <CardTitle>Groups Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <UserGroups />
        </CardContent>
      </Card>
    </div>
  )
}