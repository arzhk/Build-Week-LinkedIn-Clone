import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainProfileBlock from "./components/MainProfileBlock";

function App() {
  return <MainProfileBlock />;
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./componenets/NavBar";
import Footer from "./componenets/Footer";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' component={NavBar} />
        <Route path='/' component={Footer} />
      </Router>
    </div>
  );
}

export default App;
