import React from "react";
import "./FooterDesign.css";
import FacebookIcon from "../images/facebook.png";
import TwitterIcon from "../images/twitter.png";
import InstagramIcon from "../images/instagram.png";
import LinkedInIcon from "../images/linkedin.png";

function FooterSocials() {
  return (
    <div className="container-fluid socialIcons">
      <div className="row justify-content-center">
        <div className="col-3">
          <a
            rel="noopener noreferrer"
            className="socialImg"
            href="https://www.facebook.com"
            target="_blank"
          >
            <img className="socialImg" src={FacebookIcon} alt="Facebook" />
          </a>
        </div>
        <div className="col-3">
          <a
            rel="noopener noreferrer"
            className="socialImg"
            href="https://www.twitter.com"
            target="_blank"
          >
            <img className="socialImg" src={TwitterIcon} alt="Twitter" />
          </a>
        </div>
        <div className="col-3">
          <a
            rel="noopener noreferrer"
            className="socialImg"
            href="https://www.instagram.com"
            target="_blank"
          >
            <img className="socialImg" src={InstagramIcon} alt="Instagram" />
          </a>
        </div>
        <div className="col-3">
          <a
            rel="noopener noreferrer"
            className="socialImg"
            href="https://www.linkedin.cn/"
            target="_blank"
          >
            <img className="socialImg" src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterSocials;
