import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Shop from "./component/Shop";

const App = () => {
  return (
    <>
        <Navbar />
      <div className='container'>
        <Shop />
      </div>
    </>
  );
};
export default App;
