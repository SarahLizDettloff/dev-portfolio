import React from 'react';
import Fade from 'react-reveal/Fade';

import Shape from '../components/homeScene.js';
import WelcomeAnimations from './bounce';
import owl from '../assets/purpleOwl.gif';
import fawn from '../assets/fawn.gif';

import '../styles/HomeStyle.css';



const Home = () => (
    <div>
    <Fade top>
    <h4>
     <WelcomeAnimations/>
     </h4>
     </Fade>
    <Fade top>
    </Fade>
    <Fade top>
    <h6>Checkout the interactive waterfall below. 
    <br></br>
        Skybox image is kudos of<a href="https://hdrihaven.com/">HDRI Haven</a></h6>
    <h5>
    <img src={owl} alt="owl" height="5%" width="5%"></img>Sarah Dettloff<img src={fawn} alt="owl" height="5%" width="5%"></img>
    </h5>
  
      </Fade>
      <Fade bottom>
      <Shape></Shape>
      </Fade>
    </div>
  );

  export default Home;