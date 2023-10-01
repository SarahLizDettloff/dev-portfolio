import React from "react";
import confetti from 'canvas-confetti';
import { SiMinutemailer, SiLinkedin, SiGithub } from "react-icons/si";
import { FaItchIo } from "react-icons/fa";

import "../styles/AboutStyle.css";

import back from "../assets/about/back.jpg";
import front from "../assets/about/front.jpg";
import Bounce from "../props/bounce.js";


function confetti_bang() {
  confetti();
}

const About = () => (
  <div class="aboutContainer">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <div class="left_column">
      <h1>
        <div class="flip_card">
          <div class="flip_card_inner">
            <div class="flip_card_front">
              <img src={front} alt="Sarah's Face"></img>
            </div>
            <div class="flip_card_back">
              <img src={back} alt="Sarah's Cat"></img>
            </div>
          </div>
        </div>
        <div class="bounce_keep_pixel">
          <Bounce></Bounce>
        </div>
      </h1>
    </div>

    <div class="right_column">
      <div class="about">
        <h3 class="fixed">
          <div id="flip">
            <div><div>Hello</div></div>
            <div><div>Hi</div></div>
            <div><div>Hola</div></div>
          </div>
        </h3>
        <p>
          Software Engineer here working in Digital Promotions at Inmar Intelligence.
          Development has flourished my constant strive for improvement and creativity.
          Six years experience working on RESTful APIs, front-end design and back-end
          processes. With each API, I write functional tests to maintain the stability
          of the behavior of the API. When I create automated processes I focus on self
          sufficiency of the job. I design UIs with the end users experience in mind. I
          keep security in the front of my mind by maintaining frameworks and libraries
          upgrades. I enjoy organizing which comes in handy when cleaning up legacy code.
          I take initiative to write clear documentation. My degree in biotechnology
          has made me  precise when writing guides. I deploy servers in lower environments
          and watch production deployments. This includes setting up alerts and monitoring behavior
          to be the first to know when life happens.
        </p>
        <p>
          Enterprise experience in Python and JavaScript. Django, Vue, and ReactJs framework.
          Databases include MySQL, postgres, SQLite, and MongoDB. One of my favorite aspects
          of technology is that the field is changing and growing. In my free time, I am fond
          of coding with Godot. I do a few game jams a year. I appreciate the speed of them
          and breaking out of perfection tendencies. I've used Unity with C# for Windows and
          Android app development. I've also played with React Native and Expo for Android app
          development. My first computer course was in Visual Basic which was a great introduction
          to .NET. Technology enriches life and using it to make life easier and more pleasurable has drawn me into it.
        </p>
        <p>
          My career goal is to advance my skillset by taking on more complex challenges.
          The end goal in mind is to achieve a senior software engineer position. I have a
          consistent strive for improvement and expanding my knowledge base. Like a SQL query
          that needs to be enhanced to use as little resources as possible. My technical
          strength is in back-end development. I relish a good challenge and thrive in variety.
          I am interested in growing my knowledge in cyber security and development operations.
        </p>
        <p>
          <button class='button_confetti' onClick={confetti_bang}>
            <span>
              Let's create something great together.
            </span>
          </button>
        </p>
        <p>
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
        </p>
      </div>
    </div>
  </div >
);

export default About;
