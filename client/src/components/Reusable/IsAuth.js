import axios from "axios";

const isAuth = async () =>{
    let res = await axios.get("http://localhost:5000/isauth",
        {withCredentials: true}
    )

    return res.status;
}

export default isAuth;