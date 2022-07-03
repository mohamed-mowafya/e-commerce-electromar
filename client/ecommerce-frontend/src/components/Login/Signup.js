import React, { useEffect } from "react";
import classes from "./login.module.css"
import {Link} from "react-router-dom"

const SignUp = () =>{

useEffect(()=>{
    
},[])
return(
<React.Fragment>
        

    <div className="container p-5">
    <div className="row">
    <div className="col-md-6">
    <h1 className={`mb-4 ${classes.loginTitle}`}>Create an account</h1>
    <form className="w-auto">
    <div className={`col-sm-6 mb-3`}>
    <label for="exampleInputEmail1" className={`form-label ${classes.loginFormText}`}>Email address</label>
    <input type="email" className={`form-control`} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="col-sm-6 mb-3">   
    <label for="exampleInputPassword1" className={`form-label ${classes.loginFormText}`}>Password</label>
    <input type="password" className={`form-control`} id="exampleInputPassword1"/>
  </div>
  <div class="col-sm-6 mb-3">
    <label for="exampleInputPassword1" className={`form-label ${classes.loginFormText}`}>Confirm your Password</label>
    <input type="password" className={`form-control`} id="exampleInputPassword1"/>
  </div>
  <div className="col-sm-5">
   
  <button style={{backgroundColor:"black"}} type="submit" className={`btn ps-4 pe-4 ${classes.loginBtn}`}><b>Sign up</b></button>
  </div>
</form>
</div>
<div style={{marginTop:"10%"}} className="col-md-6">
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
    </div>
</div>

</div>

</React.Fragment>
)
}

export default SignUp