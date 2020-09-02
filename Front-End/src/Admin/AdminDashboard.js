import React, { useState } from "react";
import "./AdminDesign.css";
import NewIcon from "../images/new 2.png";
import RemoveIcon from "../images/remove.png";
import UpdateIcon from "../images/update.png";
import MailIcon from "../images/mail.png";
import LogoutIcon from "../images/logout.png";
import NewBookContent from "./NewBookContent";
import RemoveBookContent from "./RemoveBookContent";
import UpdateBookContent from "./UpdateBookContent";
import SendMailContent from "./SendMailContent";
import LogoutContent from "./LogoutContent";
import { Wave } from "react-animated-text";

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
      <div className="row">
        <div className="col-4 bg-dark justify-content-center text-center">
          <div
            className="row d-lg-block taskdiv "
            onClick={() => setContent(1)}
            data-micron="flicker"
          >
            <img src={NewIcon} alt="NewBook" width={"45px"} />
            New Book
          </div>
          <div
            className="row d-lg-block taskdiv "
            onClick={() => setContent(2)}
            data-micron="flicker"
          >
            <img src={RemoveIcon} alt="RemoveBook" width={"45px"} />
            Remove Book
          </div>
          <div
            className="row d-lg-block taskdiv "
            onClick={() => {
              setContent(3);
            }}
            data-micron="flicker"
          >
            <img src={UpdateIcon} alt="UpdateBook" width={"45px"} />
            Update Book
          </div>
          <div
            className="row d-lg-block taskdiv "
            onClick={() => setContent(4)}
            data-micron="flicker"
          >
            <img src={MailIcon} alt="SendMail" width={"45px"} />
            Send Mail
          </div>
          <div
            className="row d-lg-block taskdiv "
            onClick={() => setContent(5)}
            data-micron="flicker"
          >
            <img src={LogoutIcon} alt="LogOut" width={"45px"} />
            LogOut
          </div>
        </div>
        <div className=" col-8 bg-dark justify-content-center text-center">
          {renderedHtml}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
