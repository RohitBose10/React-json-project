import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./banner.css";
function Banner_part() {
  return (
    <Carousel data-bs-theme="dark" interval={2500}>
      <Carousel.Item>
        <video
          className="d-block w-100"
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
