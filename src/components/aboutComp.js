import React from 'react';

import '../styles/AboutStyle.css';

import me from '../assets/me.png';
import face from '../assets/my_face.png';


const About = () => 
(
  <div>

    <h2>
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
    </h2>
 <h3>Hello.</h3>
 <div class ="about">
  <p>Game development caught my attention and sparked my initial interest in programming. Shortly after graduating with an associates in biotechnology, I started grasping basic object oriented programming concepts. Over the years that has spread into mobile development, software applications, and websites. I am fond of it because I enjoy solving puzzles, it allows room for creativity in handling complex problems in an elegant way, and the many open source resources grow my appreciation for open source projects. One of the many reasons I contribute annually to DigitalOcean's Hacktoberfest. Take a look around, feedback is welcome on this project or any others in my portfolio. Thank you for taking time to check it out.
  </p><p>Technical Skills:
  <br></br>
-	2 years professional experience in web framework development consisting of REST APIs for the backend, and two years of experience in front end development and design. 
<br></br>
-	3 years experience in Visual Studio using C#, C++, and Visual Basic. 
<br></br>
-	3 years experience in game development working in a wide variety of environments with Game Maker Studio, Godot, Unreal Engine, and Unity. 
<br></br>
- 3 years participation in Hacktoberfest hosted by Digital Ocean: 2017, 2018, and 2019
</p>
</div>
  </div>
);

export default About;
