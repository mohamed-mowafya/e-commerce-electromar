import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './components/Login/Login';
import Navbar from './components/Reuse/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
  <Router>
  <Navbar/>
     <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={null}/>
     </Routes>
     </Router>
     </React.Fragment>
     

  );
}

export default App;
