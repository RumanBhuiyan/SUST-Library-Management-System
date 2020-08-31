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
      <img
        className="rounded-circle mr-2 border-rounded-circle"
        src={BookImage}
        alt="Book"
        width="60px"
      />
      <input
        name="bookname"
        placeholder="Book Name"
        style={{ marginBottom: "10px", marginTop: "20px" }}
        spellCheck={false}
      />
      <br />
      <img
        className="rounded-circle mr-2 border-rounded-circle"
        src={AuthorImage}
        alt="Author"
        width="60px"
      />
      <input
        name="authorname"
        placeholder="Author Name"
        style={{ marginBottom: "10px" }}
        spellCheck={false}
      />
      <br />
      <button id="removebtn" className="myBtn adminbutton">
        Remove Book
      </button>
    </div>
  );
}

export default RemoveBookContent;
