import React, { useEffect } from "react";
import "./AdminDesign.css";
import gsap from "gsap";
import UserIcon from "../images/username.png";
import MessageIcon from "../images/chat.PNG";
import jump from "../InputFieldJump";

function SendMailContent() {
  useEffect(() => {
    gsap.from(".newbookdiv", { marginTop: -200, opacity: 0, duration: 1 });
  }, []);
  return (
    <div className="newbookdiv  w-sm-100">
      <div className="row justify-content-center text-center">
        <img
          className="rounded-circle mr-2 border-rounded-circle"
          src={UserIcon}
          alt="User"
          width="60px"
        />
      </div>
      <div className="row justify-content-center text-center">
        <input
          name="userInfo"
          placeholder="gmail or reg.no."
          style={{
            marginBottom: "10px",
            marginTop: "20px",
            width: "90%",
            overflow: "hidden",
          }}
          spellCheck={false}
          onClick={(e) => jump(e)}
        />
      </div>
      <div className="row justify-content-center text-center">
        <img
          className="rounded-circle mr-2 border-rounded-circle"
          src={MessageIcon}
          alt="message"
          width="80px"
        />
      </div>
      <div className="row justify-content-center text-center">
        <textarea
          class="form-control mytextarea"
          rows="2"
          cols="3"
          spellCheck={false}
          placeholder="Your Message"
          onClick={(e) => jump(e)}
        ></textarea>
      </div>
      <div className="row justify-content-center text-center">
        <button id="sendbtn" className="myBtn adminbutton" data-micron="pop">
          Send Message
        </button>
      </div>
    </div>
  );
}

export default SendMailContent;
