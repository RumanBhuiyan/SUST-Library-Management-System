import React from "react";
import "./LoginDesign.css";
import LoginPageVector from "../images/library9.jpg";

function LoginVector() {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <div id="loginVectorDiv">
        <img
          src={LoginPageVector}
          width={"100%"}
          height={"680px"}
          alt="vector"
        />
      </div>
    </div>
  );
}

export default LoginVector;
