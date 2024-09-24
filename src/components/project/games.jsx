import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import base_url, { auth_end } from "../../api/api_url";
import { Carousel } from "react-bootstrap";
import Swal from 'sweetalert2'; // Import SweetAlert for alert
import "./games.css"; // Updated CSS import

const Games = () => {
  const { categoryName } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [games, setGames] = useState([]);
  const [userRole, setUserRole] = useState(""); // State to store user role
  const navigate = useNavigate();

  // Fetch user role (assuming from local storage or API)
  const getUserRole = () => {
    const role = localStorage.getItem("userRole") || "user"; // Default to 'user' if no role found
    setUserRole(role);
  };

  // Fetch games based on the category name
  useEffect(() => {
    axios
      .get(`${base_url}${auth_end.games}`)
      .then((response) => {
        const filteredGames = response.data.filter(
          (game) => game.category_name === categoryName
        );
        setGames(filteredGames);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });

    getUserRole(); // Get user role on component mount
  }, [categoryName]);

  // Helper function to chunk the games into slides
  const chunkGames = (games, chunkSize) => {
    const result = [];
    for (let i = 0; i < games.length; i += chunkSize) {
      result.push(games.slice(i, i + chunkSize));
    }
    return result;
  };

  const filteredCategories = games.filter((itm) => {
    if (searchQuery === "") {
      return itm;
    } else if (itm.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return itm;
    }
    return null;
  });

  // Chunk games into slides for the carousels
  const slides = chunkGames(filteredCategories, 4);

  // Split slides into two carousels
  const split = slides.length / 2;
  const firstCarouselSlides = slides.slice(0, split);
  const secondCarouselSlides = slides.slice(split);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDeleteClick = (id) => {
    axios
      .delete(`${base_url}${auth_end.games}${id}`)
      .then(() => {
        // Show success alert
        Swal.fire({
          icon: "success",
          title: "Deleted successfully!",
          text: "The game has been deleted.",
          confirmButtonText: "OK"
        }).then(() => {
          navigate('/category')
        });
        // Remove the deleted game from state
        setGames(games.filter((game) => game.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting game:", error);
      });
  };

  return (
    <div className="games-page-container">
      <h3>{categoryName} Games</h3>
      <br />
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Looking for games? Type here..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="games-carousel-container">
        {/* First Carousel */}
        <Carousel>
          {firstCarouselSlides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className="games-carousel-item">
                {slide.map((game) => (
                  <div
                    key={game.id}
                    className="games-item"
                    onClick={() => navigate(`/details/${game.id}`)}
                  >
                    <img
                      src={game.image}
                      alt={game.title}
                      className="games-image"
                    />
                    <div className="game-info">
                      <h3>{game.title}</h3>
                      {userRole === "user" && (
                      <p>Price: ${game.price}</p>)}
                      {/* Conditionally render Delete button based on role */}
                      {userRole === "admin" && (
                        <button
                          className="unique-delete-button"
                          onClick={() => handleDeleteClick(game.id)}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Second Carousel */}
        <Carousel>
          {secondCarouselSlides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className="games-carousel-item">
                {slide.map((game) => (
                  <div
                    key={game.id}
                    className="games-item"
                    onClick={() => navigate(`/details/${game.id}`)}
                  >
                    <img
                      src={game.image}
                      alt={game.title}
                      className="games-image"
                    />
                    <div className="game-info">
                      <h3>{game.title}</h3>
                      {userRole === "user" && (
                      <p>Price: ${game.price}</p> )}
                      {/* Conditionally render Delete button based on role */}
                      {userRole === "admin" && (
                        <button
                          className="unique-delete-button"
                          onClick={() => handleDeleteClick(game.id)}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Games;
