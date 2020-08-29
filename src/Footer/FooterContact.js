import React from "react";
import "./FooterDesign.css";
import ContactIcon from "../images/contact.png";
import MailIcon from "../images/message.PNG";
import AddressIcon from "../images/map.png";

function FooterContact() {
  return (
    <div className="container-fluid footerAbout footerSocialDiv">
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
          <p className="footer-contact-text">Contact Librarian : +897584</p>
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
          <p className="footer-contact-text">
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
          <p className="footer-contact-text">
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
  );
}

export default FooterContact;
