"use client"
import React, { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResourcesOverview } from "@/components/monitoring/resources-overview"
import { ResourcesList } from "@/components/monitoring/resources-list"
import { ResourcesUsage } from "@/components/monitoring/resources-usage"

type Resources = {
  resource_id: string,
  cloud_type: string,
  resource_type: string,
  owner: string,
  violation: string,
  severity: string,
  creation_time: string,
  last_used: string,
  last_rotation: string,
};

export default function ResourcesPage() {

  const [isloading, setIsloading] = useState(false)
  const [resources, setResources] = useState<Resources[]>([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/inventories`, {
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
        setResources(data)
        setIsloading(true)
        console.log(data);
        
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Resources Monitoring</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>EC2 Instances</CardTitle>
          </CardHeader>
          <CardContent>
            <ResourcesUsage type="ec2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>S3 Buckets</CardTitle>
          </CardHeader>
          <CardContent>
            <ResourcesUsage type="s3" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>RDS Databases</CardTitle>
          </CardHeader>
          <CardContent>
            <ResourcesUsage type="rds" />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Resources Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResourcesOverview />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>All Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <ResourcesList />
        </CardContent>
      </Card>
    </div>
  )
}