import React, { useEffect } from "react";
import "../css/App.css";
import SustLogo from "../images/sust2.PNG";
import gsap from "gsap";
import HomePageContent from "../Home/HomePageContent";
import BooksPage from "../Books/BooksPage";
import SignUpPage from "../SignUp/SignUpPage";
import LoginPage from "../Login/LoginPage";
import AdminPage from "../Admin/AdminPage";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    let timeLine = gsap.timeline();
    timeLine
      .add(
        gsap.from(".mynav", {
          opacity: 0,
          marginLeft: "-200",
          marginTop: "-200",
          duration: 1,
        })
      )
      .add(
        gsap.from(".lib6", {
          opacity: 0,
          marginLeft: "-200",
          duration: 1,
        })
      );
  }, []);
  return (
    <div>
      <BrowserRouter>
        <nav className="mynav navbar navbar-expand-md navback navbar-dark sticky-top">
          {/* library Brand  */}
          <img className="navbar-brand logo" src={SustLogo} alt="App Logo" />

          {/* Toggler/collapsibe Button  */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links  */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/books">
                  Books
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  SignUp
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">
                  Admin
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

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
          <Route exact path="/">
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
