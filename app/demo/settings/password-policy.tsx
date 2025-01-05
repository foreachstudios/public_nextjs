"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { fetchWithAuth } from '@/lib/api';
import AlertComponent from "@/components/alertComponent"

interface PasswordPolicy {
  account_id: string;
  minimum_password_length: number;
  require_symbols: boolean;
  require_numbers: boolean;
  require_uppercase_chars: boolean;
  require_lowercase_chars: boolean;
  allow_users_change_password: boolean;
  max_password_age: number;
  password_reuse_prevention: number;
  hard_expiry: boolean;
}

export default function PasswordPolicyPage() {
  const [policy, setPolicy] = useState<PasswordPolicy>({
    account_id: '',
    minimum_password_length: 8,
    require_symbols: true,
    require_numbers: true,
    require_uppercase_chars: true,
    require_lowercase_chars: true,
    allow_users_change_password: true,
    max_password_age: 90,
    password_reuse_prevention: 24,
    hard_expiry: false
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [selectedAccountId, setSelectedAccountId] = useState<string>("");

  useEffect(() => {
    if (selectedAccountId) {
      fetchPolicy();
    }
  }, [selectedAccountId]);

  const fetchPolicy = async () => {
    try {
      const data = await fetchWithAuth(`/api/policies/password/${selectedAccountId}`);
      setPolicy(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to fetch password policy:', error);
      setIsError(true);
      setAlertMessage("Failed to load password policy");
      setIsLoading(false);
    }
  };

  const handleUpdate = async () => {
    try {
      await fetchWithAuth(`/api/policies/password/${selectedAccountId}`, {
        method: 'PUT',
        body: JSON.stringify(policy)
      });
      setAlertMessage("Password policy updated successfully!");
    } catch (error) {
      console.error('Failed to update password policy:', error);
      setIsError(true);
      setAlertMessage("Failed to update password policy");
    }
  };

  return (
    <div className="container mx-auto py-10">
      {isError && <AlertComponent message={alertMessage} setIsError={setIsError}/>}
      <Card>
        <CardHeader>
          <CardTitle>Password Policy Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Minimum Password Length
            </label>
            <Input
              type="number"
              value={policy.minimum_password_length}
              onChange={(e) => setPolicy({
                ...policy,
                minimum_password_length: parseInt(e.target.value)
              })}
              min={8}
              max={128}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">
              Require Symbols
            </label>
            <Switch
              checked={policy.require_symbols}
              onCheckedChange={(checked) => setPolicy({
                ...policy,
                require_symbols: checked
              })}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">
              Require Numbers
            </label>
            <Switch
              checked={policy.require_numbers}
              onCheckedChange={(checked) => setPolicy({
                ...policy,
                require_numbers: checked
              })}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">
              Require Uppercase Characters
            </label>
            <Switch
              checked={policy.require_uppercase_chars}
              onCheckedChange={(checked) => setPolicy({
                ...policy,
                require_uppercase_chars: checked
              })}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">
              Require Lowercase Characters
            </label>
            <Switch
              checked={policy.require_lowercase_chars}
              onCheckedChange={(checked) => setPolicy({
                ...policy,
                require_lowercase_chars: checked
              })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Maximum Password Age (days)
            </label>
            <Input
              type="number"
              value={policy.max_password_age}
              onChange={(e) => setPolicy({
                ...policy,
                max_password_age: parseInt(e.target.value)
              })}
              min={0}
              max={365}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Password Reuse Prevention
            </label>
            <Input
              type="number"
              value={policy.password_reuse_prevention}
              onChange={(e) => setPolicy({
                ...policy,
                password_reuse_prevention: parseInt(e.target.value)
              })}
              min={0}
              max={24}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">
              Users Can Change Password
            </label>
            <Switch
              checked={policy.allow_users_change_password}
              onCheckedChange={(checked) => setPolicy({
                ...policy,
                allow_users_change_password: checked
              })}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">
              Hard Expiry
            </label>
            <Switch
              checked={policy.hard_expiry}
              onCheckedChange={(checked) => setPolicy({
                ...policy,
                hard_expiry: checked
              })}
            />
          </div>

          <Button onClick={handleUpdate} className="w-full">
            Update Password Policy
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}