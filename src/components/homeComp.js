import React from 'react';
import Fade from 'react-reveal/Fade';

import Shape from '../components/homeScene.js';
import NavBar from '../props/navbar.js';
import WelcomeAnimations from './bounce';

import '../styles/HomeStyle.css';



const Home = () => (
    <div>
    <Fade left>
    <NavBar></NavBar>
    </Fade>

<Fade top>
<h4>
     <WelcomeAnimations/>
     </h4>
     </Fade>
    <Fade top>
    </Fade>
    <Fade top>

    <h6>
      Below was created using three.js which is a 3D animation library for JavaScript. Poke it, move it around, and take a look around.
    </h6>
      </Fade>
      <Fade bottom>
      <Shape></Shape>
      </Fade>
    </div>
  );

  export default Home;