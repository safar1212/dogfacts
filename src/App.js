import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import { useDispatch } from 'react-redux';
import HomePage from './Components/HomePage';
import NavBar from './Components/navbar';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;