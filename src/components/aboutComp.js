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
<p>Development allows a place for creativity and problem solving that bring much joy. The act of planning a product, thinking through the logic, coding it, and polishing satisfies my craving for creating. As a developer this carries through with a strive to consistently challenge myself to enhance my abilities.
<br></br>
<br></br>
I have two and a half years enterprise experience in web framework development consisting of RESTful APIs, front-end, and back-end programming. I am currently employed at Inmar Intelligence as a Test Software Engineer on the Digital Promotions team. There I write functional tests, automation, new features. Collaborating with other teams to help further the companies success can consist of developing new products, setting up alerts, and working through technical challenges to attain the next victory.
<br></br>
<br></br>
Open-source software has been a foundation of programming and growth. In order to give back, I have contributed to Hacktoberfest hosted by Digital Ocean for the previous three years. I have the pleasure to have code in the Arctic Code Vault.
<br></br>
<br></br>
In my leisure time, I enjoy challenging myself in different coding aspects. One of my favorite parts of coding is that your mind is your limit. Game development poses an interesting situation as a developer to compile design, story telling, programming, and fulfill the feel of the game that you have imagined. Unity is my primary choice for a game engine since it gives the user enough freedom to execute their vision, but has built in capabilties to do the heavy lifting for you. Unity is a eminent for android development. React Native along with expo are excellent frameworks for mobile dev that streamline fast development with a smooth finish.
<br></br>
<br></br>
Thank you for stopping by.
<br></br>
Feedback is welcome on this project or any others in my portfolio.
<br></br>
<br></br>
<br></br>
<br></br>
</p>
</div>
  </div>
);

export default About;
