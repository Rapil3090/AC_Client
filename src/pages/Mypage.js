import '../styles/Home.css';
import React, { useState } from 'react';
import axios from 'axios';

const Mypage = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setSelectedFile(file);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDate = new FormDate();
    formDate.append('file', selectedFile);
    formDate.append('expenseId',1);

    try {
      const response =  await axios.post('/api/image', formDate, {
        headers: {
          'Content-Type' : 'multipart/form-date',
        },
      });
      console.log('이미지 업로드 성공', response.data);
    } catch (error) {
      console.error('업로드 실패', error);
    }
  };

  return (
    <div className="mypage-container">
      <h1 className="mypage-title">MyPage</h1>
      
      <div className="profile-section">
        <div className="image-upload">
          {image ? (
            <img src={image} alt="Uploaded" className="profile-image"/>
          )  : (
            <div className="image-placeholder">사진</div>
          ) }
          <input type="file" onChange={handleImageUpload} />
        </div>
        
        <div className="name-section">
          <label>이름: </label>
          <input type="text" value={name} onChange={handleNameChange} placeholder="이름 입력" />
        </div>

        <button onClick={handleSubmit}>Upload</button>
      </div>
    </div>
  );
};

export default Mypage;
