import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./componenets/NavBar";
import Footer from "./componenets/Footer";
import MainContent from "./components/MainContent";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [currentUserName, setCurrentUserName] = React.useState("");
  const [currentJobTitle, setCurrentJobTitle] = React.useState("");
  const [currentUserID, setCurrentUserID] = React.useState("");

  const currentUserNameHandler = (user) => {
    console.log(user);
    const name = user.name + " " + user.surname;

    setCurrentUserName(name);
    setCurrentJobTitle(user.title);
    setCurrentUserID(user._id);
  };

  return (
    <Router>
      <Route path="/">
        <NavBar jobtitle={currentJobTitle} name={currentUserName} userID={currentUserID} />
      </Route>
      <Route path="/:id">
        <MainContent currentUserNameHandler={currentUserNameHandler} />
      </Route>
      <Route path="/" exact>
        <MainContent currentUserNameHandler={currentUserNameHandler} />
      </Route>
      <Route path="/" component={Footer} />
    </Router>
  );
}

export default App;
