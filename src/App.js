import React from 'react';
import StickyFooter from 'react-sticky-footer';
import './styles/App.css';
import { HashRouter, Route, Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

import Home from './components/homeComp.js';
import About from './components/aboutComp.js';
import Development from './components/developmentComp.js';
import Games from './components/games.js';


const App = () => (

  <HashRouter basename="/">
    <div>
      <ul class="block-menu">
      <li><Link to="/" class="three-d">
        Home
        <span aria-hidden="true" class="three-d-box">
          <span class="front">Home</span>
          <span class="back">Home</span>
        </span>
      </Link></li>
      <li><Link to="/about" class="three-d">
      About
        <span aria-hidden="true" class="three-d-box">
          <span class="front">About</span>
          <span class="back">About</span>
        </span>
      </Link></li>
      <li><Link to="/development" class="three-d">
      Development
        <span aria-hidden="true" class="three-d-box">
          <span class="front">Development</span>
          <span class="back">Development</span>
        </span>
      </Link></li>
            <li><Link to="/games" class="three-d">
      Play
        <span aria-hidden="true" class="three-d-box">
          <span class="front">Play</span>
          <span class="back">Game</span>
        </span>
      </Link></li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/development" component={Development} />
      <Route path="/games" component={Games} />
      </div>
      <div class="footer">
      <StickyFooter
    bottomThreshold={30}
    normalStyles={{
      position: "fixed",
    float: "middle",
    bottom: 0,
    width:"100%",
    display: "flex",
  "justify-content": "center",
      }}
    stickyStyles={{
      float: "middle",
    bottom: 0,
    width:"100%",
    display: "flex",
  "justify-content": "center",
    }}
>
<SocialIcon url="https://github.com/SarahLizDettloff"/>
<SocialIcon url="mailto: sarah.liz.dettloff@gmail.com"/>
<SocialIcon url="https://www.linkedin.com/in/sarah-dettloff-86a029103/"/>
</StickyFooter>
    </div>
    </HashRouter>
);

export default App;
