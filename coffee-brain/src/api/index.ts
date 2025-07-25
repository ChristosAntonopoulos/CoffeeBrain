// Mock API service for Coffee Brain website

import { Photo, MenuItem, ApiResponse, LoginCredentials, User } from '../types';
import { mockPhotos, mockMenuItems } from './mockData';

// Simulate API delay
const delay = (ms: number = 800) => new Promise(resolve => setTimeout(resolve, ms));

// Mock storage for demonstration (in real app, this would be a database)
let photos = [...mockPhotos];
let menuItems = [...mockMenuItems];

// Authentication
export const loginApi = async (credentials: LoginCredentials): Promise<ApiResponse<{ user: User; token: string }>> => {
  await delay();
  
  // Simple mock authentication - in real app, this would verify against secure backend
  if (credentials.username === 'admin' && credentials.password === 'coffeeadmin2024') {
    const user: User = {
      id: 1,
      username: 'admin',
      isAdmin: true
    };
    
    const token = 'mock-jwt-token-' + Date.now();
    
    return {
      data: { user, token },
      message: 'Login successful'
    };
  }
  
  throw new Error('Invalid credentials');
};

// Photos API
export const getPhotos = async (): Promise<ApiResponse<Photo[]>> => {
  await delay(500);
  return {
    data: photos,
    message: 'Photos retrieved successfully'
  };
};

export const updatePhoto = async (id: number, updatedPhoto: Partial<Photo>): Promise<ApiResponse<Photo>> => {
  await delay();
  
  const photoIndex = photos.findIndex(p => p.id === id);
  if (photoIndex === -1) {
    throw new Error('Photo not found');
  }
  
  photos[photoIndex] = { ...photos[photoIndex], ...updatedPhoto };
  
  return {
    data: photos[photoIndex],
    message: 'Photo updated successfully'
  };
};

export const addPhoto = async (newPhoto: Omit<Photo, 'id'>): Promise<ApiResponse<Photo>> => {
  await delay();
  
  const photo: Photo = {
    id: Math.max(...photos.map(p => p.id)) + 1,
    ...newPhoto
  };
  
  photos.push(photo);
  
  return {
    data: photo,
    message: 'Photo added successfully'
  };
};

export const deletePhoto = async (id: number): Promise<ApiResponse<void>> => {
  await delay();
  
  const photoIndex = photos.findIndex(p => p.id === id);
  if (photoIndex === -1) {
    throw new Error('Photo not found');
  }
  
  photos.splice(photoIndex, 1);
  
  return {
    data: undefined,
    message: 'Photo deleted successfully'
  };
};

// Menu API
export const getMenuItems = async (): Promise<ApiResponse<MenuItem[]>> => {
  await delay(500);
  return {
    data: menuItems,
    message: 'Menu items retrieved successfully'
  };
};

export const getMenuItemsByCategory = async (category: MenuItem['category']): Promise<ApiResponse<MenuItem[]>> => {
  await delay(300);
  
  const filteredItems = menuItems.filter(item => item.category === category);
  
  return {
    data: filteredItems,
    message: `${category} items retrieved successfully`
  };
};

export const updateMenuItem = async (id: number, updatedItem: Partial<MenuItem>): Promise<ApiResponse<MenuItem>> => {
  await delay();
  
  const itemIndex = menuItems.findIndex(item => item.id === id);
  if (itemIndex === -1) {
    throw new Error('Menu item not found');
  }
  
  menuItems[itemIndex] = { ...menuItems[itemIndex], ...updatedItem };
  
  return {
    data: menuItems[itemIndex],
    message: 'Menu item updated successfully'
  };
};

export const addMenuItem = async (newItem: Omit<MenuItem, 'id'>): Promise<ApiResponse<MenuItem>> => {
  await delay();
  
  const menuItem: MenuItem = {
    id: Math.max(...menuItems.map(item => item.id)) + 1,
    ...newItem
  };
  
  menuItems.push(menuItem);
  
  return {
    data: menuItem,
    message: 'Menu item added successfully'
  };
};

export const deleteMenuItem = async (id: number): Promise<ApiResponse<void>> => {
  await delay();
  
  const itemIndex = menuItems.findIndex(item => item.id === id);
  if (itemIndex === -1) {
    throw new Error('Menu item not found');
  }
  
  menuItems.splice(itemIndex, 1);
  
  return {
    data: undefined,
    message: 'Menu item deleted successfully'
  };
};