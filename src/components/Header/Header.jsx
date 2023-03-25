import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <header className="header pt-3">
      <div className="header-elem mx-auto app-max-width">
        <img src={logo} alt="logo" />
        <div>
          <button className="btn link mx-2">Sign In</button>
          <button className="btn secondary-btn  ml-2">Dukaan for PC</button>
        </div>
      </div>
    </header>
  );
};
