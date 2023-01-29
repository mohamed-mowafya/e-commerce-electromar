import axios from "axios";

const isAuth = async () => {
  debugger;
  let res = await axios
    .get("http://localhost:5000/isauth", { withCredentials: true })
    .catch(() => {
      return 400;
    });

  return res.status;
};

export default isAuth;
