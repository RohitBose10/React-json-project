import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import base_url, { auth_end } from "../../api/api_url";
import { Carousel } from "react-bootstrap";
import "./categorywise.css";

const Categorywise = () => {
  const api = `${base_url}${auth_end.categories}`;
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [userRole, setUserRole] = useState(""); // State to track user role
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the user role from localStorage
    const role = localStorage.getItem("userRole");
    setUserRole(role);

    // Fetch categories from API
    axios
      .get(api)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleCategoryClick = (categoryName) => {
    navigate(`/games/${categoryName}`);
  };

  const handleAddGame = () => {
    navigate("/addgame");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCategories = categories.filter((itm) => {
    if (searchQuery === "") {
      return itm;
    } else if (itm.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return itm;
    }
    return null;
  });

  return (
    <div className="categorywise-page-container">
      <h3 className="browse-category-header">Explore Categories</h3>
      <br />

      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Game Categories"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="categorywise-carousel-container">
        {/* First Carousel */}
        <Carousel>
          <Carousel.Item>
            <div className="categorywise-carousel-item">
              {filteredCategories.slice(0, 4).map((category) => (
                <div
                  key={category.id}
                  className="categorywise-category-item"
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="categorywise-category-image"
                  />
                  <div className="category-name">{category.name}</div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        </Carousel>

        {/* Second Carousel */}
        <Carousel>
          <Carousel.Item>
            <div className="categorywise-carousel-item">
              {filteredCategories.slice(4, 8).map((category) => (
                <div
                  key={category.id}
                  className="categorywise-category-item"
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="categorywise-category-image"
                  />
                  <div className="category-name">{category.name}</div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <br />
      <div className="add-game-container">
        <p className="add-game-text">
          {/* Conditionally render the "Add Game" button only for admins */}
          {userRole === "admin" && (
            <button onClick={handleAddGame} className="games-add-btn">
              Add Games to Category
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default Categorywise;
