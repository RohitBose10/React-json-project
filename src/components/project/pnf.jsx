import React from 'react';
import { Link } from 'react-router-dom';
import './pnf.css'; // Custom CSS file for this component

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="back-home-btn">Go Back Home</Link>
    </div>
  );
};

export default PageNotFound;
