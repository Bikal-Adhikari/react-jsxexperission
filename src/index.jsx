import React from "react";
import ReactDOM from "react-dom";

const fName = "Bikal";
const lName = "Adhikari";

const luckyNum = 6;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>your lucky number is {luckyNum}</p>
  </div>,
  document.getElementById("root")
);
