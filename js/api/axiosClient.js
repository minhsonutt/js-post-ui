import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://js-post-api.herokuapp.com/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosClient;