import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./banner.css";

function Banner_part() {
  return (
    <Carousel data-bs-theme="dark" interval={2500} className="banner-carousel">
      <Carousel.Item>
        <video
          className="carousel-video"
          src="assets/videos/video1.webm"
          alt="First slide"
          autoPlay
          loop
          muted
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner_part;
