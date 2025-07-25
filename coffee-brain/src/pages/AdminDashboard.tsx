// Admin Dashboard for Coffee Brain website

import React from 'react';
import { useAuth } from '../context/AuthContext';
import './AdminDashboard.css';

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="admin-dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Welcome back, {user?.username}!</p>
        </div>

        <div className="dashboard-content">
          <div className="dashboard-grid grid grid-2">
            <div className="dashboard-card card">
              <h3>📸 Manage Gallery</h3>
              <p>Add, edit, or remove photos from the Coffee Brain gallery.</p>
              <button className="btn btn-primary">
                Coming Soon
              </button>
            </div>

            <div className="dashboard-card card">
              <h3>📋 Manage Menu</h3>
              <p>Update menu items, prices, and descriptions.</p>
              <button className="btn btn-primary">
                Coming Soon
              </button>
            </div>
          </div>

          <div className="admin-info">
            <h2>Admin Panel Features</h2>
            <p>
              This is a demonstration of the Coffee Brain admin panel. In a full implementation, 
              you would be able to:
            </p>
            <ul>
              <li>Upload and manage gallery photos</li>
              <li>Add, edit, and remove menu items</li>
              <li>Update prices and descriptions</li>
              <li>Manage website content</li>
              <li>View customer analytics</li>
            </ul>
          </div>

          <div className="logout-section">
            <button onClick={logout} className="btn btn-secondary">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;