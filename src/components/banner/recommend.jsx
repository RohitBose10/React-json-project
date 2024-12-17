import React from "react";
import "./recommend.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Recommend = () => {
  // Get the userId from localStorage
  const userId = localStorage.getItem("userId");

  return (
    <div className="recommend">
      <div className="innerdiv">
        {userId ? (
          // If userId exists, show thank-you message
          <>
            <p id="p3">Thank you for joining GameVault!</p>
            <p>We’re thrilled to have you on board. Explore your personalized recommendations now.</p>
           
          </>
        ) : (
          // If no userId, show sign-in/sign-up options
          <>
            <p id="p3">Looking for recommendations?</p>
            <p>Sign in to view personalized recommendations</p>
            <Button
              variant="primary"
              type="submit"
              className="d-flex justify-content-center mx-auto"
              style={{
                backgroundColor: "limegreen",
                border: "none",
                color: "white",
                alignItems: "center",
              }}
            >
              <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                Sign in
              </Link>
            </Button>
            <br />
            <p>
              or <Link to="/create" style={{ textDecoration: "none" }}>Sign Up</Link> and join GameVault for free
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Recommend;
