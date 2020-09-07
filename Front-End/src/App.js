import React, { useState, useEffect } from "react";
import "./css/App.css"; //not imported components of this file will be designed in App.css
import Loader from "./Loader/Loader";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import axios from "axios";

export const MyContext = React.createContext();
const Provider = MyContext.Provider;

export const UserContext = React.createContext();
const UserProvider = UserContext.Provider;

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
  }, []);

  //To see changes of data assigning use this method,don't check immediately after data assigning
  // useEffect(() => {
  //   console.log(userStore);
  // }, [userStore]);

  return (
    <div>
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
    </div>
  );
}

export default App;
