import React from 'react';

import '../styles/Home.css';
import WelcomeAnimations from '../components/bounce';




const Home = () => (
  <div>
  
    <h2>Sarah Dettloff
    </h2>
    <h4 class = "homeBody">
     Software applications, web development, mobile apps, and PC games.
    </h4>
    <h4>  <WelcomeAnimations></WelcomeAnimations></h4>
  </div>
  );

  export default Home;