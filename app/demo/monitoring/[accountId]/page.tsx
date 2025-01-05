"use client"

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { fetchWithAuth } from '@/lib/api';
import AlertComponent from "@/components/alertComponent"

interface AwsAccount {
  account_id: string;
  account_name: string;
  account_email: string;
}

interface IamUser {
  user_id: string;
  user_name: string;
  access_key_id: string;
  key_status: string;
  last_used_date: string;
  last_used_service: string;
}

interface IamRole {
  role_id: string;
  role_name: string;
  role_arn: string;
}

export default function AccountDetailsPage() {
  const params = useParams();
  const accountId = params.accountId as string;
  
  const [account, setAccount] = useState<AwsAccount | null>(null);
  const [users, setUsers] = useState<IamUser[]>([]);
  const [roles, setRoles] = useState<IamRole[]>([]);
  const [isError, setIsError] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAccountData();
  }, [accountId]);

  const fetchAccountData = async () => {
    try {
      const [accountData, userData, rolesData] = await Promise.all([
        fetchWithAuth(`/api/aws/accounts/${accountId}`),
        fetchWithAuth(`/api/aws/accounts/${accountId}/iam_users`),
        fetchWithAuth(`/api/iam/roles?account_id=${accountId}`)
      ]);
      
      setAccount(accountData);
      setUsers(userData);
      setRoles(rolesData);
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to fetch account data:', error);
      setIsError(true);
      setAlertMessage("Failed to load account data");
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return dateString ? new Date(dateString).toLocaleString() : 'Never';
  };

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      {isError && <AlertComponent message={alertMessage} setIsError={setIsError}/>}
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{account?.account_name} ({account?.account_id})</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Email: {account?.account_email}</p>
        </CardContent>
      </Card>

      <Tabs defaultValue="users">
        <TabsList>
          <TabsTrigger value="users">IAM Users</TabsTrigger>
          <TabsTrigger value="roles">IAM Roles</TabsTrigger>
        </TabsList>
        
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>IAM Users</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Username</TableHead>
                    <TableHead>Access Key ID</TableHead>
                    <TableHead>Key Status</TableHead>
                    <TableHead>Last Used</TableHead>
                    <TableHead>Last Service</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.user_id}>
                      <TableCell>{user.user_name}</TableCell>
                      <TableCell>{user.access_key_id || 'No key'}</TableCell>
                      <TableCell>{user.key_status || 'N/A'}</TableCell>
                      <TableCell>{formatDate(user.last_used_date)}</TableCell>
                      <TableCell>{user.last_used_service || 'N/A'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="roles">
          <Card>
            <CardHeader>
              <CardTitle>IAM Roles</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Role Name</TableHead>
                    <TableHead>Role ARN</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {roles.map((role) => (
                    <TableRow key={role.role_id}>
                      <TableCell>{role.role_name}</TableCell>
                      <TableCell className="font-mono text-sm">{role.role_arn}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}