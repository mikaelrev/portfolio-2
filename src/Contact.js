import React from "react";
import "./Contact.css";
import Heading from "./Heading";

function Contact() {
  return (
    <div className="contact">
      <Heading content="Contact" />
      <div className="contact__container">
        <div className="contact__info">
          <p>Email</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
