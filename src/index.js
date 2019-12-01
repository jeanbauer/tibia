import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { positions, Provider } from "react-alert";

const options = {
  timeout: 5000,
  position: positions.MIDDLE_LEFT
};

const AlertTemplate = ({ style, options, message, close }) => (
  <div className="alert" style={style}>
    {options.type === "info" && "💀"}
    {options.type === "lvlup" && "🎉"}
    {message}
    <button onClick={close}>X</button>
  </div>
);

ReactDOM.render(
  <Provider template={AlertTemplate} {...options}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
