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
      <div className={`container ${classes.settingsPageContainer}`}>
        <div className={classes.formDivWidth}>
          <div className={classes.settingsContainer}>
            <h1 className={classes.pageTitle}>Account Settings</h1>
            <p className={classes.pageSubtitle}>Update your password and security information</p>

            <form onSubmit={handleSubmit}>
              <div className={classes.formSection}>
                <label
                  className={`form-label ${loginClasses.loginFormText}`}
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className={`form-control ${loginClasses.formControl} ${classes.disabledInput}`}
                  type="email"
                  id="email"
                  value={userIdentity}
                  disabled
                />
              </div>

              <div className={classes.formSection}>
                <label
                  className={`form-label ${loginClasses.loginFormText}`}
                  htmlFor="oldPassword"
                >
                  Current Password
                </label>
                <input
                  className={`form-control ${loginClasses.formControl}`}
                  type="password"
                  id="oldPassword"
                  placeholder="Enter your current password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />
              </div>

              <div className={classes.formSection}>
                <label
                  className={`form-label ${loginClasses.loginFormText}`}
                  htmlFor="newPassword"
                >
                  New Password
                </label>
                <input
                  className={`form-control ${loginClasses.formControl}`}
                  type="password"
                  id="newPassword"
                  placeholder="Enter your new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>

              <div className={classes.formSection}>
                <label
                  className={`form-label ${loginClasses.loginFormText}`}
                  htmlFor="confirmNewPassword"
                >
                  Confirm New Password
                </label>
                <input
                  className={`form-control ${loginClasses.formControl}`}
                  type="password"
                  id="confirmNewPassword"
                  placeholder="Re-enter your new password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  required
                />
                {!isPasswordMatch && (
                  <span className={classes.errorMessage}>
                    Passwords do not match. Please try again.
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={!isPasswordMatch}
                className={`btn ${classes.updateBtn}`}
              >
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileSettings;
