import React from "react";
import ReactDOM from "react-dom";
import { ListProvider } from "./context";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ListProvider>
        <App />
    </ListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);