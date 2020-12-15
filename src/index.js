import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar";

import App from "./App";

ReactDOM.render(
   <div>
      <Navbar></Navbar>
      <App />
   </div>,

   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
