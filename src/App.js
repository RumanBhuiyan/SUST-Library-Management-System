import React, { useState, useEffect } from "react";
import "./App.css";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 3000);
  }, []);

  return (
    <div>
      {spinner ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
