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
<p>Development allows a place for creativity and problem solving that bring me much joy. The act of planning a product, thinking through the logic, coding it, and polishing satisfies my craving for creating. As a developer the creativity motivates me along with a strive for constant improvement.
<br></br>
<br></br>
I have three years enterprise experience in web framework development consisting of RESTful APIs, front-end, and back-end programming. I am currently employed at Inmar Intelligence as a Test Software Engineer on the Digital Promotions team. Functional tests, product enhancements, new features, addressing bugs, maintaining documentation, and quality assuring the code fills my days there. One of my favorite aspects of it is automation for manual tasks which is completed mainly in Python. I enjoy collaborating with other teams to achieve success for clients and end users. Working through technical challenges to attain the next victory for the company is rewarding and motivates me to write simple solutions for complex problems.
<br></br>
<br></br>
In my leisure time, I enjoy challenging myself in different coding aspects. One of my favorite parts of coding is that your mind is your limit. Game development poses an interesting situation as a developer to compile design, programming, and fulfill the feel of the game that you have imagined. Unity is my primary choice for a game engine since it gives the user enough freedom to execute their vision, but has built in capabilities to do the heavy lifting for you. Android development I find enjoyable because it presents different challenges. I create an app where the user can swipe a plate across the screen and break it which was completed in Unity written in C#. Another mobile application I did was PutCheeseOnIt which uses face detection to place a slice of cheese on the detected face. I wrote it in React Native with Expo which I added Travis CI for build testing. 
<br></br>
<br></br>
Thank you for stopping by.
<br></br>
<br></br>
<br></br>
<br></br>
</p>
</div>
  </div>
);

export default About;
