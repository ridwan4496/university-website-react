import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials" id="testimonials">
      <img
        className="next-btn"
        src={next_icon}
        alt="next-icon"
        onClick={slideForward}
      />
      <img
        className="back-btn"
        src={back_icon}
        alt="back-icon"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="usere-1-img" />
                <div>
                  <h3>Kayla Rendell</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p className="slide-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                id dicta et suscipit nesciunt optio odit voluptates vel eos,
                alias dolorem? Minima incidunt soluta, quisquam ducimus
                assumenda eveniet eligendi itaque dolorem autem unde temporibus
                libero nulla eum, ipsam laboriosam modi.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="usere-2-img" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p className="slide-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                id dicta et suscipit nesciunt optio odit voluptates vel eos,
                alias dolorem? Minima incidunt soluta, quisquam ducimus
                assumenda eveniet eligendi itaque dolorem autem unde temporibus
                libero nulla eum, ipsam laboriosam modi.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="usere-3-img" />
                <div>
                  <h3>Niamh Charles</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p className="slide-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                id dicta et suscipit nesciunt optio odit voluptates vel eos,
                alias dolorem? Minima incidunt soluta, quisquam ducimus
                assumenda eveniet eligendi itaque dolorem autem unde temporibus
                libero nulla eum, ipsam laboriosam modi.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="usere-4-img" />
                <div>
                  <h3>John Henderson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p className="slide-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                id dicta et suscipit nesciunt optio odit voluptates vel eos,
                alias dolorem? Minima incidunt soluta, quisquam ducimus
                assumenda eveniet eligendi itaque dolorem autem unde temporibus
                libero nulla eum, ipsam laboriosam modi.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
