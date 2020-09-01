import React, { useEffect } from "react";
import "./BooksDesign.css";
import Books from "./Books";
import Card from "./Card";
import SearchIcon from "../images/search2.png";

function BooksPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="container bookdiv ">
      <div className="searchdiv">
        <img
          src={SearchIcon}
          alt="search"
          style={{ width: "60px", marginTop: "1rem", marginRight: "0.5rem" }}
        />
        <input
          className="searchInput"
          placeholder="Search Book"
          name="search"
          spellCheck="false"
        />
      </div>
      <div className="row justify-content-center text-center">
        {Books.map((item) => {
          return <Card key={item.id} value={item} />;
        })}
      </div>
    </div>
  );
}

export default BooksPage;
