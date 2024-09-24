import React, { useState, useEffect } from "react";
import axios from "axios";
import base_url, { auth_end } from "../../api/api_url";
import "./addgames.css"; // Updated CSS file
import { Button, Container } from "react-bootstrap";
import Swal from "sweetalert2";
const AddGame = () => {
  const [formData, setFormData] = useState({
    title: "",
    category_name: "",
    description: "",
    price: "",
    release_date: "",
    rating: "",
    developer: "",
    publisher: "",
    image: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${base_url}${auth_end.categories}`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          image: fileReader.result,
        }));
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${base_url}${auth_end.games}`, formData)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Game added successfully!",
          icon: "success",
        });
        setFormData({
          title: "",
          category_name: "",
          description: "",
          price: "",
          release_date: "",
          rating: "",
          developer: "",
          publisher: "",
          image: "",
        });
      })
      .catch((error) => {
        console.error("Error adding game:", error);
        Swal.fire({
          title: "Error!",
          text: "There was an error adding the game.",
          icon: "error",
        });
      });
  };

  return (
    <div className="new-add-game-wrapper">
      <Container>
        <br />
        <h3 className="new-add-game-header" style={{fontSize:"30px"}}>Add New Game</h3>
        <br />
        <div className="editgame-form-container"> 
        <form className="new-add-game-form" onSubmit={handleSubmit}>
          <div>
            <label className="new-add-game-label">Title:</label>
            <input
              className="new-add-game-input"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="new-add-game-label">Category:</label>
            <select
              className="new-add-game-select"
              name="category_name"
              value={formData.category_name}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="new-add-game-label">Description:</label>
            <textarea
              className="new-add-game-textarea"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="new-add-game-label">Price:</label>
            <input
              className="new-add-game-input"
              type="number"
              step="0.01"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="new-add-game-label">Release Date:</label>
            <input
              className="new-add-game-input"
              type="date"
              name="release_date"
              value={formData.release_date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="new-add-game-label">Rating:</label>
            <input
              className="new-add-game-input"
              type="number"
              step="0.1"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="new-add-game-label">Developer:</label>
            <input
              className="new-add-game-input"
              type="text"
              name="developer"
              value={formData.developer}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="new-add-game-label">Publisher:</label>
            <input
              className="new-add-game-input"
              type="text"
              name="publisher"
              value={formData.publisher}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="new-add-game-label">Image:</label>
            <input
              className="new-add-game-file"
              type="file"
              name="image"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="editgame-button-container">
            <Button
              variant="outline-dark"
              className="editgame-button"
              type="submit"
            >
              Add game
            </Button>
          </div>
        </form>
        </div>
      </Container>
    </div>
  );
};

export default AddGame;
