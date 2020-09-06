import React, { useEffect } from "react";
import "./AdminDesign.css";
import { Redirect } from "react-router-dom";
import { MyContext } from "../App";
import axios from "axios";

function LogoutContent() {
  const { infoStore, setInfoStore } = React.useContext(MyContext);

  useEffect(() => {
    setInfoStore({
      ...infoStore,
      adminLoggedIn: false,
    });

    axios({
      method: "post",
      url: "http://localhost:4000/webinfo",
      data: {
        adminLoggedIn: false,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Redirect to="/" />
    </div>
  );
}

export default LogoutContent;
