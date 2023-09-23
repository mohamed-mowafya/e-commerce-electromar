import React from "react";
import "./reuse.css";

const Footer = () => {
  return (
    <footer className={"bg-dark text-center text-white footer footer"}>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
      >
        © 2023 Copyright: ElectroMar
      </div>
    </footer>
  );
};

export default Footer;
