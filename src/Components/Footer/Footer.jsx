import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        &copy; 2024 Edusity. All rights reserved. Designed and Developed
        by&nbsp;
        <span className="credit">
          <a href="https://github.com/ridwan4496" target="_blank">
            Ridwan Hossain
          </a>
        </span>
      </p>
      <ul>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
