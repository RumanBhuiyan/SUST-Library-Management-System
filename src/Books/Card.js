import React, { useState, useEffect } from "react";
import "./BooksDesign.css";
import gsap from "gsap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Card() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    gsap.from(".card", { marginLeft: -200, opacity: 0, duration: 1 });
  }, []);

  //called every time when startDate changes
  useEffect(() => {
    console.log(startDate);
  }, [startDate]);

  //called every time when endDate changes
  useEffect(() => {
    console.log(endDate);
  }, [endDate]);

  const handleChange = (date, keep) => {
    if (keep === "start") {
      if (date < new Date()) {
        alert("Select Present or Future Date not Past!!! 😏😒😐");
        setStartDate(null);
      } else {
        setStartDate(date);
      }
    } else {
      if (date < new Date()) {
        alert("Select Present or Future Date not Past!!! 😏😒😐");
        setEndDate(null);
      } else if ((date - startDate) / (86400 * 1000) > 7) {
        alert("You are allowed to borrow a book only for 7 days 🧐🤨😎");
        setEndDate(null);
      } else {
        setEndDate(date);
      }
    }
  };

  return (
    <div className="card">
      <img
        className="card-img-top"
        src="https://s.pdfdrive.com/assets/thumbs/699/699e3fbc54d142c5e7c7b087d8d086b7.jpg"
        alt="Card"
        height="300px"
        style={{ borderRadius: "12px" }}
      />
      <div className="card-body">
        <h5 className="card-title">Automate the Boring Stuff With Python</h5>
        <p className="card-text">Status : available</p>
        <p className="card-text">Borrowed By : 2016331076</p>
        <div className="datepicker">
          <DatePicker
            selected={startDate}
            onSelect={(date) => {
              handleChange(date, "start");
            }}
          />
        </div>
        <div className="datepicker">
          <DatePicker
            selected={endDate}
            onSelect={(date) => {
              handleChange(date, "end");
            }}
          />
        </div>
        <button className="cardbtn">Borrow Book</button>
      </div>
    </div>
  );
}

export default Card;

// console.log(new Date().toLocaleDateString());
// console.log(new Date().getDay()); prints: currentday+1
// console.log(new Date().getMonth()); prints : currentmonth-1
// console.log(new Date().getFullYear()); prints : current Year
