import React, { useState, useEffect } from "react";
import "./AdminDesign.css";
import gsap from "gsap";
import UserIcon from "../images/username.png";
import MessageIcon from "../images/chat.PNG";
import jump from "../InputFieldJump";
import axios from "axios";

function SendMailContent(props) {
  const [mailContent, setMailContent] = useState({
    gmail: "",
    message: "",
  });

  useEffect(() => {
    gsap.from(".newbookdiv", { marginTop: -200, opacity: 0, duration: 1 });
  }, []);

  const handleChange = (event) => {
    if (event.target.name === "userInfo") {
      setMailContent({
        ...mailContent,
        gmail: event.target.value,
      });
    } else {
      setMailContent({
        ...mailContent,
        message: event.target.value,
      });
    }
  };

  const handleClick = () => {
    axios({
      method: "post",
      url: "http://localhost:4000/data/mail",
      data: {
        ...mailContent,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    gsap.to(".newbookdiv", { opacity: 0, duration: 1 });
    window.location.reload();
  };

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
          placeholder="Enter gmail"
          style={{
            marginBottom: "10px",
            marginTop: "20px",
            width: "90%",
            overflow: "hidden",
          }}
          spellCheck={false}
          onClick={(e) => jump(e)}
          onChange={(e) => {
            handleChange(e);
          }}
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
          className="form-control mytextarea text-center"
          rows="2"
          cols="3"
          spellCheck={false}
          placeholder="Your Message"
          onClick={(e) => jump(e)}
          onChange={(e) => {
            handleChange(e);
          }}
        ></textarea>
      </div>
      <div className="row justify-content-center text-center">
        <button
          id="sendbtn"
          className="myBtn adminbutton"
          data-micron="pop"
          onClick={() => handleClick()}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default SendMailContent;

//Configuring .env file in react app
//i)create a .env file inside src directory
// ii)key names will be like : process.env.REACT_APP_GMAIL
//n.b REACT_APP_ will exixts prior to any key name,its must
// otherwise won't work
