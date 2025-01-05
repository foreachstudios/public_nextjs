"use client"
import React, { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/dashboard/overview"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { SecurityScore } from "@/components/dashboard/security-score"
import { DashboardStats } from "@/components/dashboard/stats-cards"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

type LatestInfo = {
  total_resources: string;
  resources_with_issues: string;
  total_policies: string;
  policies_with_issues: string;
  time_of_last_scan: string;
  issue_count: string;
  accounts_monitored: string;
};

export default function DashboardContent() {

  const [isloading, setIsloading] = useState(false)
  const [latestInfo, setLatestInfo] = useState<LatestInfo>({
    total_resources: '0',
    resources_with_issues: '0',
    total_policies: '0',
    policies_with_issues: '0',
    time_of_last_scan: '0',
    issue_count: "0",
    accounts_monitored: "0",
  })

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/dashboard`, {
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
        setLatestInfo(data)
        setIsloading(true)
        console.log(data);
        
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []);

  
  return (
    <div className="space-y-8">
      
      <DashboardStats />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Security Score</CardTitle>
          </CardHeader>
          <CardContent>
            <SecurityScore />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <RecentActivity />
        </CardContent>
      </Card>
    </div>
  )
}