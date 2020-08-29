import React from "react";
import "./LoginDesign.css";
import LoginVector from "./LoginVector";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <div>
      <div className="container-fluid loginDiv">
        <div className="row">
          <LoginVector />
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
