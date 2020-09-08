import React, { useState, useEffect } from "react";
import "./BooksDesign.css";
import Books from "./Books";
import Card from "./Card";
import SearchIcon from "../images/search2.png";
import { UserContext } from "../App";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function BooksPage() {
  const { logout } = useAuth0();

  const history = useHistory();

  const { userStore } = React.useContext(UserContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    axios({
      method: "get",
      url: "http://localhost:4000/userinfo/regno",
      params: {
        username: userStore.username,
      },
    })
      .then((data) => {
        //console.log(data.data.regno);
        axios({
          method: "post",
          url: "http://localhost:4000/userinfo",
          data: {
            userregno: data.data.regno,
          },
        })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // useEffect(() => {
  //   window.location.reload();
  // }, [userStore]);

  const [filterText, setFilterText] = useState("");
  const filteredItems = Books.filter((item) =>
    item.bookname.toLocaleLowerCase().includes(filterText)
  );

  const itemsToDisplay = filterText ? filteredItems : Books;

  const handleClick = () => {
    axios({
      method: "post",
      url: "http://localhost:4000/userinfo",
      data: {
        userLoggedIn: false,
        username: "",
        userregno: "",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    history.push("/home");
    window.location.reload();
  };

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
        {userStore.userLoggedIn ? (
          <>
            <p className="username">{userStore.username}</p>
            <button
              data-micron="bounce"
              id="logoutbtn"
              onClick={() => {
                handleClick();
                logout({ returnTo: window.location.origin });
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <p></p>
        )}
      </div>
      <div className="row justify-content-center text-center">
        {itemsToDisplay.map((item) => {
          return <Card key={item._id} value={item} />;
        })}
      </div>
    </div>
  );
}

export default BooksPage;
