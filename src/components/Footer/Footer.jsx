import React from "react";
import logo from "../../assets/logo.svg";
import indiaFlag from "../../assets/india-flag.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper py-3 app-max-width mx-auto">
        <div className="footer-header py-5">
          <img src={logo} alt="logo" />

          <ul className="footer-links fs-lg">
            <li>Contact</li>
            <li>FAQ's</li>
          </ul>

          <ul className="footer-links fs-lg">
            <li>Tutorials</li>
            <li>Blog</li>
          </ul>

          <ul className="footer-links fs-lg">
            <li>Privacy</li>
            <li>Banned Items</li>
          </ul>

          <ul className="footer-links fs-lg">
            <li>About</li>
            <li className="badge-wrapper">
              Jobs
              <span className="badge">3</span>
            </li>
          </ul>

          <ul className="social-handle-links fs-lg">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkedin</li>
          </ul>
        </div>

        <hr className="divider" />

        <div className="footer-end mt-2">
          <div>Dukaan 2020, All rights reserved.</div>
          <div className="flag-wrapper">
            Made in{" "}
            <img src={indiaFlag} className="flag-img ml-1" alt="India Flag" />
          </div>
        </div>
      </div>
    </footer>
  );
};
