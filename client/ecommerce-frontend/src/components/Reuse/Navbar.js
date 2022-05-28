import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./reuse.module.css"
import 'primeicons/primeicons.css';


const Navbar = () =>{
    return(
        <React.Fragment>
        <div className={classes.topbar}>
        <div style={{marginLeft:"12%"}}>
        <div className={classes.flexContainer}>
        <div class="p-2">
        <i style = {{color:"red"}} className="p-2 pi pi-phone"></i>
            <span>514-333-3333</span>
        </div>
        <div className="p-2">
        <i style = {{color:"red"}} className="p-2 pi pi-at"></i>
            <span>electromar@electromar.ca</span>
            </div>
        <div className="p-2">
        <i style = {{color:"red"}} className="p-2 pi pi-map-marker"></i>
            <span>1523 rue Saint-Jacques</span>
            </div>
        
        <div style={{marginRight:"10%"}} className="p-2 ms-auto">
        <i style = {{color:"red"}} className="p-2 pi pi-user"></i>

        <Link className={classes.link} to="profile">My Account</Link>
            </div>
            
        </div>
     
        </div>
      
        </div>
      
        </React.Fragment>
  
    )
}

export default Navbar