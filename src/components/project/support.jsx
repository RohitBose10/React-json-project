import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./support.css";

const SupportPage = () => {
  const navigate = useNavigate();

  return (
    <div className="support-page">
      <header className="support-header">
        <h2 className="about-title">Welcome to GameVault Player Support</h2>
        <div className="status">
          <span className="status-text">Server Status: </span>
          <span className="status-indicator">ALL SYSTEMS OPERATIONAL</span>
        </div>
      </header>

      <h4>Jump to:</h4>
      <div className="categories">
        <div className="category" onClick={() => navigate("/category")}>
          <h4>Games</h4>
          <img src="assets/images/game.jpg" alt="Games" />
        </div>
        <div className="category" onClick={() => navigate("/account")}>
          <h4>Accounts</h4>
          <img src="assets/images/acc.jpg" alt="Accounts" />
        </div>
        <div className="category" onClick={() => navigate("/parent")}>
          <h4>Parent/Guardian Support</h4>
          <img src="assets/images/parent.jpg" alt="Parent Support" />
        </div>
      </div>

      <div className="game-section">
        <div className="game-tiles">
          <div className="game-tile" onClick={() => navigate("/community")}>
            <h4>Community</h4>
            <img src="assets/images/community.webp" alt="Community" />
          </div>
          <div className="game-tile" onClick={() => navigate("/payment")}>
            <h4>Payments</h4>
            <img src="assets/images/payments.jpg" alt="Payments" />
          </div>
          <div className="game-tile" onClick={() => navigate("/about")}>
            <h4>About Us</h4>
            <img src="assets/images/about.webp" alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
