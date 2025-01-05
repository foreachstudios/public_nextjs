"use client"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, Key, Lock, Fingerprint } from "lucide-react"

export function SecuritySettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start space-x-4">
            <Key className="h-5 w-5 mt-1" />
            <div className="flex-1 space-y-2">
              <Label className="text-base">Password Policy</Label>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Minimum length (characters)</Label>
                  <Select defaultValue="12">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="8">8 characters</SelectItem>
                      <SelectItem value="12">12 characters</SelectItem>
                      <SelectItem value="16">16 characters</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <Label>Require special characters</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Require numbers</Label>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start space-x-4">
            <Fingerprint className="h-5 w-5 mt-1" />
            <div className="flex-1 space-y-2">
              <Label className="text-base">Multi-Factor Authentication</Label>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Require MFA for all users</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Allow SMS authentication</Label>
                  <Switch />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start space-x-4">
            <Lock className="h-5 w-5 mt-1" />
            <div className="flex-1 space-y-2">
              <Label className="text-base">Session Security</Label>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Session timeout (minutes)</Label>
                  <Select defaultValue="30">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <Label>Enforce IP restrictions</Label>
                  <Switch />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button className="w-full">
        Save Security Settings
      </Button>
    </div>
  )
}