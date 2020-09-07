import React, { useState, useEffect } from "react";
import "./SignUpDesign.css";
import UserIcon from "../images/username.png";
import RegIcon from "../images/registration.PNG";
import GmailIcon from "../images/email.PNG";
import PassIcon from "../images/password.PNG";
import GoogleIcon from "../images/google.PNG";
import FacebookIcon from "../images/facebook.png";
import gsap from "gsap";
import jump from "../InputFieldJump";
//import Ripples from "react-ripples"; //for ripple effects in buttons
import axios from "axios";
import { useHistory } from "react-router-dom";

function SignUpForm() {
  const history = useHistory();

  const [studentInfo, setStudentInfo] = useState({
    username: "",
    regno: "",
    gmail: "",
    password: "",
  });

  useEffect(() => {
    gsap.from("form", { marginTop: -200, opacity: 0, duration: 2 });
  }, []);

  const handleChange = (event) => {
    if (event.target.name === "username") {
      setStudentInfo({
        ...studentInfo,
        username: event.target.value,
      });
    } else if (event.target.name === "regno") {
      setStudentInfo({
        ...studentInfo,
        regno: event.target.value,
      });
    } else if (event.target.name === "gmail") {
      setStudentInfo({
        ...studentInfo,
        gmail: event.target.value,
      });
    } else {
      setStudentInfo({
        ...studentInfo,
        password: event.target.value,
      });
    }
  };

  const handleClick = () => {
    axios({
      method: "post",
      url: "http://localhost:4000/signup/data",
      data: {
        ...studentInfo,
      },
    })
      .then((res) => {
        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="gradientdiv" className="col-lg-6 col-md-6 col-sm-12">
      <div className="row justify-content-center text-center signUpDiv">
        <h3 id="signUpHeading">User SignUp</h3>
      </div>
      <div className="row justify-content-center text-center">
        <div className="signUpForm p-lg-5 p-md-4 p-sm-4 w-lg-85 w-md-75 w-sm-90">
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
              placeholder="Username"
              spellCheck={"false"}
              style={{ width: "90%", overflow: "hidden" }}
              onClick={(e) => jump(e)}
              onChange={(e) => handleChange(e)}
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
              onClick={(e) => jump(e)}
              onChange={(e) => handleChange(e)}
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
              name="gmail"
              type="email"
              placeholder="Enter Gmail"
              spellCheck={"false"}
              style={{ width: "90%", overflow: "hidden" }}
              onClick={(e) => jump(e)}
              onChange={(e) => handleChange(e)}
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
              onClick={(e) => jump(e)}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="row justify-content-center text-center">
            <button
              className="myBtn"
              data-micron="bounce"
              onClick={() => handleClick()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center text-center">
        <div className="col">
          <button className="signInButton" data-micron="pop">
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
          <button className="signInButton mb-3" data-micron="pop">
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
