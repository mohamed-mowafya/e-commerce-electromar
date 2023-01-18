import React from "react";
import classes from "./reuse.module.css";

const Footer = () => {
    return (
        <footer className={`bg-dark text-center text-white footer ${classes.footer}`}>
  

        <div className="text-center p-3" style={{backgroundColor: "rgba(0,0,0,0.2)"}}>
          © 2023 Copyright: ElectroMar
        </div>
        
      </footer>

    )
}

export default Footer;

