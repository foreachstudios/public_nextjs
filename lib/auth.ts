import { fetchWithAuth } from './api';

export interface UserProfile {
  customer_id: number;
  customer_email: string;
  full_name: string;
  company: string;
  phone_number: string;
  created_at: string;
}

export async function login(email: string, password: string): Promise<boolean> {
  try {
    const response = await fetchWithAuth('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: email,
        password_hash: password
      })
    });

    if (response.status === 'success' && response.access_token) {
      setAuthToken(response.access_token);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Login error:', error);
    return false;
  }
}

export async function register(userData: {
  customer_email: string;
  full_name: string;
  company: string;
  phone_number: string;
  password_hash: string;
}): Promise<boolean> {
  try {
    const response = await fetchWithAuth('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
    
    return response.status === 'success';
  } catch (error) {
    console.error('Registration error:', error);
    return false;
  }
}

export function setAuthToken(token: string): void {
  document.cookie = `token=${token}; path=/`;
}

export function getAuthToken(): string | null {
  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('token='));
  return cookie?.split('=')[1] || null;
}

export function removeAuthToken(): void {
  document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export async function getCurrentUser(): Promise<UserProfile> {
  const response = await fetchWithAuth('/api/users/me');
  return response;
}

export async function isAuthenticated(): Promise<boolean> {
  try {
    const token = getAuthToken();
    if (!token) return false;
    const user = await getCurrentUser();
    return !!user;
  } catch (error) {
    console.error('Authentication check error:', error);
    return false;
  }
}