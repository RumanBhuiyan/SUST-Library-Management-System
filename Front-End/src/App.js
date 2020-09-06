import React, { useState, useEffect } from "react";
import "./css/App.css"; //not imported components of this file will be designed in App.css
import Loader from "./Loader/Loader";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export const MyContext = React.createContext();
const Provider = MyContext.Provider;

function App() {
  const [infoStore, setInfoStore] = useState({
    adminLoggedIn: false,
  });

  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 3000);
  }, []);

  return (
    <div>
      <Provider value={{ infoStore, setInfoStore }}>
        {spinner ? (
          <Loader />
        ) : (
          <div>
            <Navbar />
            <Footer />
          </div>
        )}
      </Provider>
    </div>
  );
}

export default App;
