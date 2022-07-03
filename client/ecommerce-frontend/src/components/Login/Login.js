import React, { useEffect } from "react";
import classes from "./login.module.css"
import {Link} from "react-router-dom"
import axios from 'axios'

const Login = () =>{

useEffect(()=>{
    
},[])

const formHandler = async (e) =>{
    e.preventDefault();

    debugger;

    const email = e.target.email.value;
    const password = e.target.password.value;

    await axios.post('http://localhost:5000/login',{

        email:email,
        password:password

    },{withCredentials:true}).then(res=>{
        console.log(res);
        testFunc()
    }).catch(err=>{
        console.log(err);
    }
    )
}

const testFunc = async () =>{
   await axios.get('http://localhost:5000/isauth',{withCredentials:true}).then(res=>{
        console.log(res);
        console.log("here")
    })
}



return(
<React.Fragment>
        

    <div className="container p-5">
    <div className="row">
    <div className="col-md-6">
    <h1 className={`mb-4 ${classes.loginTitle}`}>Sign in</h1>
    <form onSubmit={formHandler} className="w-auto" >
    <div className="col-sm-6 mb-3">
    <label for="email" className={`form-label ${classes.loginFormText}`}>Email address</label>
    <input type="email" className={`form-control`} id="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="col-sm-6 mb-3">
    <label for="password" className={`form-label ${classes.loginFormText}`}>Password</label>
    <input type="password" className={`form-control`} id="password"/>
  </div>
  <div className="col-sm-5">
   
  <button style={{backgroundColor:"black"}} type="submit" className={`btn ps-4 pe-4 ${classes.loginBtn}`}><b>Sign in</b></button>
  </div>
</form>
</div>
<div className="col-md-6">
    <h3 className={`${classes.secondSection}`}>Don't have an account?</h3>
<p style={{color:'black'}}>Here are some of the benefits you’ll enjoy:</p>
<div className="d-flex">
<i style={{color:"red"}} className={`pi pi-shopping-cart ${classes.loginCartLogo}`}></i> 
<p className={classes.descriptionSection}>Fast Checkout</p>
</div>
<p style={{color:'black',marginLeft:'1%'}}>Your cart is saved and ready.</p>
<div className="d-flex">
<i style={{color:"red"}} className={`pi pi-refresh ${classes.loginCartLogo}`}></i> 
<p className={classes.descriptionSection}>Quick Recap</p>
</div>
<p style={{color:'black',marginLeft:'1%'}}>Your order history is a click away.</p>
    <Link className={classes.signUpLink} style={{marginLeft:'1%'}} to="/signup">Sign Up Today ></Link>
    </div>
</div>

</div>

</React.Fragment>
)
}


export default Login