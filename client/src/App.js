import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Reusable/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./components/Login/LoginPage/LoginPage";
import SignUpPage from "./components/SignUp/SignUpPage/SignUpPage";
import ProfilePage from "./components/Profile/ProfilePage/ProfilePage";
// import Footer from "./components/Reusable/Footer";
import ProfileSettings from "./components/Profile/ProfileSettings/ProfileSettings";
import HomePage from "./components/Home/HomePage/HomePage";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Orders from "./components/Orders/Orders";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="products" element={<Products />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orders" element={<Orders />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
