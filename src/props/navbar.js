import React from 'react';

import '../styles/NavStyle.css';

const NavBar = props => (
    <ul class="block-menu" background-color="#581845">
	<li><a href="/" class="three-d">
		Home
		<span aria-hidden="true" class="three-d-box">
			<span class="front">Home</span>
			<span class="back">Home</span>
		</span>
	</a></li>
  <li><a href="#/about" class="three-d">
  About
		<span aria-hidden="true" class="three-d-box">
			<span class="front">About</span>
			<span class="back">About</span>
		</span>
	</a></li>
  <li><a href="#/development" class="three-d">
  Development
		<span aria-hidden="true" class="three-d-box">
			<span class="front">Development</span>
			<span class="back">Development</span>
		</span>
	</a></li>
</ul>
  );
  
  export default NavBar;