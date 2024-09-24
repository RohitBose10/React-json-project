import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Container } from "react-bootstrap";
import base_url, { auth_end } from "../../api/api_url";
import Swal from "sweetalert2";
import "./editgames.css";

function Editgame() {
  const navigate = useNavigate();
  const { id } = useParams();
  const api = `${base_url}${auth_end.games}${id}`;

  const [state, setState] = useState({
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

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.log("Axios error", err);
      });
  }, [api]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(api, state)
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: "Game details updated successfully!",
          icon: "success",
        });
        navigate(`/games/${state.category_name}`); // Redirect to category page or other relevant page
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "There was an error updating the game.",
          icon: "error",
        });
        console.log("Update error", err);
      });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await getBase64(file);
    setState({
      ...state,
      image: base64,
    });
  };

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  return (
    <div className="editgame-wrapper">
      <Container>
        <br />
        <h3 className="editgame-header" style={{fontSize:"30px"}}>Update Game Details</h3>
        <br />
        <div className="editgame-form-container"> 
        <form onSubmit={submitHandler} className="editgame-form">
          <div className="editgame-detail-item">
            <label htmlFor="title" className="editgame-label">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={state.title}
              onChange={changeHandler}
              className="editgame-input"
            />
          </div>

          <div className="editgame-detail-item">
            <label htmlFor="category_name" className="editgame-label">
              Category
            </label>
            <input
              type="text"
              name="category_name"
              value={state.category_name}
              onChange={changeHandler}
              className="editgame-input"
            />
          </div>

          <div className="editgame-detail-item">
            <label htmlFor="description" className="editgame-label">
              Description
            </label>
            <textarea
              name="description"
              value={state.description}
              onChange={changeHandler}
              className="editgame-textarea"
            />
          </div>

          <div className="editgame-detail-item">
            <label htmlFor="price" className="editgame-label">
              Price
            </label>
            <input
              type="number"
              step="0.01"
              name="price"
              value={state.price}
              onChange={changeHandler}
              className="editgame-input"
            />
          </div>

          <div className="editgame-detail-item">
            <label htmlFor="release_date" className="editgame-label">
              Release Date
            </label>
            <input
              type="date"
              name="release_date"
              value={state.release_date}
              onChange={changeHandler}
              className="editgame-input"
            />
          </div>

          <div className="editgame-detail-item">
            <label htmlFor="rating" className="editgame-label">
              Rating
            </label>
            <input
              type="number"
              step="0.1"
              name="rating"
              value={state.rating}
              onChange={changeHandler}
              className="editgame-input"
            />
          </div>

          <div className="editgame-detail-item">
            <label htmlFor="developer" className="editgame-label">
              Developer
            </label>
            <input
              type="text"
              name="developer"
              value={state.developer}
              onChange={changeHandler}
              className="editgame-input"
            />
          </div>

          <div className="editgame-detail-item">
            <label htmlFor="publisher" className="editgame-label">
              Publisher
            </label>
            <input
              type="text"
              name="publisher"
              value={state.publisher}
              onChange={changeHandler}
              className="editgame-input"
            />
          </div>
      
          <div className="editgame-detail-item">
            <label htmlFor="image" className="editgame-label">
              Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="editgame-file"
            />
          </div>

          <div className="editgame-button-container">
            <Button
              variant="outline-dark"
              className="editgame-button"
              type="submit"
            >
              Update
            </Button>
          </div>
        </form>
        </div>
      </Container>
    </div>
  );
}

export default Editgame;
