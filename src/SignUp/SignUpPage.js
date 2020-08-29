import React from "react";
import "./SignUpDesign.css";
import SignUpVector from "./SignUpVector";
import SignUpForm from "./SignUpForm";

function SignUpPage() {
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
