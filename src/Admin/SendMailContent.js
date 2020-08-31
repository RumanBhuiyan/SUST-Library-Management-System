import React, { useEffect } from "react";
import "./AdminDesign.css";
import gsap from "gsap";
import UserIcon from "../images/username.png";
import MessageIcon from "../images/chat.PNG";

function SendMailContent() {
  useEffect(() => {
    gsap.from(".newbookdiv", { marginTop: -200, opacity: 0, duration: 1 });
  }, []);
  return (
    <div className="newbookdiv  w-sm-100">
      <img
        className="rounded-circle mr-2 border-rounded-circle"
        src={UserIcon}
        alt="User"
        width="60px"
      />
      <input
        name="userInfo"
        placeholder="gmail or reg.no."
        style={{ marginBottom: "10px", marginTop: "20px" }}
        spellCheck={false}
      />
      <br />
      <img
        className="rounded-circle mr-2 border-rounded-circle"
        src={MessageIcon}
        alt="message"
        width="80px"
      />
      {/* <input
        name="message"
        placeholder="Your Message"
        style={{ marginBottom: "10px" }}
        spellCheck={false}
      /> */}
      <textarea class="form-control" rows="2" cols="3"></textarea>
      <br />
      <div className="row justify-content-center text-center">
        <button id="sendbtn" className="myBtn adminbutton">
          Send Message
        </button>
      </div>
    </div>
  );
}

export default SendMailContent;
