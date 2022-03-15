import React from "react";

import "../styles/Home.css";
import { GoLocation } from "react-icons/go";
import { SiMinutemailer, SiLinkedin, SiGithub } from "react-icons/si";
import { FaItchIo } from "react-icons/fa";

const Home = () => (
  <div class="Homeparent">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=DM+Sans"
    ></link>
    <h1 class="homeLocation">
      {" "}
      <GoLocation aria-label="location icon" /> Winston-Salem, North Carolina
    </h1>
    <h2 class="homeTitle">Hi.</h2>
    <div class="homeIntro">
      I'm Sarah Dettloff. I like to write code and build software.
    </div>
    <div class="homeBody">
      Mobile applications, browser games, and small scale applications.
    </div>
    <div class="homeContact">
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
    </div>
  </div>
);

export default Home;
