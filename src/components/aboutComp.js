import React from 'react';

import '../styles/AboutStyle.css';

import me from '../assets/me.png';
import face from '../assets/my_face.png';


const About = () => 
(
  <div class="aboutContainer">
 <h1>
 <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={me} alt="walk_away"></img>
          </div>
          <div class="flip-card-back">
            <img src={face} alt="my_face"></img>
          </div>  
        </div>
      </div>
</h1>
 <div class ="about">
 <h3> Hello.</h3>
  <p>Development allows a place for creativity and problem solving which provides enjoyment in producing game, mobile, web, and software applications. I have two years enterprise experience in web framework development consisting of REST APIs, front end and back end. In my lesure time, I have three years experience in Visual Studio using C#, C++, and Visual Basic and three years in game development working in a wide variety of environments with Game Maker Studio, Godot, and Unity. In the previous three years,  I have also contributed to Hacktoberfest hosted by Digital Ocean (2017, 2018, 2019).
</p>
<br></br>
<p>Take a look around, feedback is welcome on this project or any others in my portfolio.</p>
</div>
  </div>
);

export default About;
