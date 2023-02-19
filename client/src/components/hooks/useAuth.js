import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const useAuth = () => {
  const authenticated = useSelector(({ user }) => user.authenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated){
      const checkAuth = async () =>{
        const statusCode = await isAuth();
        handleAuth(statusCode);
      }
      checkAuth();
    }
  }, [])

  const isAuth = async () => {
    const res = await axios
      .get("http://localhost:5000/isauth", { withCredentials: true })
      .catch(() => {
        return 400;
      });

    return res.status;
  };


  const handleAuth = (statusCode) => {
    if (statusCode === 201) {
      dispatch({ type: "SET_AUTHENTICATED", payload: true });
      navigate("/");
    }
  }
}

export default useAuth;
