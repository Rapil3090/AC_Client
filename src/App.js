import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Mypage from './pages/Mypage';
import Budget from './pages/Budget';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </Router>
  );
};

export default App;
