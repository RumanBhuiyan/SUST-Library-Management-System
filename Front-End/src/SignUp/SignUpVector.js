import React from "react";
import "./SignUpDesign.css";
import SignUpPageVector from "../images/library4.jpg";

function SignUpVector() {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <div id="vectordiv">
        <img
          src={SignUpPageVector}
          width={"100%"}
          height={"750px"}
          alt="vector"
        />
      </div>
    </div>
  );
}

export default SignUpVector;
//for changing image height not changing div height use image direct height prop
