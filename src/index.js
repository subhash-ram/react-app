import React from "react";
//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";

const element = <h1>Hello World !!</h1>; //This is an example of Javascript XML
console.log(element);

// ReactDOM.render(element, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);