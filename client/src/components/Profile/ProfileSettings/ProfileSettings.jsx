import React, { useState } from "react";
import loginClasses from "../../Login/LoginForm/login.module.css";
import classes from "./profileSettings.module.css";
import "../../Reusable/reuse.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";

const ProfileSettings = () => {
  useAuth();
  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const email = useSelector(({ user }) => user.email);
  const [userIdentity, setUserIdentity] = useState(null);

  useEffect(() => {
    setUserIdentity(email);
  }, [email]);

  useEffect(() => {
    if (confirmNewPassword !== newPassword && confirmNewPassword.length > 0) {
      setIsPasswordMatch(false);
    } else {
      setIsPasswordMatch(true);
    }
  }, [confirmNewPassword, newPassword]);

  const updateUser = () => {
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}update-user`,
        {
          email: email,
          password: oldPassword,
          newPassword: newPassword,
        },
        { withCredentials: true }
      )
      .then(() => {
        toast.success("Profile updated !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        navigate("/login");
      })

      .catch((e) => {
        toast.error("An error has occured: " + e.response.data.status, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser();
  };

  return (
    <React.Fragment>
      <div className="d-flex ms-auto justify-content-center mt-3 mb-2">
        <span className="navbar-brand logo-black">
          ElectroMar<span style={{ color: "red" }}>.</span>
        </span>
      </div>
      <div className="d-flex ms-auto justify-content-center mb-4">
        <span className="welcome-text">Welcome to your profile</span>
      </div>
      <div className={`justify-content-center ${classes.formDivWidth}`}>
        <form onSubmit={handleSubmit}>
          <div className="pb-2">
            <label
              className={`form-label ${loginClasses.loginFormText}`}
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className={`form-control`}
              type="email"
              id="email"
              value={userIdentity}
              disabled
            />
          </div>
          <div className="pb-2">
            <label
              className={`form-label ${loginClasses.loginFormText}`}
              htmlFor="oldPassword"
            >
              Old Password:
            </label>
            <input
              className={`form-control`}
              type="password"
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="pb-2">
            <label
              className={`form-label ${loginClasses.loginFormText}`}
              htmlFor="newPassword"
            >
              New Password:
            </label>
            <input
              className={`form-control`}
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="pb-2">
            <label
              className={`form-label ${loginClasses.loginFormText}`}
              htmlFor="confirmNewPassword"
            >
              Confirm New Password:
            </label>
            <input
              className={`form-control mb-1`}
              type="password"
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            {!isPasswordMatch && (
              <span className="text-danger">
                Your password does not match the previous field.
              </span>
            )}
          </div>
          <div className="mt-3">
            <button
              style={{ backgroundColor: "black" }}
              type="submit"
              className={`btn ${loginClasses.loginBtn} w-25`}
            >
              <b>Update</b>
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ProfileSettings;
