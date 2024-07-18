import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Mypage from './pages/Mypage';
import Budget from './pages/Budget';
import Calendar from './pages/Calendar';

const App = () => {
  const incomeExpenses = [
    { day: 1, income: 100, expense: 50 },
    { day: 5, income: 200, expense: 150 },
    { day: 12, income: 300, expense: 250 },
    { day: 18, income: 400, expense: 350 },
    { day: 25, income: 500, expense: 450 }
];




  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </Router>
  );
};

export default App;
