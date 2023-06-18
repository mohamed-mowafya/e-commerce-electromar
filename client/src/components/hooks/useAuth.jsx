import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const useAuth = (redirect, protectedRoute) => {
  const authenticated = useSelector(({ user }) => user.authenticated);
  const dispatch = useDispatch();
  const dispatchEmail = (email) => dispatch({ type: "SET_EMAIL", payload: email });
  const dispatchAuth = () => dispatch({ type: "SET_AUTHENTICATED", payload: true });
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      const checkAuth = async () => {
        const authRes = await isAuth();
        handleAuth(authRes);
      }
      checkAuth();
    }
  }, [])

  const isAuth = async () => {
    const res = await axios
      .get("http://localhost:5000/isauth", { withCredentials: true })

    return res;
  };


  const handleAuth = (authRes) => {
    if (authRes.status === 200) {
        dispatchAuth();
        dispatchEmail(authRes.data.email);
        if (redirect) navigate("/");
    }
    else {
      if (protectedRoute) {
        navigate("/login");
      }
    }
  }
}

export default useAuth;
