import React from "react";
import ReactDOM from "react-dom";
import { ListProvider, FocusProvider } from "./context";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ListProvider>
      <FocusProvider>
        <App />
      </FocusProvider>
    </ListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);