import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  localStorage.setItem('token', response.data.token);
};

const register = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/register`, { name, email, password });
  return response.data;
};

export default {
  login,
  register,
};
