import React from 'react';
import StickyFooter from 'react-sticky-footer';
import './styles/App.css';
import { HashRouter, Route, Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

import Home from './components/homeComp.js';
import About from './components/aboutComp.js';
import Development from './components/developmentComp.js';

import toolbar from './props/toolbar.js';


const App = () => (

  <HashRouter basename="/">
    <div>
      <toolbar component={toolbar}></toolbar>
      <ul class="block-menu" background-color="#581845">
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
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/development" component={Development} />
      <StickyFooter
    bottomThreshold={30}
    normalStyles={{
    backgroundColor: "#B9BABB",
    height: 5,
    float: "center",
    bottom:0,
    width:"100%",
    }}
    stickyStyles={{
    backgroundColor:  "#B9BABB",
    float: "bottom",
    height: 5,
    bottom:0,
    width:"100%",
    }}
>
<SocialIcon url="https://github.com/SarahLizDettloff" class="footer"/>
<SocialIcon url="mailto: sarah.liz.dettloff@gmail.com" class="footer"/>
<SocialIcon url="https://www.linkedin.com/in/sarah-dettloff-86a029103/" class="footer"/>
</StickyFooter>

    </div>
    </HashRouter>
);

export default App;
