import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Reusable/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from "./components/Login/LoginPage/LoginPage";
import SignUpPage from "./components/SignUp/SignUpPage/SignUpPage";
import ProfilePage from "./components/Profile/ProfilePage/ProfilePage";
import { useState } from "react";
import Footer from "./components/Reusable/Footer"
import ProfileSettings from "./components/Profile/ProfileSettings/ProfileSettings";
import HomePage from "./components/Home/HomePage/HomePage";

function App() {
  const [renderNav, setRenderNav] = useState(false);
  return (
    <React.Fragment>
      <Router>
        <Navbar reset={() => setRenderNav(false)} renderNav={renderNav}></Navbar>
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="profile" element={<ProfilePage/>}/>
          <Route path="settings" element={<ProfileSettings/>}/>
          <Route path="login" element={<LoginPage onSuccess={() => setRenderNav(true)}></LoginPage>}/>
          <Route path="signup" element={<SignUpPage />} />
        </Routes>
        <Footer/>
      </Router>
    </React.Fragment>
  );
}

export default App;
