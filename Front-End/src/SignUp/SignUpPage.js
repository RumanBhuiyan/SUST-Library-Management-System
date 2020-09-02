import React, { useEffect } from "react";
import "./SignUpDesign.css";
import SignUpVector from "./SignUpVector";
import SignUpForm from "./SignUpForm";

function SignUpPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="container-fluid signUpDiv">
        <div className="row">
          <SignUpVector />
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
