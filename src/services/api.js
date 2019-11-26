import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.85.250.152:3000/',
});

export default api;
