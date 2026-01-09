import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com', // central base URL
  timeout: 5000,                    // optional timeout
})

export default axiosInstance
