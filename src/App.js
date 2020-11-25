
import React from 'react';
// import '../App.css';
import Wrapper from "./components/Wrapper"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/NavBar"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/ContactInfo"
import Home from "./pages/Home"
function App() {

  return (
    <Router>
      <Nav />
      <Wrapper>
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/ContactInfo" component={Contact} />
          <Nav/>
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
