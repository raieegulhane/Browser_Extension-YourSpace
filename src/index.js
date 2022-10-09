import React from "react";
import ReactDOM from "react-dom";
import { SettingProvider, ListProvider } from "./context";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <SettingProvider>
      <ListProvider>
          <App />
      </ListProvider>
    </SettingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);