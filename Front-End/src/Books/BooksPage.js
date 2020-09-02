import React, { useState, useEffect } from "react";
import "./BooksDesign.css";
import Books from "./Books";
import Card from "./Card";
import SearchIcon from "../images/search2.png";

function BooksPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [loggedIn, setLoggedIn] = useState(true);
  //const [loggedIn, setLoggedIn] = useState(false);

  const [filterText, setFilterText] = useState("");
  const filteredItems = Books.filter((item) =>
    item.name.toLocaleLowerCase().includes(filterText)
  );

  const itemsToDisplay = filterText ? filteredItems : Books;

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
          value={filterText}
          spellCheck="false"
          onChange={(e) => setFilterText(e.target.value.toLocaleLowerCase())}
        />
        {loggedIn ? <p className="username">Ruman</p> : <p></p>}
      </div>
      <div className="row justify-content-center text-center">
        {itemsToDisplay.map((item) => {
          return <Card key={item.id} value={item} />;
        })}
      </div>
    </div>
  );
}

export default BooksPage;
