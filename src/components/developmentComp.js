import React from 'react';

import '../styles/DevStyle.css';


import CustCarousel from '../props/carousel';
import NavBar from '../props/navbar.js';
import Fade from 'react-reveal/Fade';



const Development = ({ match }) => (
        
    <div>
        <Fade left>
                <NavBar></NavBar>
                These buttons are a work in progress. If you experience issues, swipe or pull the drawer on the left in the right direction. 
        </Fade>
        <Fade bottom>
        <h1>
        <CustCarousel></CustCarousel>
        </h1>
        </Fade>
    </div>
  );

  
export default Development;
