import React from "react";
import "./styles/App.css";
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "./components/homeComp.js";
import About from "./components/aboutComp.js";
import Development from "./components/developmentComp.js";
import Explore from "./components/explore.js";
import logo from "./assets/images/logo.png";

const App = () => (
  <HashRouter basename="/" role="router">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
    <div>
      <div class="logo">
        <Link to="/">
          <img src={logo} class="logo" alt="logo"></img>
        </Link>
      </div>
      <input type="checkbox" id="navi_toggle" class="checkbox" />
      <label for="navi_toggle" class="button">
        <span class="icon">&nbsp;</span>
      </label>
      <div class="background">&nbsp;</div>
      <nav class="nav">
        <ul class="list">
          <li class="item">
            <div class="link">
              <Link to="/" class="three-d" >
                Home
                <span aria-hidden="true" class="three-d-box">
                  <span class="front">Home</span>
                  <span class="back">Home</span>
                </span>
              </Link>
            </div></li>
          <li class="item"> <div class="link">
            <Link to="/about" class="three-d" >
              About
              <span aria-hidden="true" class="three-d-box">
                <span class="front">About</span>
                <span class="back">About</span>
              </span>
            </Link>
          </div></li>
          <li class="item"> <div class="link">
            <Link to="/development" class="three-d" >
              Development
              <span aria-hidden="true" class="three-d-box">
                <span class="front">Development</span>
                <span class="back">Development</span>
              </span>
            </Link>
          </div></li>
          <li class="item"> <div class="link"> <Link to="/explore" class="three-d" >
            Explore
            <span aria-hidden="true" class="three-d-box">
              <span class="front">Explore</span>
              <span class="back">Explore</span>
            </span>
          </Link>
          </div></li>
        </ul>
      </nav>
      <Route exact path="/" component={Home} aria-label="Home" />
      <Route path="/about" component={About} aria-label="About me" />
      <Route
        path="/development"
        component={Development}
        aria-label="Development gallery"
      />
      <Route
        path="/explore"
        component={Explore}
        aria-label="Take a look around a sky box"
      />
    </div>




  </HashRouter >
);

export default App;
