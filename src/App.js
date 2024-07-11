import React from 'react';
import ImageUpload from './components/ImageUpload';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div className="App">
      <h1>Image Upload and Gallery</h1>
      <ImageUpload />
      <ImageGallery />
    </div>
  );
}

export default App;
