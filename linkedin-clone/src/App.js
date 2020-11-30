import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./Components/SideBar";

function App() {
  return <div className="App">
      <Router>
        <SideBar />
      </Router>
  </div>;
}

export default App;
