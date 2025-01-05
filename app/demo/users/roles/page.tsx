"use client"
import React, { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserRoles } from "@/components/users/user-roles"

type Role = {
  role_id: string,
  role_name: string,
  arn: string,
  create_date: string,
  path: string,
  max_session_duration: string,
  description: string
};


export default function RolesPage() {

  const [isloading, setIsloading] = useState(false)
  const [roles, setRoles] = useState<Role[]>([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/roles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setRoles(data)
        setIsloading(true)
        console.log(data);
        
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">IAM Roles</h1>
      <Card>
        <CardHeader>
          <CardTitle>Roles Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <UserRoles />
        </CardContent>
      </Card>
    </div>
  )
}