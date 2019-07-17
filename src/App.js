import React from 'react';
import Drawer from 'react-motion-drawer';
import StickyFooter from 'react-sticky-footer';
import './styles/App.css';
import { HashRouter, Route, Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

import purpleOwl from './assets/purpleOwl.gif';
import fawn from './assets/fawn.gif';
import arrow from './assets/arrow.gif';

import Home from './components/homeComp.js';
import About from './components/aboutComp.js';
import Development from './components/developmentComp.js';

import toolbar from './props/toolbar.js';


const App = () => (

  <HashRouter basename="/">
    <div>
      <toolbar component={toolbar}></toolbar>
    <Drawer open={false} img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Color_icon_gray.png">
    
    { val =>
      <ul class="drawer">
        <p><img src={purpleOwl} width="35%" height="35%" alt="Purple Owl made in GraphicsGale"></img></p>
        <p><img src={arrow} width="10%" height="10%" alt="Arrow made in GraphicsGale"></img> <Link to="/">Home</Link> </p> 
        <p><img src={arrow} width="10%" height="10%" alt="Arrow made in GraphicsGale"></img> <Link to="#/about">About</Link> </p> 
        <p><img src={arrow} width="10%" height="10%" alt="Arrow made in GraphicsGale"></img> <Link to="#/development">Dev</Link> </p> 
        <p><img src={fawn} width="35%" height="35%" align="center" alt="Fawn made in GraphicsGale"></img></p>
      </ul>
    }

  </Drawer>
      <Route exact path="/" component={Home} />
      <Route path="#/about" component={About} />
      <Route path="#/development" component={Development} />
      <StickyFooter
    bottomThreshold={30}
    normalStyles={{
    backgroundColor: "#B9BABB",
    height: 5,
    float: "bottom",
    position:"center",
    bottom:0,
    width:"100%",
    }}
    stickyStyles={{
    backgroundColor:  "#B9BABB",
    float: "bottom",
    height: 5,
    position:"center",
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
