import React from "react";
import "./Contact.css";
import Heading from "./Heading";
import ContactInfo from "./ContactInfo";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";

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
        <ContactInfo Icon={TwitterIcon} Title="Social" Content="Coming soon" />
      </div>
    </div>
  );
}

export default Contact;
