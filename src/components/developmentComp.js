import React from "react";
import Gallery from "react-grid-gallery";
import { SiGithub } from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import { FaItchIo } from "react-icons/fa";

import "../styles/DevStyle.css";

import acnhGenerator from "../assets/development/acnhPhraseGeneratorResized.png";
import basicCal from "../assets/development/basiccalculator.png";
import batsInTheSky from "../assets/development/BatsIntheSkyPreview.gif";
import cheese from "../assets/development/cheeseResized.gif";
import fabledRealms from "../assets/development/FR.png";
import linegraph from "../assets/development/linegraphIncome.png";
import lyric_analysis from "../assets/development/lyric_analysis.png";
import marble from "../assets/development/MarblingPreview.gif";
import molar from "../assets/development/molar.png";
import physicsApp from "../assets/development/physicsApp.png";
import quantum from "../assets/development/quantumsimulator.png";
import sinewave from "../assets/development/sinewave.png";
import stock from "../assets/development/stock.png";
import plate from "../assets/development/plate.gif";


const IMAGES = [
  {
    id: fabledRealms,
    src: fabledRealms,
    thumbnail: fabledRealms,
    thumbnailWidth: 325,
    thumbnailHeight: 250,
    alt: "Fabled Realms",
    customOverlay: (
      <div className="overlay_caption">
        <div>Godot, GDScript</div>
      </div>
    ),
    caption: (
      <div class="popup">
        <h1 className="title">
          <a class="title_underline" href="https://github.com/SarahLizDettloff/FabledRealms">Fabeled Realms</a></h1>
        <h2 className="legend">In this fast-paced, action-packed side-scrolling game, you play as a brave hero who must fight off waves of slimy blobs. You play as a character who wakes up with no memories of who they are or where they come from. You must navigate through a mysterious and dangerous world, encountering various items that may hold clues to your past. </h2>
        <h4 className="references">
          <a href="https://github.com/SarahLizDettloff/FabledRealms">
            <SiGithub></SiGithub>
          </a>
          <a href="https://sarahlizdettloff.itch.io/fabled-realms">
            <FaItchIo></FaItchIo>
          </a>
        </h4>
      </div>
    ),
  },
  {
    id: batsInTheSky,
    src: batsInTheSky,
    thumbnail: batsInTheSky,
    thumbnailWidth: 1400,
    thumbnailHeight: 1800,
    alt: "Bats in the sky",
    customOverlay: (
      <div className="overlay_caption">
        <div>Godot, <br></br> GDScript, Windows</div>
      </div>
    ),
    caption: (
      <div class="popup">
        <p className="title"><a class="title_underline" href="https://github.com/SarahLizDettloff/BatsInTheSky">Bats In The Sky</a></p>
        <p className="legend">Play as an owl and dodge the bats in the sky.</p>
        <h4 className="references">
          <a href="https://github.com/SarahLizDettloff/BatsInTheSky">
            <SiGithub></SiGithub>
          </a>
          <a href="https://sarahlizdettloff.itch.io/bats-in-the-sky">
            <FaItchIo></FaItchIo>
          </a>
        </h4>
      </div>
    ),
  },
  {
    id: marble,
    src: marble,
    thumbnail: marble,
    thumbnailWidth: 500,
    thumbnailHeight: 250,
    alt: "Marbling Out of This World",
    customOverlay: (
      <div className="overlay_caption">
        <div>Unity, C#, Windows</div>
      </div>
    ),
    caption: (
      <div class="popup">
        <p className="title"><a class="title_underline" href="https://github.com/SarahLizDettloff/MarblingOutofThisWorld">Marble Single Level</a></p>
        <p className="legend">
          Collect all 101 cubes on the moon. Enjoy the scenery displaying NASA
          3D Resources. Emerse yourself in the haunting sounds of Saturan Radio
          Emossions and Sun Sonfication provided by NASA. Collection sound and
          success sound provided kudos of freesoundslibrary.
        </p>
        <h4 className="references">
          <a href="https://github.com/SarahLizDettloff/MarblingOutofThisWorld">
            <SiGithub></SiGithub>
          </a>
          <a href="https://sarahlizdettloff.itch.io/marbling-out-of-this-world">
            <FaItchIo></FaItchIo>
          </a>
        </h4>
      </div>
    ),
  },
  {
    id: plate,
    src: plate,
    thumbnail: plate,
    thumbnailWidth: 500,
    thumbnailHeight: 250,
    alt: "Plate Break",
    customOverlay: (
      <div className="overlay_caption">
        <div>Mobile, Android, Unity</div>
      </div>
    ),
    caption: (
      <div class="popup">
        <p className="title"><a class="title_underline" href="https://github.com/SarahLizDettloff/PlateBreak">Plate Break</a></p>
        <p className="legend">
          Shake your phone to drop the plate or use your finger to throw the
          plate across the screen. Built with Unity 2019.1.7f1 for Android in
          C#.
        </p>
        <h4 className="references">
          <a href="https://github.com/SarahLizDettloff/PlateBreak">
            <SiGithub></SiGithub>
          </a>
          <a href="https://github.com/SarahLizDettloff/PlateBreak/raw/master/PlateBreak.aab">
            <FiDownload></FiDownload>
          </a>
        </h4>
      </div>
    ),
  },
  {
    alt: "I'd put some cheese on that",
    orientation: 1,
    id: cheese,
    src: cheese,
    thumbnail: cheese,
    thumbnailWidth: 1400,
    thumbnailHeight: 1800,
    customOverlay: (
      <div className="overlay_caption">
        <div>Mobile, React, JavaScript</div>
      </div>
    ),
    caption: (
      <div class="popup">
        <p className="title"><a class="title_underline" href="https://github.com/SarahLizDettloff/PutCheeseOnIt">Put Some Cheese On It</a></p>
        <p className="legend">
          Android camera app that detects a face to place cheese upon. Features
          nine different cheeses.
        </p>
        <h4 className="references">
          <a href="https://github.com/SarahLizDettloff/PutCheeseOnIt">
            <SiGithub></SiGithub>
          </a>
          <a href="https://raw.githubusercontent.com/SarahLizDettloff/PutCheeseOnIt/blob/main/PutCheeseOnIt.apk">
            <FiDownload></FiDownload>
          </a>
        </h4>
      </div>
    ),
  },
  {
    alt: "Animal Crossing New Horizon Greeting and Phrase Generator",
    id: acnhGenerator,
    src: acnhGenerator,
    thumbnail: acnhGenerator,
    thumbnailWidth: 400,
    thumbnailHeight: 250,
    customOverlay: (
      <div className="overlay_caption">
        <div>JavaScript, React</div>
      </div>
    ),
    caption: (
      <div class="popup">
        <p className="title"><a class="title_underline" href="https://sarahlizdettloff.github.io/acnh-phrase-generator">Animal Crossing Greeting
          <br></br>and <br></br> Phrase Generator</a></p>
        <p className="legend">
          Built with React JS, automated testing with Travis.<br></br>
          <a href="https://sarahlizdettloff.github.io/acnh-phrase-generator/#/">
            Try out this Animal Crossing New Horizons greeting and phrase
            generator.
          </a>
        </p>
        <h4 className="references">
          <a href="https://github.com/SarahLizDettloff/acnh-phrase-generator">
            <SiGithub></SiGithub>
          </a>
          <a href="https://sarahlizdettloff.github.io/acnh-phrase-generator">
            <FiDownload></FiDownload>
          </a>
        </h4>
      </div>
    ),
  },
  {
    alt: "Lyrical Analysis",
    id: lyric_analysis,
    src: lyric_analysis,
    thumbnail: lyric_analysis,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    customOverlay: (
      <div className="overlay_caption">
        <div>Python, JupyterLab, Analytics</div>
      </div>
    ),
    caption: (
      <div class="popup">
        <p className="title"><a class="title_underline" href="https://github.com/SarahLizDettloff/BandLyricsAnalysis">Lyrical Analysis</a></p>
        <p className="legend">
          Written in Python 2, this JupyterLab reads lyrics from text files and
          generates visual analysis of the lyrics. Three available analysis: Top
          20 words, word cloud with tiny text, word cloud with large text.
        </p>
        <h4 className="references">
          <a href="https://github.com/SarahLizDettloff/BandLyricsAnalysis">
            <SiGithub></SiGithub>
          </a>
          <a href="https://github.com/SarahLizDettloff/BandLyricsAnalysis/blob/master/LyricAnalysis.ipynb">
            <FiDownload></FiDownload>
          </a>
        </h4>
      </div>
    ),
  },
  {
    alt: "Physics Equation Windows Application",
    id: physicsApp,
    src: physicsApp,
    thumbnail: physicsApp,
    thumbnailWidth: 300,
    thumbnailHeight: 310,
    customOverlay: (
      <div className="overlay_caption">
        <div>Windows App, C#</div>
      </div>
    ),
    caption: (
      <div class="popup">
        <p className="title"><a class="title_underline" href="https://github.com/SarahLizDettloff/Mathematics/tree/master/physicsAp">Physics Equation <br></br>Windows Application</a></p>
        <p className="legend">
          Solves a variety of equations such as: Volume of a Frustum, Planck's
          Constant, Buoyancy Force Calculator(helps calculate volume of object
          if needed) , The Big Four(Kinematic equations), Binet's Fibonacci
          Number
        </p>
        <h4 className="references">
          <a href="https://github.com/SarahLizDettloff/Mathematics/tree/master/physicsApp">
            <SiGithub></SiGithub>
          </a>
          <a href="https://github.com/SarahLizDettloff/Mathematics/blob/master/physicsApp/Mathematics.exe">
            <FiDownload></FiDownload>
          </a>
        </h4>
      </div>
    ),
  },
  {
    alt: "Calculator for mass to molar soluation",
    id: molar,
    src: molar,
    thumbnail: molar,
    thumbnailWidth: 200,
    thumbnailHeight: 174,
    customOverlay: (
      <div className="overlay_caption">
        <div>Windows App, C#</div>
      </div>
    ),
    caption: (
      <div class="popup">
        <p className="title"><a class="title_underline" href="https://github.com/SarahLizDettloff/MassforMolarSolution">Mass for Molar Solution</a></p>
        <p className="legend">
          This Visual Basic .NET calculator allows you to discover the mass
          molarity of a compound which requires a concentration and volume.
          Scientists practice this equation in order to make solutions.
        </p>
        <h4 className="references">
          <a href="https://github.com/SarahLizDettloff/MassforMolarSolution">
            <SiGithub></SiGithub>
          </a>
          <a href="https://github.com/SarahLizDettloff/MassforMolarSolution/blob/master/Mass_for_Molar_Solution.exe">
            <FiDownload></FiDownload>
          </a>
        </h4>
      </div>
    ),
  },
  {
    alt: "Basic Calculator",
    id: basicCal,
    src: basicCal,
    thumbnail: basicCal,
    thumbnailWidth: 300,
    thumbnailHeight: 320,
    customOverlay: (
      <div className="overlay_caption">
        <div>Windows App, C#</div>
      </div>
    ),
    caption: (
      <div class="popup">
        <p className="title"><a class="title_underline" href="https://github.com/SarahLizDettloff/BasicCalculator">Calculator</a></p>
        <p className="legend">
          Retro calculator written in Visual Basic .NET with images created in
          Graphics Gale. Compatible with Windows.
        </p>
        <h4 className="references">
          <a href="https://github.com/SarahLizDettloff/BasicCalculator">
            <SiGithub></SiGithub>
          </a>
          <a href="https://github.com/SarahLizDettloff/BasicCalculator/blob/master/Calculator.exe">
            <FiDownload></FiDownload>
          </a>
        </h4>
      </div>
    ),
  },
  {
    alt: "Quantum Algorithms",
    id: quantum,
    src: quantum,
    thumbnail: quantum,
    thumbnailWidth: 320,
    thumbnailHeight: 300,
    customOverlay: (
      <div className="overlay_caption">
        <div>Windows App, Q#</div>
      </div>
    ),
    caption: (
      <div class="popup">
        <p className="title"><a class="title_underline" href="https://github.com/SarahLizDettloff/QuantumAlgorithms">Quantum Algorithms</a></p>
        <p className="legend">
          The quantum simulator supplied by Microsoft's Quantum Development Kit
          allows demonstrations of quantum algorithms. Written in Q#, this
          project contains an exhibit of entanglement. During each run of this
          program it informs the user of the estimated resources needed to run
          it on a quantum computer. Concepts covered are: Pauli-Z Gate, and Bell
          States.
        </p>
        <h4 className="references">
          <a href="https://github.com/SarahLizDettloff/QuantumAlgorithms">
            <SiGithub></SiGithub>
          </a>
        </h4>
      </div>
    ),
  },
  {
    alt: "Jupyter Lab Notebook to graph data",
    id: linegraph,
    src: linegraph,
    thumbnail: linegraph,
    thumbnailWidth: 500,
    thumbnailHeight: 250,
    customOverlay: (
      <div className="overlay_caption">
        <div>Python, JupyterLab, Analytics</div>
      </div>
    ),
    caption: (
      <div class="popup">
        <p className="title"><a class="title_underline" href="https://github.com/SarahLizDettloff/Mathematics">Graphing Data</a></p>
        <p className="legend">
          This jupyer lab notebook compares two sets of family incomes from
          separate years and compares them visually on a line graph. The data is
          obtained from the US Data Gov. Written in Python using NumPy and
          MatPlotLib.
        </p>
        <h4 className="references">
          <a href="https://github.com/SarahLizDettloff/Mathematics">
            <SiGithub></SiGithub>
          </a>
          <a href="https://github.com/SarahLizDettloff/Mathematics/blob/master/Line_graph_comparison_example.ipynb">
            <FiDownload></FiDownload>
          </a>
        </h4>
      </div>
    ),
  },
  {
    alt: "Stock Dividend Distributable Calulator",
    id: stock,
    src: stock,
    thumbnail: stock,
    thumbnailWidth: 320,
    thumbnailHeight: 300,
    customOverlay: (
      <div className="overlay_caption">
        <div>Windows App, C#</div>
      </div>
    ),
    caption: (
      <div class="popup">
        <p className="title"><a class="title_underline" href="https://github.com/SarahLizDettloff/StockDividendDistributableCalculator">Stock Dividend <br></br>Distributable Calculator</a></p>
        <p className="legend">
          Built in C# using .NET framework, this application will calculate a
          stock dividend distributable for you as well as helps one calculate
          their stock dividend percentage if it is not known.
        </p>
        <h4 className="references">
          <a href="https://github.com/SarahLizDettloff/StockDividendDistributableCalculator">
            <SiGithub></SiGithub>
          </a>
          <a href="https://github.com/SarahLizDettloff/StockDividendDistributableCalculator/blob/master/stock_Dividends_Distributable_Calulat.exe">
            <FiDownload></FiDownload>
          </a>
        </h4>
      </div>
    ),
  },
  {
    alt: "Jupyter Lab that plots a Sine Wave",
    id: sinewave,
    src: sinewave,
    thumbnail: sinewave,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    customOverlay: (
      <div className="overlay_caption">
        <div>Python, JupyterLab, Physics</div>
      </div>
    ),
    caption: (
      <div>
        <p className="title"><a class="title_underline" href="https://github.com/SarahLizDettloff/Mathematics/blob/master/Physics/Sine%20Wave.ipyn">Python Sine Wave Plotter</a></p>
        <p className="legend">
          This jupyter lab plots a sine wave. A sine wave is the trigonometric
          function of an angle executed by a visual graph. This example shows
          the periodic oscillations amplitude of displacement which is displayed
          at each point which is proportional to the sine of the phase angel of
          displacement.
        </p>
        <h4 className="references">
          <a href="https://github.com/SarahLizDettloff/Mathematics/blob/master/Physics/Sine%20Wave.ipynb">
            <SiGithub></SiGithub>
          </a>
        </h4>
      </div>
    ),
  },
];
const Development = ({ match }) => (
  <div class="dev">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <h1 class="underline_link"><a href="https://sarahlizdettloff.itch.io/">Play </a></h1>
    <br></br>
    <div class="iframe_row">
      <div class="iframe_left_column">
        <iframe title="Fabled Realms" src="https://itch.io/embed/2013139?bg_color=0D314E&amp;fg_color=D9E2F7&amp;link_color=D05301&amp;border_color=D05301 " width="552" height="167" frameborder="0"><a href="https://sarahlizdettloff.itch.io/fabled-realms">Fabled Realms by Sarah Dettloff</a></iframe>
      </div>
      <div class="iframe_right_column">
        <iframe title="Marbling Out of This World" src="https://itch.io/embed/1428738?bg_color=0D314E&amp;fg_color=D9E2F7&amp;link_color=D05301&amp;border_color=D05301" width="552" height="167" frameborder="0"><a href="https://sarahlizdettloff.itch.io/bats-in-the-sky">Bats In the Sky by Sarah Dettloff</a></iframe>
      </div>
    </div>
    <div class="iframe_row">
      <div class="iframe_left_column">
        <iframe title="Bats In The Sky" src="https://itch.io/embed/1428772?bg_color=0D314E&amp;fg_color=D9E2F7&amp;link_color=D05301&amp;border_color=D05301" width="552" height="167" frameborder="0"><a href="https://sarahlizdettloff.itch.io/marbling-out-of-this-world">Marbling Out of This World by Sarah Dettloff</a></iframe>
      </div>
    </div>
    <h1 class="underline_link"><a href="https://github.com/SarahLizDettloff?tab=repositories">Projects </a></h1>
    <Gallery images={IMAGES} />
  </div >
);

export default Development;
