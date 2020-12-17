import React from "react";
import ReactDOM from "react-dom";
import Main from "./Views/mainpage";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
   <div>
      <Main></Main>
   </div>,

   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
