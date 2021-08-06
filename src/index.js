import React from "react";
import ReactDOM from "react-dom";

const me = {
  fname: "Robbie",
  lname: "McGregor",
  luckyNum: 12
};

ReactDOM.render(
  <>
    <h1>Hello {me.fname + " " + me.lname}</h1>
    <p>Your lucky number is {me.luckyNum}</p>
  </>,
  document.getElementById("root")
);
