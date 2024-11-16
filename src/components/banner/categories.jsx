import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./categories.css";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  return (
    <div className="featured-section">
      <label id="p2">Browse By Category</label>
      <Carousel interval={3000} className="multi-item-carousel">
        <Carousel.Item>
          <div className="carousel-item-content">
            {[
              { src: "assets/images/game7.jpg", alt: "openworld", caption: "Open World" },
              { src: "assets/images/game8.jpg", alt: "survival", caption: "Survival" },
              { src: "assets/images/game9.avif", alt: "adventure", caption: "Adventure" },
              { src: "assets/images/game3.webp", alt: "action", caption: "Action" },
            ].map((item, index) => (
              <div
                className="carousel-item-wrapper"
                key={index}
                onClick={() => navigate("/category")}
              >
                <img src={item.src} alt={item.alt} />
                <div className="category-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>

      <label id="p4">Special Offers</label>
      <Carousel interval={3000} className="multi-item-carousel">
        <Carousel.Item>
          <div className="carousel-item-content">
            {[
              { src: "assets/images/game12.webp", alt: "pvp", caption: "PVP" },
              { src: "assets/images/game13.avif", alt: "action", caption: "Free to Play" },
              { src: "assets/images/game11.jpg", alt: "horror", caption: "Horror" },
              { src: "assets/images/game10.jpg", alt: "storyrich", caption: "Story-Rich" },
            ].map((item, index) => (
              <div
                className="carousel-item-wrapper"
                key={index}
                onClick={() => navigate("/category")}
              >
                <img src={item.src} alt={item.alt} />
                <div className="category-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Categories;
