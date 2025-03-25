export const API_URL = 'http://localhost:5000';

export const fetchWithAuth = async (url, options = {}) => {
  const token = localStorage.getItem('token');
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'x-auth-token': token })
  };

  const response = await fetch(url, {
    ...options,
    headers: { ...headers, ...options.headers }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
