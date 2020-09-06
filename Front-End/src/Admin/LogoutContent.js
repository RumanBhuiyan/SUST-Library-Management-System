import React, { useEffect } from "react";
import "./AdminDesign.css";
import { Redirect } from "react-router-dom";
import { MyContext } from "../App";

function LogoutContent() {
  const { infoStore, setInfoStore } = React.useContext(MyContext);

  useEffect(() => {
    setInfoStore({
      ...infoStore,
      adminLoggedIn: false,
    });
  }, []);

  return (
    <div>
      <Redirect to="/" />
    </div>
  );
}

export default LogoutContent;
