import React from "react";
import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import Example from "pages/Example";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/example" component={Example}></Route>
      </Router>
    </div>
  );
}

export default App;
