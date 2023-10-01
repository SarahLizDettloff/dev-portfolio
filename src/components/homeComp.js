import React from "react";
import confetti from 'canvas-confetti';
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { SiMinutemailer, SiLinkedin, SiGithub } from "react-icons/si";
import { FaItchIo } from "react-icons/fa";

import "../styles/Home.css";




function woohoo() {
  confetti();
}

const Home = () => (
  <div class="home">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

    <div class="sarah_wrapper">
      <h1 class="sarah_title">
        <span data-text="Sarah">Sarah</span><br></br>
        <span data-text="Dettloff">Dettloff</span>
      </h1>
    </div>

    <h3>Proactive self-motivated remote software engineer who enjoys solving puzzels,
      <br></br>
      providing simple solutions to complex challenges, and
      <br></br>a good cup of coffee.
    </h3>

    <div class="geo_location_link">
      <a href="http://maps.google.com/maps?q=Gilbert,+AZ">
        <h2 class="square_abstract">
          <h1 class="homeLocation">
            <GoLocation aria-label="location icon" />
            Gilbert, Arizona
          </h1>
        </h2>
        <em></em>
      </a>
    </div>

    <Link to="/development">
      <h3><button class="projects_button" onClick={woohoo}>Checkout my Projects</button></h3>
    </Link>

    <div class="homeContact">
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
    </div>
  </div>
);

export default Home;
