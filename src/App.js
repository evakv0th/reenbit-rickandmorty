import './App.css';
import Cards from './components/Cards';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Characters from './components/Characters';
import Login from './components/Login/Login';



function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/character/:id" element={<Characters />} />
    </Routes>
  </Router>
  )
}


export default App;
