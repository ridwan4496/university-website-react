import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img className="about-img" src={about_img} alt="about-img" />
        <img
          className="play-icon"
          src={play_icon}
          alt="play-icon"
          onClick={() => setPlayState(true)}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
          est, beatae, optio qui reiciendis aspernatur perspiciatis asperiores
          eligendi assumenda modi eos quia ipsam sit consectetur voluptatibus
          quisquam voluptatem earum incidunt veritatis a. Quod nobis impedit ea
          rerum. Facere, adipisci officiis.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
          est, beatae, optio qui reiciendis aspernatur perspiciatis asperiores
          eligendi assumenda modi eos quia ipsam sit consectetur voluptatibus
          quisquam voluptatem earum incidunt veritatis a. Quod nobis impedit ea
          rerum. Facere, adipisci officiis.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
          est, beatae, optio qui reiciendis aspernatur perspiciatis asperiores
          eligendi assumenda modi eos quia ipsam sit consectetur voluptatibus
          quisquam voluptatem earum incidunt veritatis a. Quod nobis impedit ea
          rerum. Facere, adipisci officiis.
        </p>
      </div>
    </div>
  );
};

export default About;
