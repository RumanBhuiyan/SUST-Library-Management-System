import React from "react";
import "./AdminDesign.css";
import AdminPageVector from "../images/library3.jpg";

function AdminVector() {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <div id="adminVectorDiv">
        <img
          src={AdminPageVector}
          width={"100%"}
          height={"650px"}
          alt="vector"
        />
      </div>
    </div>
  );
}

export default AdminVector;
