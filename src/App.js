import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Navbar/Home';
import About from './Navbar/About';
import Contact from './Navbar/Contact';
import './App.css';
import Navbar from './Navbar/Navbar';
import Login from './Navbar/Login';
import Register from './Navbar/Register';

function App() {
  return (
    // <div className="App">
      
    // </div>
  <Router>
      <div>
        <Navbar/>
          <Routes>
          <Route key="/" path="/" exact element={<Home/>} />
          <Route key="/about" path="/about" element={<About/>}/>
          <Route key="/contact" path="/contact" element={<Contact/>}/>
          <Route key="/login" path="/login" element={<Login/>} />
          <Route key="/register" path="/register" element={<Register/>} />
          </Routes>
      
      </div>
      </Router>
  );
}

export default App;
