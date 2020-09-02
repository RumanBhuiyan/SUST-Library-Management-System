import React, { useState, useEffect } from "react";
import "./BooksDesign.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import $ from "jquery";

function Card(props) {
  //console.log(props);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [availability, setAvailability] = useState(props.value.available);
  //const [availability, setAvailability] = useState(true);

  //called every time when startDate changes
  // useEffect(() => {
  //   console.log(startDate);
  // }, [startDate]);

  //called every time when endDate changes
  // useEffect(() => {
  //   console.log(endDate);
  // }, [endDate]);

  useEffect(() => {
    $(".card").hover(() => {
      // $(this).attr("data-micron", "bounce");
      //alert("Above me");
    });
  }, []);

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
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card" data-micron="bounce">
        <img
          className="card-img-top"
          src={props.value.imageurl}
          alt="Card"
          height="300px"
          style={{ borderRadius: "12px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.value.name}</h5>
          {availability ? (
            <div>
              <p className="card-text">Status : Available</p>
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
              <button className="cardbtn" data-micron="bounce">
                Borrow Book
              </button>
            </div>
          ) : (
            <p className="card-text">Borrowed By : 2016331076</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;

// console.log(new Date().toLocaleDateString());
// console.log(new Date().getDay()); prints: currentday+1
// console.log(new Date().getMonth()); prints : currentmonth-1
// console.log(new Date().getFullYear()); prints : current Year
