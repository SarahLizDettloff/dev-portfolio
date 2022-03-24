import React from "react";
import "./styles/App.css";
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "./components/homeComp.js";
import About from "./components/aboutComp.js";
import Development from "./components/developmentComp.js";
import Explore from "./components/explore.js";

const App = () => (
  <HashRouter basename="/" role="router">
    <meta name="viewport" content="width=device-width"></meta>
    <div class="parentNav">
      <ul class="block-menu">
        <li>
          <Link to="/about" class="three-d">
            About
            <span aria-hidden="true" class="three-d-box">
              <span class="front">About</span>
              <span class="back">About</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/explore" class="three-d">
            Explore
            <span aria-hidden="true" class="three-d-box">
              <span class="front">Explore</span>
              <span class="back">Explore</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/development" class="three-d">
            Development
            <span aria-hidden="true" class="three-d-box">
              <span class="front">Development</span>
              <span class="back">Development</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/" class="three-d">
            Home
            <span aria-hidden="true" class="three-d-box">
              <span class="front">Home</span>
              <span class="back">Home</span>
            </span>
          </Link>
        </li>
      </ul>
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
  </HashRouter>
);

export default App;
