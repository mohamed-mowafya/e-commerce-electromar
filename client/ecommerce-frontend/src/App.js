import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Reuse/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login/Login';
import SignUp from './components/Login/Signup';

function App() {
  return (
    <React.Fragment>
  <Router>
  <Navbar/>
     <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
     </Routes>
     </Router>
     </React.Fragment>
     

  );
}

export default App;
