import React, { useState, useEffect } from "react";
import "./css/App.css"; //not imported components of this file will be designed in App.css
import Loader from "./Loader/Loader";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import axios from "axios";
import dotenv from "dotenv";
import { Auth0Provider } from "@auth0/auth0-react";

export const MyContext = React.createContext();
const Provider = MyContext.Provider;

export const UserContext = React.createContext();
const UserProvider = UserContext.Provider;

dotenv.config();
function App() {
  const [infoStore, setInfoStore] = useState({
    adminLoggedIn: false,
  });

  const [userStore, setUserStore] = useState({
    userLoggedIn: false,
    username: "",
    userregno: "",
  });

  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 3000);

    axios({
      method: "get",
      url: "http://localhost:4000/webinfo",
    })
      .then((data) => {
        setInfoStore({
          ...infoStore,
          adminLoggedIn: data.data.adminLoggedIn,
        });
      })
      .catch((error) => console.log(error));

    axios({
      method: "get",
      url: "http://localhost:4000/userinfo",
    })
      .then((data) => {
        setUserStore({
          userLoggedIn: data.data.userLoggedIn,
          username: data.data.username,
          userregno: data.data.userregno,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    // below comment tells eslint to ignore useEffect missing dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //To see changes of data assigning use this method,don't check immediately after data assigning
  // useEffect(() => {
  //   console.log(userStore);
  // }, [userStore]);

  return (
    <div>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        redirectUri="http://localhost:3000/admin"
      >
        <Provider value={{ infoStore, setInfoStore }}>
          <UserProvider value={{ userStore, setUserStore }}>
            {spinner ? (
              <Loader />
            ) : (
              <div>
                <Navbar />
                <Footer />
              </div>
            )}
          </UserProvider>
        </Provider>
      </Auth0Provider>
    </div>
  );
}

export default App;
