import React, { useEffect } from "react";
import "./AdminDesign.css";
import BookImage from "../images/book.png";
import PrevUser from "../images/prevuser.png";
import CurrentUser from "../images/currentuser.png";
import gsap from "gsap";

function UpdateBookContent() {
  useEffect(() => {
    gsap.from(".newbookdiv", { marginTop: -200, opacity: 0, duration: 1 });
  }, []);
  return (
    <div className="newbookdiv  w-sm-100">
      <img
        className="rounded-circle mr-2 border-rounded-circle"
        src={BookImage}
        alt="Book"
        width="60px"
      />
      <input
        name="bookName"
        placeholder="Book Name"
        style={{ marginBottom: "10px", marginTop: "20px" }}
        spellCheck={false}
      />
      <br />
      <img
        className="rounded-circle mr-2 border-rounded-circle"
        src={PrevUser}
        alt="Prevuser"
        width="60px"
      />
      <input
        name="prevUserName"
        placeholder="Prev gmail or registration no."
        style={{ marginBottom: "10px" }}
        spellCheck={false}
      />
      <br />
      <img
        className="rounded-circle mr-2 border-rounded-circle"
        src={CurrentUser}
        alt="Current User"
        width="60px"
      />
      <input
        name="currentUser"
        placeholder="current gmail or registration no."
        style={{ marginBottom: "10px" }}
        spellCheck={false}
      />
      <br />
      <div className="row justify-content-center text-center ml-lg-2 ml-md-2 ml-sm-0">
        <button id="updatebtn" className="myBtn adminbutton">
          Change Ownership
        </button>
      </div>
    </div>
  );
}

export default UpdateBookContent;
