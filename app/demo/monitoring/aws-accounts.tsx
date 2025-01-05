"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { fetchWithAuth } from '@/lib/api';
import AlertComponent from "@/components/alertComponent"

interface AwsAccount {
  nx_id: string;
  account_id: string;
  account_name: string;
  account_email: string;
  is_org_master: boolean;
  last_scanned: string;
}

export default function AwsAccountsPage() {
  const [accounts, setAccounts] = useState<AwsAccount[]>([]);
  const [isError, setIsError] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const data = await fetchWithAuth('/api/aws/accounts');
      setAccounts(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to fetch AWS accounts:', error);
      setIsError(true);
      setAlertMessage("Failed to load AWS accounts");
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      {isError && <AlertComponent message={alertMessage} setIsError={setIsError}/>}
      <Card>
        <CardHeader>
          <CardTitle>AWS Accounts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Account ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Organization Master</TableHead>
                <TableHead>Last Scanned</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accounts.map((account) => (
                <TableRow key={account.account_id}>
                  <TableCell>{account.account_id}</TableCell>
                  <TableCell>{account.account_name}</TableCell>
                  <TableCell>{account.account_email}</TableCell>
                  <TableCell>{account.is_org_master ? "Yes" : "No"}</TableCell>
                  <TableCell>{formatDate(account.last_scanned)}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" 
                            onClick={() => window.location.href = `/demo/monitoring/${account.account_id}`}>
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}