import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LocaleContextProvider from "./contexts/localeContext";
import GlobalStyle from "./styles/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LocaleContextProvider>
    <GlobalStyle />
    <App />
  </LocaleContextProvider>
);
