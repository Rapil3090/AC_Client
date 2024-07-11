import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.get('http://localhost:8080/api/images');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
    fetchImages();
  }, []);

  return (
    <div>
      {images.map((image) => (
        <img key={image.id} src={`http://localhost:8080/api/images/${image.id}`} alt={image.name} />
      ))}
    </div>
  );
}

export default ImageGallery;
