import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Reuse/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from "./routes/LoginPage/LoginPage";
import SignUpPage from "./routes/SignUpPage/SignUpPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <ToastContainer/>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
