import axios from 'axios';

// Set the base URL for the backend API
// Ensure this matches your backend server address (e.g. http://localhost:5000)
const API_BASE_URL = 'http://localhost:5000/api';

/**
 * Service to handle contact form submissions
 */
export const submitContact = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contact`, formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Something went wrong' };
  }
};

/**
 * Service to handle volunteer joining submissions via Formspree
 */
export const submitJoinForm = async (formData) => {
  try {
    const response = await axios.post('https://formspree.io/f/mpqnowpb', formData, {
      headers: {
        'Accept': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to submit the form through Formspree' };
  }
};

/**
 * Service to fetch all volunteer submissions (Admin use)
 */
export const getVolunteers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/volunteers`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Could not fetch volunteers' };
  }
};
