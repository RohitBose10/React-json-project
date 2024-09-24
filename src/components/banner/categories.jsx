import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./categories.css";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  return (
    <div className="featured-section">
      <label id="p2">Browse By Category</label>
      <Carousel interval={3000} className="multi-item-carousel" >
        <Carousel.Item onClick={() => navigate("/category")}>
          <div className="carousel-item-content row">
            <div className="col-3">
              <img
                className="d-block w-100"
                src="assets/images/game7.jpg"
                alt="openworld"
              />
              <div className="category-caption">Open World</div>
            </div>
            <div className="col-3">
              <img
                className="d-block w-100"
                src="assets/images/game8.jpg"
                alt="survival"
              />
              <div className="category-caption">Survival</div>
            </div>
            <div className="col-3">
              <img
                className="d-block w-100"
                src="assets/images/game9.avif"
                alt="adventure"
              />
              <div className="category-caption">Adventure</div>
            </div>
            <div className="col-3">
              <img
                className="d-block w-100"
                src="assets/images/game3.webp"
                alt="action"
              />
              <div className="category-caption">Action</div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <label id="p4">Special Offers</label>
      <Carousel interval={3000} className="multi-item-carousel">
        <Carousel.Item onClick={() => navigate("/category")}>
          <div className="carousel-item-content row">
            <div className="col-3">
              <img
                className="d-block w-100"
                src="assets/images/game12.webp"
                alt="pvp"
              />
              <div className="category-caption">PVP</div>
            </div>
            <div className="col-3">
              <img
                className="d-block w-100"
                src="assets/images/game13.avif"
                alt="action"
              />
              <div className="category-caption">Free to Play</div>
            </div>
            <div className="col-3">
              <img
                className="d-block w-100"
                src="assets/images/game11.jpg"
                alt="horror"
              />
              <div className="category-caption">Horror</div>
            </div>
            <div className="col-3">
              <img
                className="d-block w-100"
                src="assets/images/game10.jpg"
                alt="storyrich"
              />
              <div className="category-caption">Story-Rich</div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Categories;
