import axios from 'axios';

const API_URL = 'http://localhost:5000/api/certificates';

const applyCertificate = async (data) => {
  const response = await axios.post(`${API_URL}/apply`, data);
  return response.data;
};

const generateQRCode = async (certificateId) => {
  const response = await axios.get(`${API_URL}/generate_qrcode/${certificateId}`);
  return response.data;
};

export default {
  applyCertificate,
  generateQRCode,
};
