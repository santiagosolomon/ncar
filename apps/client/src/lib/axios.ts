// lib/axios.ts
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5200/api", 
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // send cookies with requests
});

// Add request interceptor for debugging
api.interceptors.request.use(request => {
  // console.log('Starting Request:', request)
  return request
});

// Add response interceptor for debugging
api.interceptors.response.use(response => {
  // console.log('Response:', response)
  return response
}, error => {
  console.error('Response Error:', error)
  return Promise.reject(error)
});
