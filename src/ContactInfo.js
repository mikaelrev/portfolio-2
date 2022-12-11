import React from "react";
import Heading from "./Heading";

function ContactInfo({ Icon, Title, Content }) {
  return (
    <div className="contact__info">
      {Icon && <Icon fontSize="large" />}
      <Heading size="2" content={Title} />
      <p>{Content}</p>
    </div>
  );
}

export default ContactInfo;
