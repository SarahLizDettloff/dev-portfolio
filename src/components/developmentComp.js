import React from 'react';

import '../styles/DevStyle.css';


import CustCarousel from '../props/carousel';
import NavBar from '../props/navbar.js';
import Fade from 'react-reveal/Fade';



const Development = ({ match }) => (
        
    <div>
        <Fade left>
                <NavBar></NavBar>
        </Fade>
        <Fade bottom>
        <h1>
        <CustCarousel></CustCarousel>
        </h1>
        </Fade>
    </div>
  );

  
export default Development;
