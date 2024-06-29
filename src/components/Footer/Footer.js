import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/piyush-eon" target="__blank">
          Soham More
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://github.com/SohamMore100/" target="__blank">
          <i className="fa-brands fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/sohammore100" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://piyushjsx.netlify.app/" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;