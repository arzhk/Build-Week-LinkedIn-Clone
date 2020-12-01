import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainProfileBlock from "./components/MainProfileBlock";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path='/' component={NavBar} />
      <Route path='/' component={MainProfileBlock} />
      <Route path='/' component={Main} />
      <Route path='/' component={Footer} />
    </Router>
  );
}

export default App;
