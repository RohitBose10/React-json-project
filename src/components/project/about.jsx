import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-title">Welcome to GameVault</h1>
        <p className="about-description">
          At <span className="highlight">GameVault</span>, we are passionate
          about bringing you the best games from around the world. Whether
          you're a casual player or a dedicated gamer, we provide an extensive
          collection of the latest releases, exclusive titles, and timeless
          classics.
        </p>
        <p className="about-description">
          With a community-driven approach and cutting-edge technology,
          GameVault is the ultimate destination for game enthusiasts. Join us in
          celebrating the world of gaming, where your next adventure is just a
          click away.
        </p>
        <div className="about-image">
          <video
            className="d-block w-100"
            src="assets/videos/video2.mp4"
            alt="First slide"
            height={500}
            autoPlay
            loop
            muted
          />
        </div>
        <div className="about-features">
          <div className="feature">
            <h3>Exclusive Titles</h3>
            <p>
              Access to rare and exclusive games you won't find anywhere else.
            </p>
          </div>
          <div className="feature">
            <h3>Community Driven</h3>
            <p>
              Join our vibrant community and engage with other passionate
              gamers.
            </p>
          </div>
          <div className="feature">
            <h3>Seamless Experience</h3>
            <p>
              Enjoy a seamless and immersive gaming experience on any device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
