export interface UserProfile {
  customer_id: number;
  customer_email: string;
  full_name: string;
  company: string;
  phone_number: string;
  created_at: string;
}

export interface ApiError {
  status: string;
  detail: string;
}

export interface LoginResponse {
  status: string;
  access_token?: string;
  detail?: string;
}

export interface RegisterResponse {
  status: string;
  detail?: string;
}