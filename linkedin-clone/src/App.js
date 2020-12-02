import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import ContactInfoPopup from "./components/ContactInfoPopup";
import { Route, BrowserRouter as Router } from "react-router-dom";
import FeedMiddle from "./components/FeedMiddle";

function App() {
  const [currentUserName, setCurrentUserName] = React.useState("");
  const [currentJobTitle, setCurrentJobTitle] = React.useState("");
  const [currentUserID, setCurrentUserID] = React.useState("");
  const [isContactInfoOpen, setIsContactInfoOpen] = React.useState(false);

  const currentUserNameHandler = (user) => {
    const name = user.name + " " + user.surname;
    setCurrentUserName(name);
    setCurrentJobTitle(user.title);
    setCurrentUserID(user._id);
  };

  const contactInfoHandler = () => {
    setIsContactInfoOpen(!isContactInfoOpen);
  };

  return (
    <Router>
      <Route path='/'>
        <NavBar jobtitle={currentJobTitle} name={currentUserName} userID={currentUserID} />
      </Route>
      <Route path='/:id' exact>
        <MainContent currentUserNameHandler={currentUserNameHandler} contactInfoHandler={contactInfoHandler} />
      </Route>
      <Route path='/' exact>
        <MainContent currentUserNameHandler={currentUserNameHandler} contactInfoHandler={contactInfoHandler} />
      </Route>
      {isContactInfoOpen && <ContactInfoPopup contactInfoHandler={contactInfoHandler} />}
      <Route path='/' component={Footer} />
      <Route path='/feed' exact componet={FeedMiddle} />
    </Router>
  );
}

export default App;
