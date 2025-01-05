export interface LoginRequest {
  username: string;
  password_hash: string;
}

export interface LoginResponse {
  status: string;
  access_token?: string;
  detail?: string;
}