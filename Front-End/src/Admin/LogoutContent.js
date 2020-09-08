import React, { useEffect } from "react";
import "./AdminDesign.css";
import { Redirect } from "react-router-dom";
import { MyContext } from "../App";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutContent() {
  const { infoStore, setInfoStore } = React.useContext(MyContext);

  const { logout } = useAuth0();

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
    logout({ returnTo: window.location.origin });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Redirect to="/" />
    </div>
  );
}

export default LogoutContent;
