"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { fetchWithAuth } from '@/lib/api';
import AlertComponent from "@/components/alertComponent"

interface CustomerProfile {
  customer_id: number;
  customer_email: string;
  full_name: string;
  company: string;
  phone_number: string;
  created_at: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<CustomerProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    full_name: '',
    company: '',
    phone_number: ''
  });
  const [isError, setIsError] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await fetchWithAuth('/api/customers/me');
      setProfile(data);
      setEditForm({
        full_name: data.full_name,
        company: data.company,
        phone_number: data.phone_number
      });
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to fetch profile:', error);
      setIsError(true);
      setAlertMessage("Failed to load profile data");
      setIsLoading(false);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await fetchWithAuth(`/api/customers/${profile?.customer_id}`, {
        method: 'PUT',
        body: JSON.stringify(editForm)
      });
      setProfile(data);
      setIsEditing(false);
      setAlertMessage("Profile updated successfully!");
    } catch (error) {
      console.error('Failed to update profile:', error);
      setIsError(true);
      setAlertMessage("Failed to update profile");
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      {isError && <AlertComponent message={alertMessage} setIsError={setIsError}/>}
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent>
          {!isEditing ? (
            <div className="space-y-4">
              <div>
                <label className="font-medium">Email</label>
                <p className="text-gray-600">{profile?.customer_email}</p>
              </div>
              <div>
                <label className="font-medium">Full Name</label>
                <p className="text-gray-600">{profile?.full_name}</p>
              </div>
              <div>
                <label className="font-medium">Company</label>
                <p className="text-gray-600">{profile?.company}</p>
              </div>
              <div>
                <label className="font-medium">Phone Number</label>
                <p className="text-gray-600">{profile?.phone_number}</p>
              </div>
              <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
            </div>
          ) : (
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="font-medium">Full Name</label>
                <Input
                  value={editForm.full_name}
                  onChange={(e) => setEditForm({ ...editForm, full_name: e.target.value })}
                />
              </div>
              <div>
                <label className="font-medium">Company</label>
                <Input
                  value={editForm.company}
                  onChange={(e) => setEditForm({ ...editForm, company: e.target.value })}
                />
              </div>
              <div>
                <label className="font-medium">Phone Number</label>
                <Input
                  value={editForm.phone_number}
                  onChange={(e) => setEditForm({ ...editForm, phone_number: e.target.value })}
                />
              </div>
              <div className="flex space-x-4">
                <Button type="submit">Save Changes</Button>
                <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}