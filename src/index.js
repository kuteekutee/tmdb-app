import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "bulma/css/bulma.min.css";
import "./index.css";
import App from "./App";
import AutoScrollTop from "./components/AutoScrollTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AutoScrollTop />
    <App />
  </Router>
);
