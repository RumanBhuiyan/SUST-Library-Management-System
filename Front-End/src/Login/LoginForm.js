import React, { useState, useEffect } from "react";
import "./LoginDesign.css";
import UserIcon from "../images/username.png";
import PassIcon from "../images/password.PNG";
import GoogleIcon from "../images/google.PNG";
import FacebookIcon from "../images/facebook.png";
import { useHistory } from "react-router-dom";
import gsap from "gsap/gsap-core";
import jump from "../InputFieldJump";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import $ from "jquery";

function LoginForm() {
  //const { loginWithRedirect } = useAuth0();
  const { loginWithPopup } = useAuth0();
  //const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  let history = useHistory();

  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    gsap.from(".loginForm", { marginTop: -200, opacity: 0, duration: 2 });
  }, []);

  //FIres when userStore get changed
  // useEffect(() => {
  //   console.log(userStore);
  // }, [userStore]);

  const handleChange = (event) => {
    if (event.target.name === "username") {
      setLoginInfo({
        ...loginInfo,
        username: event.target.value,
      });
    } else {
      setLoginInfo({
        ...loginInfo,
        password: event.target.value,
      });
    }
  };

  const handleClick = () => {
    axios({
      method: "post",
      url: "http://localhost:4000/login/data",
      data: {
        ...loginInfo,
      },
    })
      .then((res) => {
        if (res.data) {
          axios({
            method: "post",
            url: "http://localhost:4000/userinfo",
            data: {
              userLoggedIn: true,
              username: loginInfo.username,
            },
          })
            .then((res) => {
              console.log(res);
            })
            .catch((error) => {
              console.log(error);
            });
          history.push("/books");
          window.location.reload();
        } else {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setLoginInfo({
      ...loginInfo,
      username: user.nickname,
      password: user.nickname,
    });
    $("#usernameField").val(user.nickname);
    $("#passwordField").val(user.nickname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isAuthenticated, isLoading]);

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
        <div className="loginForm p-lg-5 p-md-4 p-sm-4 w-lg-85 w-md-75 w-sm-90">
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
              id="usernameField"
              name="username"
              type="name"
              placeholder="User Name"
              spellCheck={"false"}
              style={{ width: "90%", overflow: "hidden" }}
              onClick={(e) => jump(e)}
              onChange={(e) => handleChange(e)}
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
              id="passwordField"
              name="password"
              type="password"
              placeholder="Password"
              spellCheck={"false"}
              style={{ width: "90%", overflow: "hidden" }}
              onClick={(e) => jump(e)}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="row justify-content-center text-center">
            <button
              onClick={() => handleClick()}
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
        </div>
      </div>
      <div className="row justify-content-center text-center">
        <div className="col">
          <button
            onClick={() => loginWithPopup()}
            className="loginButton"
            data-micron="pop"
          >
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
          <button
            onClick={() => loginWithPopup()}
            className="loginButton"
            data-micron="pop"
          >
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
