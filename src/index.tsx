import DayTimeProvider from "provider/DayTimeProvider";
import TransitionProvider from "provider/TransitionProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./styles/globalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <DayTimeProvider>
      <TransitionProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App />
        </BrowserRouter>
      </TransitionProvider>
    </DayTimeProvider>
  </React.StrictMode>
);
