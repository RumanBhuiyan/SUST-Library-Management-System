import React from "react";
import "../css/App.css";
import ContactIcon from "../images/contact.png";
import MailIcon from "../images/message.PNG";
import AddressIcon from "../images/map.png";
import FacebookIcon from "../images/facebook.png";
import TwitterIcon from "../images/twitter.png";
import InstagramIcon from "../images/instagram.png";
import LinkedInIcon from "../images/linkedin.png";

function Footer() {
  return (
    <div className="myFooter">
      <div className="container-fluid about">
        <div className="row p-3 text-center justify-content-center">
          SUST CSE offers a library for their students and management of these
          books will be tracked using this site
        </div>
      </div>
      <hr />
      <div className="container-fluid about socialdiv">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 p-3">
            <img
              className="footerImage rounded-circle"
              src={ContactIcon}
              width={"60px"}
              height={"auto"}
              alt="Contact Icon"
            />
            <br />
            <p className="social-text">Contact Librarian : +897584</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 p-3">
            <img
              className="footerImage rounded-circle"
              src={MailIcon}
              width={"60px"}
              height={"auto"}
              alt="Mail Icon"
            />
            <br />
            <p className="social-text">
              Communicate with Email :
              <a
                rel="noopener noreferrer"
                target={"_blank"}
                href="https://www.gmail.com"
              >
                mahfuz@gmail.com
              </a>
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 p-3">
            <img
              className="footerImage rounded-circle"
              src={AddressIcon}
              width={"60px"}
              height={"auto"}
              alt="Map Icon"
            />{" "}
            <br />
            <p className="social-text">
              Located at 2nd floor IICT SUST
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/place/IICT+Seminar+Library/@24.918572,91.8287435,17z/data=!4m8!1m2!2m1!1slibrary+near+IICT,+University+Avenue,+Sylhet!3m4!1s0x3750ff15f9943889:0x36ef5f970e7edd43!8m2!3d24.9185575!4d91.8309322"
              >
                Find it in google map
              </a>
            </p>
          </div>
        </div>
      </div>
      <hr />
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
      <hr />
      <div id="copyright" className="container-fluid about text-center">
        Copyright
        <i className="fas fa-copyright" style={{ color: "orange" }}></i>
        2020 sust.edu
      </div>
    </div>
  );
}

export default Footer;
