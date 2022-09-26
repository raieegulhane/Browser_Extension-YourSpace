import React from "react";
import ReactDOM from "react-dom";
import { FocusProvider } from "./context";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <FocusProvider>
      <App />
    </FocusProvider>
  </React.StrictMode>,
  document.getElementById("root")
);