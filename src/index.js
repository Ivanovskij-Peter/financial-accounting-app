import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import "modern-normalize/modern-normalize.css";
import { BrowserRouter } from "react-router-dom";
import store from "./components/redux/store";
import "./sass/main.scss";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
