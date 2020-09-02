import React, { useEffect } from "react";
import "./LoginDesign.css";
import UserIcon from "../images/username.png";
import PassIcon from "../images/password.PNG";
import GoogleIcon from "../images/google.PNG";
import FacebookIcon from "../images/facebook.png";
import { useHistory } from "react-router-dom";
import gsap from "gsap/gsap-core";
import jump from "../InputFieldJump";

function LoginForm() {
  let history = useHistory();

  useEffect(() => {
    gsap.from("form", { marginTop: -200, opacity: 0, duration: 2 });
  }, []);

  return (
    <div
      id="logindiv"
      className="col-lg-6 col-md-6 col-sm-12"
      style={{ overflow: "hidden" }}
    >
      <div className="row justify-content-center text-center loginDiv">
        <h3 id="loginHeading">User Login</h3>
      </div>
      <div className="row justify-content-center text-center">
        <form
          action="/"
          method="post"
          className="loginForm p-lg-5 p-md-4 p-sm-4 w-lg-85 w-md-75 w-sm-90"
        >
          <div className="row justify-content-center text-center">
            <img
              className="rounded-circle"
              src={UserIcon}
              width={"40px"}
              alt="User"
              style={{ marginTop: "1.2rem" }}
            />
          </div>
          <div className="row justify-content-center text-center">
            <input
              name="username"
              type="name"
              placeholder="User Name"
              spellCheck={"false"}
              style={{ width: "90%", overflow: "hidden" }}
              onClick={(e) => jump(e)}
            />
          </div>
          <div className="row justify-content-center text-center">
            <img
              className="rounded-circle"
              src={PassIcon}
              width={"40px"}
              alt="Password"
              style={{ marginTop: "1rem", marginLeft: "0.5rem" }}
            />
          </div>
          <div className="row justify-content-center text-center">
            <input
              name="password"
              type="password"
              placeholder="Password"
              spellCheck={"false"}
              style={{ width: "90%", overflow: "hidden" }}
              onClick={(e) => jump(e)}
            />
          </div>
          <div className="row justify-content-center text-center">
            <button
              type="submit"
              className="myBtn"
              style={{ marginLeft: "0.3rem" }}
              data-micron="bounce"
            >
              Login
            </button>
          </div>

          <h3 style={{ textAlign: "center" }}>Don't have an account?</h3>

          <div className="row justify-content-center text-center">
            <button
              style={{ marginLeft: "0.3rem", marginBottom: "1.5rem" }}
              className="myBtn"
              onClick={() => history.push("/signup")}
              data-micron="bounce"
            >
              SignUp Here
            </button>
          </div>
        </form>
      </div>
      <div className="row justify-content-center text-center">
        <div className="col">
          <button className="loginButton" data-micron="pop">
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
          <button className="loginButton" data-micron="pop">
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
