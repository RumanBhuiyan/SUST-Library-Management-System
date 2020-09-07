import React, { useState, useEffect } from "react";
import "./AdminDesign.css";
import BookImage from "../images/book.png";
//import PrevUser from "../images/prevuser.png";
import CurrentUser from "../images/currentuser.png";
import gsap from "gsap";
import jump from "../InputFieldJump";
import axios from "axios";

function UpdateBookContent() {
  const [bookInfo, setBookInfo] = useState({
    bookname: null,
    borrowedBy: null,
  });

  useEffect(() => {
    gsap.from(".newbookdiv", { marginTop: -200, opacity: 0, duration: 1 });
  }, []);

  const handleChange = (event) => {
    if (event.target.name === "bookName") {
      setBookInfo({
        ...bookInfo,
        bookname: event.target.value,
      });
    } else {
      setBookInfo({
        ...bookInfo,
        borrowedBy: event.target.value,
      });
    }
  };

  const handleClick = () => {
    axios({
      method: "put",
      url: "http://localhost:4000/data",
      data: {
        ...bookInfo,
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
          src={BookImage}
          alt="Book"
          width="60px"
        />
      </div>
      <div className="row justify-content-center text-center">
        <input
          name="bookName"
          placeholder="Book Name"
          spellCheck={false}
          style={{ width: "90%", overflow: "hidden" }}
          onClick={(e) => jump(e)}
          onChange={(e) => handleChange(e)}
        />
      </div>
      {/* <div className="row justify-content-center text-center">
        <img
          className="rounded-circle mr-2 border-rounded-circle"
          src={PrevUser}
          alt="Prevuser"
          width="60px"
        />
      </div>
      <div className="row justify-content-center text-center">
        <input
          name="prevUserName"
          placeholder="gmail or reg.no."
          spellCheck={false}
          style={{ width: "90%", overflow: "hidden" }}
          onClick={(e) => jump(e)}
        />
      </div> */}
      <div className="row justify-content-center text-center">
        <img
          className="rounded-circle mr-2 border-rounded-circle"
          src={CurrentUser}
          alt="Current User"
          width="60px"
        />
      </div>
      <div className="row justify-content-center text-center">
        <input
          name="currentUser"
          placeholder="reg.no."
          spellCheck={false}
          style={{ width: "90%", overflow: "hidden" }}
          onClick={(e) => jump(e)}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="row justify-content-center text-center ml-lg-2 ml-md-2 ml-sm-0">
        <button
          id="updatebtn"
          className="myBtn adminbutton"
          data-micron="pop"
          onClick={() => handleClick()}
        >
          Change Ownership
        </button>
      </div>
    </div>
  );
}

export default UpdateBookContent;
