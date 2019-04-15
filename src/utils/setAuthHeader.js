import axios from 'axios';

const setAuthHeader = (token) => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = token;
    console.log('token', token);
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthHeader;