import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_URL;
// console.log(baseUrl);

var config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000'
    },
    withCredentials: false
  };

if (localStorage.token) {
    config.headers.Authorization = `Bearer ${localStorage.token}`;
}

const axiosInstance = axios.create({
    baseURL: baseUrl,
    config
});

export default axiosInstance;
