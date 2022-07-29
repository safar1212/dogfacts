import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import { useDispatch } from 'react-redux';
import HomePage from './Components/HomePage';
import NavBar from './Components/navbar';
import Details from './Components/Details';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Dogs/:messageName" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;