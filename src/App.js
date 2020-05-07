import React from 'react';
import './styles/App.css';
import { HashRouter, Route, Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

import Home from './components/homeComp.js';
import About from './components/aboutComp.js';
import Development from './components/developmentComp.js';
import Games from './components/games.js';
import Explore from './components/explore.js';


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
          <span class="back">Play</span>
        </span>
      </Link></li>
      <li><Link to="/explore" class="three-d">
        Explore
        <span aria-hidden="true" class="three-d-box">
          <span class="front">Explore</span>
          <span class="back">Explore</span>
        </span>
      </Link></li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/development" component={Development} />
      <Route path="/games" component={Games} />
      <Route path="/explore" component={Explore} />
      </div>
      <div class="footer">

<SocialIcon url="https://github.com/SarahLizDettloff"/>
<SocialIcon url="mailto: sarah.liz.dettloff@gmail.com"/>
<SocialIcon url="https://www.linkedin.com/in/sarah-dettloff-86a029103/"/>
    </div>
    </HashRouter>
);

export default App;
