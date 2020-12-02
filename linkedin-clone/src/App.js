import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import ContactInfoPopup from "./components/ContactInfoPopup";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import MainFeedContent from "./components/MainFeedContent";

function App() {
  const [currentUserName, setCurrentUserName] = React.useState("Aaron Rizhik");
  const [currentJobTitle, setCurrentJobTitle] = React.useState("React Developer");
  const [currentUserID, setCurrentUserID] = React.useState("5fc4c48fed266800170ea3d8");
  const [isContactInfoOpen, setIsContactInfoOpen] = React.useState(false);

  const contactInfoHandler = () => {
    setIsContactInfoOpen(!isContactInfoOpen);
  };

  return (
    <Router>
      <Redirect to="/feed" />
      <Route path="/">
        <NavBar jobtitle={currentJobTitle} name={currentUserName} userID={currentUserID} />
      </Route>
      <Route path="/feed" exact>
        <MainFeedContent jobTitle={currentJobTitle} name={currentUserName} userID={currentUserID} />
      </Route>
      <Route path="/profile/:id" exact>
        <MainContent contactInfoHandler={contactInfoHandler} />
      </Route>
      {isContactInfoOpen && <ContactInfoPopup contactInfoHandler={contactInfoHandler} />}
      <Route path="/" component={Footer} />
    </Router>
  );
}

export default App;
