import React, { useEffect } from "react";
import "./AdminDesign.css";
import BookImage from "../images/book.png";
import AuthorImage from "../images/writer.png";
import ImageUrl from "../images/url.png";
import gsap from "gsap";

function NewBookContent() {
  useEffect(() => {
    gsap.from(".newbookdiv", { marginTop: -200, opacity: 0, duration: 1 });
  }, []);
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
          name="bookname"
          placeholder="Book Name"
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
          spellCheck={false}
          style={{ width: "90%", overflow: "hidden" }}
        />
      </div>
      <div className="row justify-content-center text-center">
        <img
          className="rounded-circle mr-2 border-rounded-circle"
          src={ImageUrl}
          alt="URL"
          width="60px"
        />
      </div>
      <div className="row justify-content-center text-center">
        <input
          name="imageurl"
          placeholder="Book Image URL"
          spellCheck={false}
          style={{ width: "90%", overflow: "hidden" }}
        />
      </div>
      <div className="row justify-content-center text-center">
        <button id="addbtn" className="myBtn adminbutton">
          Add Book
        </button>
      </div>
    </div>
  );
}

export default NewBookContent;

//short notes of realizing at the time of doing this project
// responsive button : width: auto; height : auto
// dont use px rather use rem that doesn't affect sizes
// instead of margin-left : 5px write margin-left : 5rem
//N.B: em affects other sizes but rem doesn't
