import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import QRCodePage from './components/QRCodePage';
import FireSafetyForm from './components/FireSafetyForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/apply-certificate" element={<FireSafetyForm />} />
          <Route path="/generate-qr-code" element={<QRCodePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
