import React from 'react';
import { useNavigate } from 'react-router-dom';
import './purchase.css'; // Make sure to create this CSS file

const Purchase = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/'); // Redirect to home page or another relevant page
  };

  return (
    <div className="thank-you-wrapper">
      <h2 className="thank-you-header">Thank you for your Purchase!</h2>
      <p className="thank-you-message">
        We appreciate your business. Your order has been successfully processed.
      </p>
      <button className="thank-you-button" onClick={handleHomeClick}>
        Go to Home
      </button>
    </div>
  );
};

export default Purchase;
