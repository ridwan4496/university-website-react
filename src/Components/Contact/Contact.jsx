import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b211607e-10c2-4a5d-a11e-54f80787481a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
          Send us a message<img src={msg_icon} alt="message-icon"></img>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          reprehenderit voluptatem possimus quia. In voluptates suscipit
          accusantium tempora ipsa praesentium culpa molestias, minima eveniet
          earum. Enim vitae doloremque animi totam inventore nostrum tempora
          unde nihil sed, ipsa nisi cumque officia adipisci perspiciatis!
          Maxime, nam consequuntur.
        </p>
        <ul>
          <li>
            <img src={mail_icon}></img>edusity@gmail.com
          </li>
          <li>
            <img src={phone_icon}></img>+1 123-456-7890
          </li>
          <li>
            <img src={location_icon}></img>
            77 Massachusetts Ave, Cambridge
            <br /> MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now<img src={white_arrow}></img>
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
