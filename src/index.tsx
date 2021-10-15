import { App } from "./App";
import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
