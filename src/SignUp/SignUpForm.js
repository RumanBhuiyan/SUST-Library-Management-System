import React, { useEffect } from "react";
import "./SignUpDesign.css";
import UserIcon from "../images/username.png";
import RegIcon from "../images/registration.PNG";
import GmailIcon from "../images/email.PNG";
import PassIcon from "../images/password.PNG";
import GoogleIcon from "../images/google.PNG";
import FacebookIcon from "../images/facebook.png";
import gsap from "gsap";
//import Ripples from "react-ripples"; //for ripple effects in buttons

function SignUpForm() {
  useEffect(() => {
    gsap.from("form", { marginTop: -200, opacity: 0, duration: 2 });
  }, []);

  return (
    <div id="gradientdiv" className="col-lg-6 col-md-6 col-sm-12">
      <div className="row justify-content-center text-center signUpDiv">
        <h3 id="signUpHeading">User SignUp</h3>
      </div>
      <div className="row justify-content-center text-center">
        <form
          action="/"
          method="post"
          className="signUpForm p-lg-5 p-md-4 p-sm-4 w-lg-85 w-md-75 w-sm-90"
        >
          <div className="row justify-content-center text-center">
            <img
              className="formIcon rounded-circle"
              src={UserIcon}
              width={"40px"}
              alt="User"
            />
          </div>
          <div className="row justify-content-center text-center">
            <input
              name="username"
              type="name"
              placeholder="Your Name"
              spellCheck={"false"}
              style={{ width: "90%", overflow: "hidden" }}
            />
          </div>
          <div className="row justify-content-center text-center">
            <img
              className="formIcon rounded-circle"
              src={RegIcon}
              width={"40px"}
              alt="Reg no."
            />
          </div>
          <div className="row justify-content-center text-center">
            <input
              name="regno"
              type="number"
              placeholder="Registration No."
              spellCheck={"false"}
              style={{ width: "90%", overflow: "hidden" }}
            />
          </div>
          <div className="row justify-content-center text-center">
            <img
              className="formIcon rounded-circle"
              src={GmailIcon}
              width={"40px"}
              alt="Gmail"
            />
          </div>
          <div className="row justify-content-center text-center">
            <input
              name="email"
              type="email"
              placeholder="Enter Gmail"
              spellCheck={"false"}
              style={{ width: "90%", overflow: "hidden" }}
            />
          </div>
          <div className="row justify-content-center text-center">
            <img
              className="formIcon rounded-circle"
              src={PassIcon}
              width={"40px"}
              alt="Password"
            />
          </div>
          <div className="row justify-content-center text-center">
            <input
              name="password"
              type="password"
              placeholder="Your Password"
              spellCheck={"false"}
              style={{ width: "90%", overflow: "hidden" }}
            />
          </div>
          <div className="row justify-content-center text-center">
            <button type="submit" className="myBtn">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="row justify-content-center text-center">
        <div className="col">
          <button className="signInButton">
            <img
              className="rounded-circle"
              src={GoogleIcon}
              width={"40px"}
              alt="Google"
            />
            Sign In With Google
          </button>
        </div>
        <div className="col">
          <button className="signInButton mb-3">
            <img
              className="rounded-circle"
              src={FacebookIcon}
              width={"40px"}
              alt="Facebook"
            />
            Sign In With Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
