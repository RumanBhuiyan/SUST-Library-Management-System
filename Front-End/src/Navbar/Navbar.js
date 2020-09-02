import React, { useEffect } from "react";
import "./NavbarDesign.css";
import gsap from "gsap";
import HomePageContent from "../Home/HomePageContent";
import BooksPage from "../Books/BooksPage";
import SignUpPage from "../SignUp/SignUpPage";
import LoginPage from "../Login/LoginPage";
import AdminPage from "../Admin/AdminPage";
import NavComponents from "./NavComponents";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    gsap.from(".mynav", {
      opacity: 0,
      marginLeft: "-200",
      marginTop: "-200",
      duration: 1,
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <NavComponents />
        <Switch>
          <Route path="/books">
            <BooksPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route exact path="/*">
            <HomePageContent />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;

//popular package for free animated navbar
// https://www.npmjs.com/package/react-responsive-animate-navbar
