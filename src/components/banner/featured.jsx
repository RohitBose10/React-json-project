import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./featured.css";
import { useNavigate } from "react-router-dom";

function FeaturedGames() {
  const navigate = useNavigate();
  return (
    <div className="featured-games-container">
      <label id="p1">Featured and Recommended</label>
      <Carousel data-bs-theme="dark" interval={3000} onClick={() => navigate("/category")}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/images/game6.webp"
            alt="Featured Game 1"
            height="420"
          />
          <Carousel.Caption>
            <h4>God of War : Ragnarok</h4>
            <h5>offer ends 12 Oct @ 10:30pm</h5>
            <h3>Up to - 85% </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/images/game2.webp"
            alt="Featured Game 2"
            height="500"
          />
          <Carousel.Caption>
            <h4>Ghost of Tsushima</h4>
            <h5>offer ends 12 Oct @ 10:30pm</h5>
            <h3>Up to - 65% </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/images/game1.jpg"
            alt="Featured Game 3"
            height="500"
          />
          <Carousel.Caption>
            <h4>Call of Duty : Modern Warfare</h4>
            <h5>offer ends 12 Oct @ 10:30pm</h5>
            <h3>Up to - 90% </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/images/game4.jpeg"
            alt="Featured Game 4"
            height="610"
          />
          <Carousel.Caption>
            <h4>EA SPORTS FC 24</h4>
            <h5>offer ends 12 Oct @ 10:30pm</h5>
            <h3>Up to - 95% </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/images/game5.jpg"
            alt="Featured Game 5"
            height="550"
          />
          <Carousel.Caption>
            <h4>Black Myth : Wukong</h4>
            <h5>offer ends 12 Oct @ 10:30pm</h5>
            <h3>Up to - 35% </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default FeaturedGames;
