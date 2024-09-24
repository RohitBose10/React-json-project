import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import base_url, { auth_end } from "../../api/api_url";
import "./details.css"; // Updated to unique class CSS file

const Details = () => {
  let { id } = useParams();
  let api = `${base_url}${auth_end.games}${id}`;
  const [state, setState] = useState({});
  const [userRole, setUserRole] = useState(""); // State to store user role
  const navigate = useNavigate();

  // Fetch game details
  const getDetails = () => {
    axios
      .get(api)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.log("Axios error", err);
      });
  };

  // Fetch user role from local storage
  const getUserRole = () => {
    const role = localStorage.getItem("userRole") || "user"; // Default to 'user' if no role found
    setUserRole(role);
  };

  useEffect(() => {
    getDetails();
    getUserRole();
  }, [api]);

  const handleBuyClick = () => {
    navigate(`/purchase/${id}`);
  };

  const handleEditClick = () => {
    navigate(`/editgame/${id}`);
  };

  return (
    <div className="unique-details-page">
      <div className="unique-details-header">
        <h2>Product Details</h2>
      </div>

      <div className="unique-details-content">
        {/* Image section stays above the description */}
        <div className="unique-details-image-section">
          <img src={state.image} alt={state.title} />
        </div>

        {/* Description moved below the image */}
        <div className="unique-details-info-section">
          <div className="unique-info-card">
            <div className="unique-details-row">
              <h5>Product Name:</h5>
              <h4>{state.title}</h4>
            </div>
            <div className="unique-details-row">
              <h5>Category:</h5>
              <h6>{state.category_name}</h6>
            </div>
            <div className="unique-details-row">
              <h5>Description:</h5>
              <p>{state.description}</p>
            </div>
            <div className="unique-details-row">
              <h5>Release Date:</h5>
              <h6>{state.release_date}</h6>
            </div>
            <div className="unique-details-row">
              <h5>Rating:</h5>
              <h6 style={{ color: "#e7c643" }}>{state.rating}/5</h6>
            </div>
            <div className="unique-details-row">
              <h5>Developer:</h5>
              <h6>{state.developer}</h6>
            </div>
            <div className="unique-details-row">
              <h5>Publisher:</h5>
              <h6>{state.publisher}</h6>
            </div>
            <div className="unique-details-row">
              <h5>Price:</h5>
              <h3>{state.price}$ only!</h3>
            </div>

            <div className="unique-details-buttons">
            {userRole === "user" && (
              <button className="unique-buy-button" onClick={handleBuyClick}>
                Buy now
              </button>
            )}
              {/* Conditionally render Edit button based on role */}
              {userRole === "admin" && (
                <button onClick={handleEditClick} className="unique-edit-button">
                  Edit Game
                </button>
              )}
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
