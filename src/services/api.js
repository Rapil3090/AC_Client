import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const uploadImages = (formData) => {
  return api.post('/images/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const fetchImages = () => {
  return api.get('/images');
};

export const fetchImageById = (id) => {
  return api.get(`/images/${id}`);
};
