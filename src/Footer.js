import React from "react";
import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/mikael-myrvang-953a3523b/">
        <LinkedInIcon fontSize="large" style={{ color: "black" }} />
      </a>
    </div>
  );
}

export default Footer;
