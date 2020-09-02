import React from "react";
import "./AdminDesign.css";
import { Redirect } from "react-router-dom";

function LogoutContent() {
  return (
    <div>
      <Redirect to="/" />
    </div>
  );
}

export default LogoutContent;
