import React, { useState } from 'react';
import certificateService from '../services/certificateService';

const QRCodePage = () => {
  const [certificateId, setCertificateId] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const generateQRCode = async () => {
    try {
      const response = await certificateService.generateQRCode(certificateId);
      setQrCodeUrl(response.qrCodeUrl);
    } catch (err) {
      alert('Error generating QR Code');
    }
  };

  return (
    <div>
      <h1>Generate QR Code</h1>
      <input 
        type="text" 
        value={certificateId} 
        onChange={(e) => setCertificateId(e.target.value)} 
        placeholder="Enter Certificate ID" 
      />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
    </div>
  );
};

export default QRCodePage;
