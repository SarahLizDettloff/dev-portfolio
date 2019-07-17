import React from 'react';
import { HashRouter, Route, Link} from "react-router-dom";

import Home from '../components/homeComp.js';
import About from '../components/aboutComp.js';
import Development from '../components/developmentComp.js';

import '../styles/NavStyle.css';

const NavBar = props => (
	<HashRouter basename="/">
    <ul class="block-menu" background-color="#581845">
	<Link to="/">
	<li><a href="dev-portfolio/#" class="three-d">
		Home
		<span aria-hidden="true" class="three-d-box">
			<span class="front">Home</span>
			<span class="back">Home</span>
		</span>
	</a></li></Link>
	<Link to="#/about">
  <li><a href="#/about" class="three-d">
  About
		<span aria-hidden="true" class="three-d-box">
			<span class="front">About</span>
			<span class="back">About</span>
		</span>
	</a></li></Link>
	<Link to="#/development">
  <li><a href="#/development" class="three-d">
  Development
		<span aria-hidden="true" class="three-d-box">
			<span class="front">Development</span>
			<span class="back">Development</span>
		</span>
	</a></li></Link>
</ul>
      <Route exact path="/" component={Home} />
      <Route path="#/about" component={About} />
      <Route path="#/development" component={Development} />
</HashRouter>
  );
  
  export default NavBar;