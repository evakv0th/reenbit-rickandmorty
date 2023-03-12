import './App.css';
import Cards from './components/Cards';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Characters from './components/Characters';



function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Cards />} />
      <Route path="/character/:id" element={<Characters />} />
    </Routes>
  </Router>
  )
}


export default App;
