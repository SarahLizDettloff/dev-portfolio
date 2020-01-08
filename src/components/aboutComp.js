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
 <h3>Bio</h3>
 <div class ="about">
  <p>I am a test software engineer in digital promotions with a background in biotechnology. I worked in retail management full time through college while focusing on completing the associates in biotechnology. I was introduced to coding during my internship at Wake Forest Institute for Regenerative Medicine. Programming captured my attention because of the freedom and creativity you can express through it. I appreciate the open source resources that have enabled my skills to grow and give back as availability allows. </p>
  <p>I have a hunger for constant growth in programming which is fueled by my curiosity. My experience is spread across game, mobile, software and web development. From my appreciation of open source projections, I contribute annually to DigitalOcean’s Hacktoberfest. 
  <br></br>A recap of some of my technical skills:
  <br></br>
-	2 years professional experience in web framework development consisting of REST APIs for the backend, and two years of experience in front end development and design. 
<br></br>
-	3 years experience in Visual Studio using C#, C++, and Visual Basic. 
<br></br>
-	3 years experience in game development working in a wide variety of environments with Game Maker Studio, Godot, CodeBlocks(C++), Unreal Engine, and Unity. 
<br></br>
- 3 years participation in Hacktoberfest hosted by Digital Ocean: 2017, 2018, and 2019
</p>
</div>
  </div>
);

export default About;
