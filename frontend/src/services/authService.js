import axios from 'axios';

// Backend API base URL
const API_URL = 'http://localhost:5000/api';

// Register a new user
const register = async (name, username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      username,
      email,
      password,
    });
    return response.data;  // Return the response data (e.g., user object)
  } catch (error) {
    console.error('Registration failed:', error.response ? error.response.data : error.message);
    throw new Error('Registration failed');
  }
};

// Login a user
const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    
    if (response.data.token) {
      // Store the JWT token in localStorage for later use
      localStorage.setItem('token', response.data.token);
    }

    return response.data;  // Return the response data (e.g., token or user object)
  } catch (error) {
    console.error('Login failed:', error.response ? error.response.data : error.message);
    throw new Error('Login failed');
  }
};

// Logout user
const logout = () => {
  localStorage.removeItem('token');  // Remove the token from localStorage
};

const authService = {
  register,
  login,
  logout,
};
export default authService;