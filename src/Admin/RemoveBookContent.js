import React, { useEffect } from "react";
import "./AdminDesign.css";
import BookImage from "../images/book.png";
import AuthorImage from "../images/writer.png";
import gsap from "gsap";

function RemoveBookContent() {
  useEffect(() => {
    gsap.from(".newbookdiv", { marginTop: -200, opacity: 0, duration: 1 });
  }, []);
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
          style={{ marginBottom: "10px", marginTop: "20px" }}
          spellCheck={false}
          style={{ width: "90%", overflow: "hidden" }}
        />
      </div>
      <div className="row justify-content-center text-center">
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
          style={{ marginBottom: "10px" }}
          spellCheck={false}
          style={{ width: "90%", overflow: "hidden" }}
        />
      </div>
      <div className="row justify-content-center text-center">
        <button id="removebtn" className="myBtn adminbutton">
          Remove Book
        </button>
      </div>
    </div>
  );
}

export default RemoveBookContent;
