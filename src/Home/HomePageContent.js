import React from "react";
import lib6Img from "../images/library6.jpg";
import "../css/App.css";
import "../css/index.css";
import ReactPlayer from "react-player";
import IntroVideo from "../images/Library Intro ‑ Made with FlexClip.mp4";
import { Wave } from "react-animated-text";
import AlbertEinstein from "../images/Einstein.jpg";

function HomePageContent() {
  return (
    <div>
      <div>
        <img className="lib6" src={lib6Img} alt="Home" />
      </div>
      <div className="homecontentdiv bg-dark">
        <div className="row justify-content-center text-center p-3">
          <Wave className="text-center " text="Welcome To" speed={15} />
        </div>
        <div className="row justify-content-center text-center">
          <Wave className="text-center" text="SUST CSE Library" speed={15} />
        </div>
        <div className="row justify-content-center text-center">
          <ReactPlayer
            url={IntroVideo}
            width={"75%"}
            height={"auto"}
            controls={true}
          />
        </div>
        <div className="row quotediv">
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
              <Wave
                className="text-center"
                text="-Albert Einstein"
                speed={15}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageContent;

//Making Animated Text free : https://icons8.com/animizer/en/animated-text
//Making free Intro video for your website: https://www.flexclip.com/
//Making Animated Text npm package: https://developer.aliyun.com/mirror/npm/package/react-animated-text
