import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container" id="home">
      <div className="hero-text">
        <h1>We Ensure Better Education For a Better World</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
          ducimus esse, eveniet vero minima aliquam, sunt, eligendi distinctio
          voluptatum eum rerum! Velit eos odit suscipit consectetur eaque,
          minima architecto aliquid!
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
