import React, { useEffect } from "react";
import "./BooksDesign.css";
import Books from "./Books";
import Card from "./Card";

function BooksPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="container-fluid bookdiv">
      <div className="row justify-content-center text-center">
        <Card />
      </div>
    </div>
  );
}

export default BooksPage;

// {
//   Books.map((item) => {
//     return <li key={item.id}>{item.name}</li>;
//   });
// }
