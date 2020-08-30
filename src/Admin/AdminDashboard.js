import React, { useState } from "react";
import "./AdminDesign.css";
import NewIcon from "../images/new 2.png";
import RemoveIcon from "../images/remove.png";
import UpdateIcon from "../images/update.png";
import MailIcon from "../images/mail.png";
import LogoutIcon from "../images/logout.png";
import { Wave } from "react-animated-text";

import { Redirect } from "react-router-dom";

function AdminDashboard() {
  const [content, setContent] = useState(0);
  let renderedHtml;
  switch (content) {
    case 1:
      renderedHtml = <NewBookContent />;
      break;
    case 2:
      renderedHtml = <RemoveBookContent />;
      break;
    case 3:
      renderedHtml = <UpdateBookContent />;
      break;
    case 4:
      renderedHtml = <SendMailContent />;
      break;
    case 5:
      renderedHtml = <LogoutContent />;
      break;
    default:
      renderedHtml = (
        <div className="admintext">
          <Wave
            text="Successfully Logged in!! Welcome to Dashboard"
            speed={15}
          />
        </div>
      );
  }
  return (
    <div className="overflow-hidden">
      {/* Dashboard Buttons */}
      <div className="row">
        <div className="col-4 bg-dark justify-content-center text-center">
          <div
            className="row d-lg-block taskdiv "
            onClick={() => setContent(1)}
          >
            <img src={NewIcon} alt="NewBook" width={"45px"} />
            New Book
          </div>
          <div
            className="row d-lg-block taskdiv "
            onClick={() => setContent(2)}
          >
            <img src={RemoveIcon} alt="RemoveBook" width={"45px"} />
            Remove Book
          </div>
          <div
            className="row d-lg-block taskdiv "
            onClick={() => {
              setContent(3);
            }}
          >
            <img src={UpdateIcon} alt="UpdateBook" width={"45px"} />
            Update Book
          </div>
          <div
            className="row d-lg-block taskdiv "
            onClick={() => setContent(4)}
          >
            <img src={MailIcon} alt="SendMail" width={"45px"} />
            Send Mail
          </div>
          <div
            className="row d-lg-block taskdiv "
            onClick={() => setContent(5)}
          >
            <img src={LogoutIcon} alt="LogOut" width={"45px"} />
            LogOut
          </div>
        </div>
        <div className=" col-8 bg-dark justify-content-center text-center">
          {/* Content of Buttons */}
          {renderedHtml}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

function NewBookContent() {
  return (
    <div>
      <h1>New Book</h1>
    </div>
  );
}
function RemoveBookContent() {
  return (
    <div>
      <h1>Remove Book</h1>
    </div>
  );
}
function UpdateBookContent() {
  return (
    <div>
      <h1>Update Book</h1>
    </div>
  );
}
function SendMailContent() {
  return (
    <div>
      <h1>Send Mail</h1>
    </div>
  );
}
function LogoutContent() {
  return (
    <div>
      <Redirect to="/" />
    </div>
  );
}
