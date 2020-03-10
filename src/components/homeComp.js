import React from 'react';
import Fade from 'react-reveal/Fade';

import Shape from '../components/homeScene.js';
import WelcomeAnimations from './bounce';
import fawn from '../assets/fawn.gif';

import '../styles/HomeStyle.css';



const Home = () => (
    <div>
    <body  class="complete">
    <Shape></Shape>
</body>

      <Fade top>
      <h5>
    Sarah Dettloff
    </h5>
    </Fade>
    <Fade bottom>
    <h4>
     <WelcomeAnimations/>
     <img src={fawn} height="20%" width="40%" alt="Fawn by Sarah"></img>
     </h4>
     </Fade>
     </div>
  );

  export default Home;