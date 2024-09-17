import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import RegistrationPage from './components/RegistrationPage';  // Registration component
import GenerateCertificatePage from './components/GenerateCertificatePage';  // Generate Certificate
import ViewCertificateRecordPage from './components/ViewCertificateRecordPage';  // View Certificate Record
import PrintCertificatePage from './components/PrintCertificatePage';  // Print Certificate
import ViewLogsPage from './components/ViewLogsPage';  // View Logs

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/generate-certificate" element={<GenerateCertificatePage />} />
          <Route path="/view-certificate-record" element={<ViewCertificateRecordPage />} />
          <Route path="/print-certificate" element={<PrintCertificatePage />} />
          <Route path="/view-logs" element={<ViewLogsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
