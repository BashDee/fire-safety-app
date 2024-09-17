import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';  // CSS for styling the dashboard

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <div className="menu" class="menu">
          <div><Link to="/registration">Registration</Link></div>
          <div><Link to="/generate-certificate">Generate Certificate</Link></div>
          <div><Link to="/view-certificate-record">View Certificate Record</Link></div>
          <div><Link to="/print-certificate">Print Certificate</Link></div>
          <div><Link to="/view-logs">View Logs</Link></div>
      </div>
    </div>
  );
};

export default AdminDashboard;
