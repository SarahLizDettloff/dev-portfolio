import React from "react";
import { SiMinutemailer, SiLinkedin, SiGithub } from "react-icons/si";
import { FaItchIo } from "react-icons/fa";
import "../styles/AboutStyle.css";

import me from "../assets/about/me.png";
import face from "../assets/about/my_face.png";

import Bounce from "../props/bounce.js";

const About = () => (
  <div class="aboutContainer">
    <meta name="viewport" content="width=device-width"></meta>
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
    <div class="about">
      <Bounce></Bounce>
      <h3 class="aboutHeader">What's up?</h3>
      <p>
        Software Engineer here working in Digital Promotions at Inmar Intelligence. Development has flourished my constant strive for improvement and creativity. Five years experience working on RESTful APIs, front-end and back-end. This covers everything from automating products to upgrading framework. Functional tests, maintaining documentation and striving for clean code. This encompasses deployments in lower environments and monitoring performance. Sumo logic certified up to Level 3: Sumo Power Admin.
        <br></br>
        <br></br>
        Enterprise experience in Python, Django framework and a hint of JavaScript Vue framework.
        Hobby experience in JavaScript React framework mobile and web, C# Unity scripting, GDScript(Godot) and a hint of .NET. 2 years experience with Android Development in React Native with Expo and Unity<br></br>
        <br></br>
        Future programming goal is to be a senior software engineer. I would
        like to be a part of enterprise software design and stack development
        with a focus on security.<br></br>
        <br></br>
        Thank you for stopping by.
        <br></br>
        <a
          href="mailto:Sarah.Liz.Dettloff@gmail.com"
          aria-label="email me at Sarah.Liz.Dettloff@gmail.com"
        >
          <SiMinutemailer aria-label="email icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/sarah-d-86a029103"
          aria-label="Checkout my linked in."
        >
          <SiLinkedin aria-label="linked in icon" />
        </a>
        <a
          href="https://github.com/SarahLizDettloff"
          aria-label="github is SarahLizDettloff."
        >
          <SiGithub aria-label="github icon" />
        </a>
        <a
          href="https://sarahlizdettloff.itch.io/"
          aria-label="checkout my itch io at sarahlizdettloff.itch.io"
        >
          <FaItchIo aria-label="itch io icon" />
        </a>
        <br></br>
        <br></br>
      </p>
    </div>
  </div>
);

export default About;
