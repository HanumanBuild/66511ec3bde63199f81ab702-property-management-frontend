import axios from 'axios';

const API_URL = process.env.REACT_APP_PROPERTY_MANAGEMENT_BACKEND_URL;

export const getCompanyInfo = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/company-info`);
    return response.data;
  } catch (error) {
    console.error("Error fetching company info:", error);
    throw error;
  }
};

export const getServices = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/services`);
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
};

export const getTestimonials = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/testimonials`);
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    throw error;
  }
};