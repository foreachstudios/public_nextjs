export interface RegisterRequest {
  customer_email: string;
  full_name: string;
  company: string;
  phone_number: string;
  password_hash: string;
}

export interface RegisterResponse {
  status: string;
  detail?: string;
}