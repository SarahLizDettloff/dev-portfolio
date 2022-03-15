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
        Software Engineer here working in Digital Promotions at Inmar
        Intelligence. Development has flourished my constant strive for
        improvement and creativity. Four years experience working on RESTful
        APIs, front-end and back-end. Unit tests, automating products, upgrading
        frameworks, maintaining documentation, while maintaining high quality
        code. This can consist of deployments, monitoring performance, cloud
        architecture support, and addressing bugs.
        <br></br>
        <br></br>
        Enterprise experience in Python, Django framework and JavaScript, Vue
        framework. Hobby experience in C# and JavaScript. C# Unity scripting,
        GDScript(Godot) and a hint of .NET. JavaScript React framework.
        Technology is always evolving. This encourages me to pickup new
        technologies, challenge my assertions, and educate others. I enjoy
        collaboration to achieve success for clients, end users, and of course,
        the team.<br></br>
        <br></br>
        Future programming goal is to be a senior software engineer. I would
        like to be a part of enterprise software design and stack development
        with a focus on security.<br></br>
        <br></br>
        Thank you for stopping by.
        <br></br>
        If I can be of any assistance, please do not hesitate to contact me.
        <br></br>
        <a
          href="mailto:Sarah.Liz.Dettloff@gmail.com"
          aria-label="email me at Sarah.Liz.Dettloff@gmail.com"
        >
          <SiMinutemailer aria-label="email icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/sarah-dettloff-86a029103"
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
