import React from "react";
import { Link } from "react-router-dom";
import classes from "./profilePage.module.css";
import useAuth from "../../hooks/useAuth";

const ProfilePage = () => {
  useAuth();
  return (
    <React.Fragment>
      <div className={classes.parentDiv}>
        <h1 className={`${classes.welcomeMessage} mt-5`}>
          <span style={{ color: "red" }}>
            Hi customer, <br />
          </span>
          Welcome to your account
        </h1>
        <hr style={{ color: "gray" }}></hr>
      </div>
      <div className="d-flex mt-4 justify-content-center">
        <div
          className={`${classes.bottomSpacing} card`}
          style={{ width: "25rem", height: "13rem" }}
        >
          <div className="card-body">
            <h5 className="card-title mb-3" style={{ color: "black" }}>
              <i className="pi pi-user-edit me-2" style={{ color: "red" }}></i>
              Personal Information
            </h5>
            <h6
              className={`card-subtitle text-muted mb-4 ${classes.linkPosition}`}
            >
              Update your account password at any time.
            </h6>
            <Link to="/settings">Your personal details &gt;</Link>
          </div>
        </div>
        <div
          className={`${classes.bottomSpacing} card ms-2`}
          style={{ width: "25rem", height: "13rem" }}
        >
          <div className="card-body">
            <h5 className="card-title mb-3" style={{ color: "black" }}>
              <i
                className="pi pi-info-circle me-2"
                style={{ color: "red" }}
              ></i>
              Order History
            </h5>
            <h6
              className={`card-subtitle text-muted mb-2 ${classes.linkPosition}`}
            >
              Track your recent purchases and view past orders with ease.
            </h6>
            <Link to="/orders">Your orders &gt;</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfilePage;
