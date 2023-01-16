import React, { useState } from 'react';
import loginClasses from "../../Login/LoginForm/login.module.css";
import classes from "./profileSettings.module.css";
import reuseClasses from "../../Reusable/reuse.module.css";
import isAuth from "../../Reusable/IsAuth";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProfileSettings = () => {

    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        /**
         * Will redirect user to the login page if he's trying to access the profile settings page without
         * being logged in.
         */

        checkAuth();
    }, [])

    useEffect(() => {
        let userEmail = localStorage.getItem("userIdentity");
        setEmail(userEmail);
    }, [])

    useEffect(() => {
        if (confirmNewPassword !== newPassword && confirmNewPassword.length > 0) {
            setIsPasswordMatch(false);
        }
        else {
            setIsPasswordMatch(true);
        }
    }, [confirmNewPassword, newPassword])

    const checkAuth = async () => {
        debugger;
        let statusCode = await isAuth();
        debugger;
        if (statusCode !== 201) {
            debugger;
            navigate("/");
        }
        debugger;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <React.Fragment>
            <div className={`d-flex ms-auto justify-content-center mt-3 mb-2 `}>
                <span className={`navbar-brand ${reuseClasses.logoBlack}`}>
                    ElectroMar<span style={{ color: "red" }}>.</span>
                </span>
            </div>
            <div className="d-flex ms-auto justify-content-center mb-4">
                <span className={`${reuseClasses.welcomeText}`}>
                    Welcome to your profile
                </span>
            </div>
            <div className={`justify-content-center ${classes.formDivWidth}`}>
                <form onSubmit={handleSubmit}>
                    <div className='pb-2'>
                        <label className={`form-label ${loginClasses.loginFormText}`} htmlFor="email">Email:</label>
                        <input className={`form-control`} type="email" id="email" value={email} disabled />
                    </div>
                    <div className='pb-2'>
                        <label className={`form-label ${loginClasses.loginFormText}`} htmlFor="oldPassword">Old Password:</label>
                        <input className={`form-control`} type="password" id="oldPassword" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
                    </div>
                    <div className='pb-2'>
                        <label className={`form-label ${loginClasses.loginFormText}`} htmlFor="newPassword">New Password:</label>
                        <input className={`form-control`} type="password" id="newPassword" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                    </div>
                    <div className='pb-2'>
                        <label className={`form-label ${loginClasses.loginFormText}`} htmlFor="confirmNewPassword">Confirm New Password:</label>
                        <input className={`form-control mb-1`} type="password" id="confirmNewPassword" value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
                        {!isPasswordMatch && <span className="text-danger">Your password does not match the previous field.</span>}
                    </div>
                    <div className='mt-3'>
                        <button
                            style={{ backgroundColor: "black" }}
                            type="submit"
                            className={`btn ${loginClasses.loginBtn} w-25`}
                        ><b>Update</b></button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default ProfileSettings;