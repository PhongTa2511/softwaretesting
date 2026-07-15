export type Role = "Admin" | "TestLeader" | "Tester" | "Developer";

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: Role;
  avatarUrl?: string;
}

export interface LoginCredentials {
  email: string;
  password?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
