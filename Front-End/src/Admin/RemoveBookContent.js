import React, { useState, useEffect } from "react";
import "./AdminDesign.css";
import BookImage from "../images/book.png";
//import AuthorImage from "../images/writer.png";
import gsap from "gsap";
import jump from "../InputFieldJump";
import axios from "axios";

function RemoveBookContent() {
  const [bookname, setBookname] = useState(null);

  useEffect(() => {
    gsap.from(".newbookdiv", { marginTop: -200, opacity: 0, duration: 1 });
  }, []);

  const handleChange = (event) => {
    setBookname(event.target.value);
  };

  const handleClick = () => {
    axios({
      method: "delete",
      url: "http://localhost:4000/data",
      data: { bookname },
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
    <div className="newbookdiv w-sm-100">
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
          name="bookname"
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
          src={AuthorImage}
          alt="Author"
          width="60px"
        />
      </div>
      <div className="row justify-content-center text-center">
        <input
          name="authorname"
          placeholder="Author Name"
          spellCheck={false}
          style={{ width: "90%", overflow: "hidden" }}
          onClick={(e) => jump(e)}
        />
      </div> */}
      <div className="row justify-content-center text-center">
        <button
          id="removebtn"
          className="myBtn 
          adminbutton"
          data-micron="pop"
          onClick={() => handleClick()}
        >
          Remove Book
        </button>
      </div>
    </div>
  );
}

export default RemoveBookContent;
