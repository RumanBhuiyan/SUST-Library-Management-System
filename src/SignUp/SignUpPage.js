import React from "react";
// import "./index.css";
import "../css/index.css";
import SignUpPageVector from "../images/library4.jpg";
import UserIcon from "../images/username.png";
import RegIcon from "../images/registration.PNG";
import GmailIcon from "../images/email.PNG";
import PassIcon from "../images/password.PNG";
import GoogleIcon from "../images/google.PNG";
import FacebookIcon from "../images/facebook.png";

function SignUpPage() {
  return (
    <div>
      <div className="container-fluid signUpDiv">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div id="vectordiv">
              <img
                id="vector"
                src={SignUpPageVector}
                width={"100%"}
                height={"550px"}
                alt="vector"
              />
            </div>
          </div>
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
                <img
                  className="formIcon rounded-circle"
                  src={UserIcon}
                  width={"40px"}
                  alt="User"
                />
                <input
                  className="w-auto mt-4 mr-4"
                  name="username"
                  type="name"
                  placeholder="Your Name"
                  spellCheck={"false"}
                />
                <br />
                <img
                  className="formIcon rounded-circle"
                  src={RegIcon}
                  width={"40px"}
                  alt="Reg no."
                />
                <input
                  className="w-auto mr-4"
                  name="regno"
                  type="number"
                  placeholder="Registration No."
                  spellCheck={"false"}
                />
                <br />
                <img
                  className="formIcon rounded-circle"
                  src={GmailIcon}
                  width={"40px"}
                  alt="Gmail"
                />
                <input
                  className="w-auto mr-4"
                  name="email"
                  type="email"
                  placeholder="Enter Gmail"
                  spellCheck={"false"}
                />
                <br />
                <img
                  className="formIcon rounded-circle"
                  src={PassIcon}
                  width={"40px"}
                  alt="Password"
                />
                <input
                  className="w-auto mr-4"
                  name="password"
                  type="password"
                  placeholder="Your Password"
                  spellCheck={"false"}
                />
                <br /> <br />
                <button type="submit" className="myBtn">
                  Submit
                </button>
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
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
