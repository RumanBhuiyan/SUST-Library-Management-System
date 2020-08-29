import React from "react";
import "./LoginDesign.css";
import UserIcon from "../images/username.png";
import PassIcon from "../images/password.PNG";
import GoogleIcon from "../images/google.PNG";
import FacebookIcon from "../images/facebook.png";
import { useHistory } from "react-router-dom";

function LoginForm() {
  let history = useHistory();

  return (
    <div id="logindiv" className="col-lg-6 col-md-6 col-sm-12">
      <div className="row justify-content-center text-center loginDiv">
        <h3 id="loginHeading">User Login</h3>
      </div>
      <div className="row justify-content-center text-center">
        <form
          action="/"
          method="post"
          className="loginForm p-lg-5 p-md-4 p-sm-4 w-lg-85 w-md-75 w-sm-90"
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
            placeholder="User Name"
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
            placeholder="Password"
            spellCheck={"false"}
          />
          <br /> <br />
          <button type="submit" className="myBtn mb-3">
            Login
          </button>{" "}
          <br />
          <h3>Don't have an account?</h3>
          <button
            className="myBtn mb-3 w-50"
            onClick={() => history.push("/signup")}
          >
            SignUp Here
          </button>
        </form>
      </div>
      <div className="row justify-content-center text-center">
        <div className="col">
          <button className="loginButton">
            <img
              className="rounded-circle"
              src={GoogleIcon}
              width={"40px"}
              alt="Google"
            />
            Login With Google
          </button>
        </div>
        <div className="col">
          <button className="loginButton">
            <img
              className="rounded-circle"
              src={FacebookIcon}
              width={"40px"}
              alt="Facebook"
            />
            Login With Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
