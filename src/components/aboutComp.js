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
 <h3>  What's up?</h3>
<p>Software Engineer here working in Digital Promotions at Inmar Intelligence. Development has flourished my constant strive for 
  improvement and creativity. Four years experience working on RESTful APIs, front-end and back-end. Unit tests, automating products, 
  upgrading frameworks, maintaining documentation, while maintaining high quality code. This can consist of deployments, monitoring 
  performance, cloud architecture support, and addressing bugs.
<br></br>
<br></br>
Enterprise experience in Python, Django framework and JavaScript, Vue framework. Hobby experience in C# and JavaScript. C# Unity scripting, and a hint of .NET.
JavaScript React framework. Technology is always evolving. This encourages me to pickup new technologies, challenge my assertions,
 and educate others. I enjoy collaboration to achieve success for clients, end users, and of course, the team.<br></br>
<br></br>
Future programming goal is to be a senior software engineer. I would like to be a part of enterprise software design and stack 
development with a focus on security.<br></br>
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
