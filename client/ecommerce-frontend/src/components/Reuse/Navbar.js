import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./reuse.module.css"
import 'primeicons/primeicons.css';
import './bootstrap_modif.css'

const Navbar = () =>{
return(
<React.Fragment>
    <div className={classes.topbar}>
        <div style={{marginLeft:"12%"}}>
            <div className={classes.flexContainer}>
                <div className="p-2">
                    <i style={{color:"red"}} className="p-2 pi pi-phone"></i>
                    <span>514-333-3333</span>
                </div>
                <div className="p-2">
                    <i style={{color:"red"}} className="p-2 pi pi-at"></i>
                    <span>electromar@electromar.ca</span>
                </div>
                <div className="p-2">
                    <i style={{color:"red"}} className="p-2 pi pi-map-marker"></i>
                    <span>1523 rue Saint-Jacques</span>
                </div>

                <div style={{marginRight:"10%"}} className="p-2 ms-auto">
                    <i style={{color:"red"}} className="p-2 pi pi-user"></i>

                    <Link className={classes.link} to="profile">My Account</Link>
                </div>

            </div>

        </div>

    </div>


    <React.Fragment>
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${classes.navContainer}`}>
          
                <span className={`navbar-brand ${classes.logo}`} href="#">ElectroMar<span
                        style={{color:"red",fontSize:"42px"}}>.</span></span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 
                <ul class="navbar-nav">
                <li class="nav-item">
                <Link className={`nav-link ${classes.navLink}`} to="profile">Products</Link>
                </li>
                </ul>
                   
                
                    <form className={`d-flex  ${classes.searchForm}`}>
                        
                        <input class="form-control me-2" type="search" placeholder=" Search for a product" aria-label="Search" />
                        <button className={`btn ${classes.searchBtn}`} type="submit"><i
                                className="pi pi-search" /></button>
                    </form>
                </div>
            
               
              
                
                
    
        </nav>
    </React.Fragment>
</React.Fragment>



)
}

export default Navbar