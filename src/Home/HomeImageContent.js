import React from "react";
import "./HomeDesign.css";
import AlbertEinstein from "../images/Einstein.jpg";
import { Wave } from "react-animated-text";

function HomeImageContent() {
  return (
    <div className="row">
      <div className="col-lg-5 col-md-6 col-sm-12 einstein">
        <img
          className="rounded-circle"
          src={AlbertEinstein}
          alt="ALbert Einstein"
          width={"250px"}
        />
      </div>
      <div className="col-lg-7 col-md-6 col-sm-12 justify-content-center text-center">
        <div>
          <Wave
            className="text-center"
            text="Imagination is more important than your knowledge"
            speed={15}
            effect="fadeOut"
          />
        </div>
        <div>
          <Wave className="text-center" text="-Albert Einstein" speed={15} />
        </div>
      </div>
    </div>
  );
}

export default HomeImageContent;
