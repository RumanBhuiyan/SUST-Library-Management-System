import React, { useEffect } from "react";
import "./AdminDesign.css";
import UserIcon from "../images/username.png";
import PassIcon from "../images/password.PNG";
import GoogleIcon from "../images/google.PNG";
import FacebookIcon from "../images/facebook.png";
import gsap from "gsap";
import jump from "../InputFieldJump";

function AdminForm() {
  useEffect(() => {
    gsap.from("form", { marginTop: -200, opacity: 0, duration: 2 });
  }, []);

  return (
    <div id="admindiv" className="col-lg-6 col-md-6 col-sm-12">
      <div className="row justify-content-center text-center adminFullDiv">
        <h3 id="adminHeading">Admin Login</h3>
      </div>
      <div className="row justify-content-center text-center">
        <form
          action="/"
          method="post"
          className="adminForm p-lg-5 p-md-4 p-sm-4 w-lg-85 w-md-75 w-sm-90"
        >
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
              name="Name"
              type="name"
              placeholder="User Name"
              spellCheck={"false"}
              style={{ width: "90%", overflow: "hidden" }}
              onClick={(e) => jump(e)}
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
              id="submitbtn"
              type="submit"
              className="myBtn"
              data-micron="bounce"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="row justify-content-center text-center">
        <div className="col">
          <button className="socialButtons" data-micron="pop">
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
          <button className="socialButtons" data-micron="pop">
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
