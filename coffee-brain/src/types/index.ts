// Types for Coffee Brain website

export interface Photo {
  id: number;
  url: string;
  description: string;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'coffee' | 'pastry' | 'cold-drinks' | 'snacks';
  image?: string;
}

export interface User {
  id: number;
  username: string;
  isAdmin: boolean;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}