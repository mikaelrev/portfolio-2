import React from "react";
import "./Contact.css";
import Heading from "./Heading";
import ContactInfo from "./ContactInfo";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <div className="contact">
      <Heading content="Get in touch with me" />
      <div className="contact__container">
        <ContactInfo
          Icon={LocationOnIcon}
          Title="Location"
          Content="Nils Hertzbergs gate 1, 5034 Bergen"
        />
        <ContactInfo
          Icon={EmailIcon}
          Title="Contact"
          Content="mikael.myrvang@gmail.com"
        />
        <ContactInfo
          Icon={LinkedInIcon}
          Title="Social"
          Content={
            <a href="https://www.linkedin.com/in/mikael-myrvang-953a3523b/">
              My LinkedIn
            </a>
          }
        />
      </div>
    </div>
  );
}

export default Contact;
