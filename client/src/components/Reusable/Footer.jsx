import React from "react";
import classes from "./reuse.module.css";

const Footer = () => {
    return (
        <footer className={`bg-dark text-center text-white footer ${classes.footer}`}>
  
        <div className="container p-2 pb-0">
          
          <section className="mb-3">
            
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i className="fab fa-facebook-f"></i></a>
      
            
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i className="fab fa-twitter"></i></a>
      
            
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i className="fab fa-google"></i></a>
      
            
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i className="fab fa-instagram"></i></a>
      
            
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i className="fab fa-linkedin-in"></i></a>
      
            
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i className="fab fa-github"></i></a>
          </section>
          
        </div>
        
      
        
        <div className="text-center p-3" style={{backgroundColor: "rgba(0,0,0,0.2)"}}>
          © 2023 Copyright: ElectroMar
        </div>
        
      </footer>

    )
}

export default Footer;

