import React, { useEffect } from "react";
import "./LoginDesign.css";
import LoginVector from "./LoginVector";
import LoginForm from "./LoginForm";

function LoginPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
