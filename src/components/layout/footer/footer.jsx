import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img
          src="assets/images/logo.png"
          alt="GameVault Logo"
          className="footer-logo"
        />
        <p>
          © 2024 GameVault Corporation. All rights reserved. All trademarks are
          property of their respective owners. VAT included where applicable.
        </p>
        <ul className="footer-links">
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#legal">Legal</a></li>
          <li><a href="#gvsa">Subscriber Agreement</a></li>
          <li><a href="#refunds">Refunds</a></li>
          <li><a href="#cookies">Cookies</a></li>
        </ul>
        <ul className="footer-nav">
          <li><a href="#about">About</a></li>
          <li><a href="#jobs">Jobs</a></li>
          <li><a href="#distribution">Distribution</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
        <div className="footer-socials">
          <a href="#facebook" className="social-icon">Facebook</a>
          <a href="#gamevault" className="social-icon">GameVault</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
