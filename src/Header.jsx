import React from "react";
import logo from "./images/logo.png";
import "./index.css";

const Header = () => {
  return (
    <>
      <div className='header'>
        <img src={logo} alt='logo' width='70' height='30'/>
        <h1>Patel's Keep</h1>

      </div>
    </>
  );
  
};

export default Header;