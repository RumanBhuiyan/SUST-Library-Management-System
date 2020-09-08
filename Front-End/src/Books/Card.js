import React, { useState } from "react";
import "./BooksDesign.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { UserContext } from "../App";
import { useHistory } from "react-router-dom";

function Card(props) {
  const history = useHistory();

  const { userStore } = React.useContext(UserContext);

  const [startDate, setStartDate] = useState(props.value.startdate);
  const [endDate, setEndDate] = useState(props.value.enddate);
  //const [availability, setAvailability] = useState(props.value.bookstatus);

  //called every time when startDate changes
  // useEffect(() => {
  //   console.log(startDate);
  // }, [startDate]);

  //called every time when endDate changes
  // useEffect(() => {
  //   console.log(endDate);
  // }, [endDate]);

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

  const handleClick = () => {
    if (!userStore.userLoggedIn) {
      alert("Please Login First");
      history.push("/login");
    } else {
      axios({
        method: "put",
        url: "http://localhost:4000/data/updatebook",
        data: {
          bookname: props.value.bookname,
          borrowedBy: userStore.userregno.length
            ? userStore.userregno
            : userStore.username,
          startdate: startDate,
          enddate: endDate,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
      window.location.reload();
    }
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card">
        <img
          className="card-img-top"
          src={props.value.bookimageurl}
          alt="Card"
          height="300px"
          style={{ borderRadius: "12px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.value.bookname}</h5>
          {props.value.bookstatus === "Available" ? (
            <div>
              <p className="card-text">Status : {props.value.bookstatus}</p>
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
              <button
                className="cardbtn"
                data-micron="bounce"
                onClick={() => handleClick()}
              >
                Borrow Book
              </button>
            </div>
          ) : (
            <p className="card-text">Borrowed By : {props.value.borrowedBy}</p>
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
