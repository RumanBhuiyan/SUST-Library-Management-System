import React, { useEffect } from "react";
import "./BooksDesign.css";
import Books from "./Books";
import Card from "./Card";

function BooksPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="container bookdiv ">
      <div className="row justify-content-center text-center">
        {Books.map((item) => {
          return <Card key={item.id} value={item} />;
        })}
      </div>
    </div>
  );
}

export default BooksPage;
