import React from "react";
import myLoader from "../images/Ball-loader.png";
import "./Loader.css";

function Loaders() {
  return (
    <div className="loaderdiv">
      <img className="loader" src={myLoader} alt="Loader" />
    </div>
  );
}

export default Loaders;

//some popular loaders :
// 1.https://loading.io/spinner/
// 2.https://www.npmjs.com/package/styled-loaders-react
// 3.https://www.npmjs.com/package/react-loader-spinner
