import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Reusable/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from "./components/Login/LoginPage/LoginPage";
import SignUpPage from "./routes/SignUpPage/SignUpPage";
import { useState } from "react";

function App() {
  const [renderNav, setRenderNav] = useState(false);
  return (
    <React.Fragment>
      <Router>
        <Navbar renderNav={renderNav}></Navbar>
        <ToastContainer/>
        <Routes>
          <Route path="/login" element={<LoginPage onSuccess={() => setRenderNav(true)}></LoginPage>} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
