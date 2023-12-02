import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "aos/dist/aos.css" 
import ScrollToTop from "./component/scrollTop/ScrollTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ScrollToTop/>
    <App />
  </BrowserRouter>
);
