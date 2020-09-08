import React, { useState, useEffect } from "react";
import "./AdminDesign.css";
import UserIcon from "../images/username.png";
import PassIcon from "../images/password.PNG";
import GoogleIcon from "../images/google.PNG";
import FacebookIcon from "../images/facebook.png";
import gsap from "gsap";
import jump from "../InputFieldJump";
import { MyContext } from "../App";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import $ from "jquery";

function AdminForm() {
  const { loginWithRedirect } = useAuth0();
  //const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const { infoStore, setInfoStore } = React.useContext(MyContext);

  const [adminInfo, setAdminInfo] = useState({
    username: null,
    password: null,
  });

  useEffect(() => {
    gsap.from(".adminForm", { marginTop: -200, opacity: 0, duration: 2 });
  }, []);

  const handleChange = (event) => {
    if (event.target.name === "username") {
      setAdminInfo({
        ...adminInfo,
        username: event.target.value,
      });
    } else {
      setAdminInfo({
        ...adminInfo,
        password: event.target.value,
      });
    }
  };

  const handleClick = () => {
    axios({
      method: "post",
      url: "http://localhost:4000/admin/login",
      data: {
        username: adminInfo.username,
        password: adminInfo.password,
      },
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.data) {
          axios({
            method: "post",
            url: "http://localhost:4000/webinfo",
            data: {
              adminLoggedIn: true,
            },
          })
            .then((res) => {
              console.log(res);
            })
            .catch((error) => {
              console.log(error);
            });
          window.location.reload();
        } else {
          setInfoStore({
            ...infoStore,
            adminLoggedIn: false,
          });
          alert("UserName or Password is wrong");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setAdminInfo({
      ...adminInfo,
      username: user.nickname,
      password: user.nickname,
    });
    $(".nameField").val(user.nickname);
    $(".passwordField").val(user.nickname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isAuthenticated, isLoading]);

  return (
    <div id="admindiv" className="col-lg-6 col-md-6 col-sm-12">
      <div className="row justify-content-center text-center adminFullDiv">
        <h3 id="adminHeading">Admin Login</h3>
      </div>
      <div className="row justify-content-center text-center">
        <div className="adminForm p-lg-5 p-md-4 p-sm-4 w-lg-85 w-md-75 w-sm-90">
          <div className="row justify-content-center text-center">
            <img
              className="rounded-circle"
              src={UserIcon}
              width={"40px"}
              alt="User"
              style={{ marginTop: "1.5rem" }}
            />
          </div>
          <div className="row justify-content-center text-center">
            <input
              className="nameField"
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
              src={PassIcon}
              width={"40px"}
              alt="Password"
              style={{ marginTop: "1.5rem", marginLeft: "0.8rem" }}
            />
          </div>
          <div className="row justify-content-center text-center">
            <input
              className="passwordField"
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
              id="submitbtn"
              className="myBtn"
              data-micron="bounce"
              onClick={() => handleClick()}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center text-center">
        <div className="col">
          <button
            onClick={() => loginWithRedirect()}
            className="socialButtons"
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
            onClick={() => loginWithRedirect()}
            className="socialButtons"
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

export default AdminForm;
