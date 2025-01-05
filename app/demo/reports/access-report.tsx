"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { fetchWithAuth } from '@/lib/api';
import AlertComponent from "@/components/alertComponent"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface IamAccessKey {
  access_key_id: string;
  user_name: string;
  status: string;
  create_date: string;
  last_used_date: string | null;
  last_used_region: string | null;
  last_used_service: string | null;
}

interface AwsAccount {
  account_id: string;
  account_name: string;
}

export default function AccessReportPage() {
  const [accessKeys, setAccessKeys] = useState<IamAccessKey[]>([]);
  const [accounts, setAccounts] = useState<AwsAccount[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<string>("");
  const [isError, setIsError] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAccounts();
  }, []);

  useEffect(() => {
    if (selectedAccount) {
      fetchAccessKeys();
    }
  }, [selectedAccount]);

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

  const fetchAccessKeys = async () => {
    try {
      const data = await fetchWithAuth(`/api/aws/accounts/${selectedAccount}/access-keys`);
      setAccessKeys(data);
    } catch (error) {
      console.error('Failed to fetch access keys:', error);
      setIsError(true);
      setAlertMessage("Failed to load access keys");
    }
  };

  const formatDate = (dateString: string | null) => {
    return dateString ? new Date(dateString).toLocaleString() : 'Never';
  };

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      {isError && <AlertComponent message={alertMessage} setIsError={setIsError}/>}
      <Card>
        <CardHeader>
          <CardTitle>IAM Access Key Report</CardTitle>
          <div className="mt-4 w-[200px]">
            <Select value={selectedAccount} onValueChange={setSelectedAccount}>
              <SelectTrigger>
                <SelectValue placeholder="Select Account" />
              </SelectTrigger>
              <SelectContent>
                {accounts.map((account) => (
                  <SelectItem key={account.account_id} value={account.account_id}>
                    {account.account_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Access Key ID</TableHead>
                <TableHead>User Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last Used</TableHead>
                <TableHead>Last Region</TableHead>
                <TableHead>Last Service</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accessKeys.map((key) => (
                <TableRow key={key.access_key_id}>
                  <TableCell className="font-mono">{key.access_key_id}</TableCell>
                  <TableCell>{key.user_name}</TableCell>
                  <TableCell>{key.status}</TableCell>
                  <TableCell>{formatDate(key.create_date)}</TableCell>
                  <TableCell>{formatDate(key.last_used_date)}</TableCell>
                  <TableCell>{key.last_used_region || 'N/A'}</TableCell>
                  <TableCell>{key.last_used_service || 'N/A'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}