import React from 'react';
import Gallery from 'react-grid-gallery';

import '../styles/DevStyle.css';

import cheese from '../assets/cheeseOnThatScreenshot.png';
import lyric_analysis from '../assets/lyric_analysis.png';
import basicCal from '../assets/basiccalculator.png';
import physicsApp from '../assets/physicsApp.png';
import quantum from '../assets/quantumsimulator.png';
import molar from '../assets/molar.png';
import linegraph from '../assets/linegraph.png';
import stock from '../assets/stock.png';
import hexconvert from '../assets/hexconvert.png';
import decbin from '../assets/decimal2Binary.png';
import sinewave from '../assets/sinewave.png';

import plate from '../assets/plate.gif';
import marble from '../assets/marbleScreenshot.png';


const IMAGES =
[{
  src: plate,
  thumbnail:plate,
  thumbnailWidth: 500,
  thumbnailHeight: 250,
tags: [{value: "Mobile", title: "Mobile"}, {value: "Android", title: "Android"},  {value: "Unity", title: "Unity"}, {value: "C#", title: "C#"}],
  caption:   <div class="popup">
  <p className="title">Plate Break</p>
  <p className="legend">Shake your phone to drop the plate or use your finger to throw the plate across the screen. Built with Unity 2019.1.7f1 for Android in C#.</p>
  <h4 className="references">
  <a href="https://github.com/SarahLizDettloff/PlateBreak">Repo</a>
  <a href="https://github.com/SarahLizDettloff/PlateBreak/raw/master/PlateBreak.aab">Download</a>
  </h4>
</div>
},
{
  src: marble,
  thumbnail:marble,
  thumbnailWidth: 500,
  thumbnailHeight: 250,
tags: [{value: "Unity", title: "Unity"}, {value: "C#", title: "C#"}, {value: "Windows", title: "Windows"}],
  caption:<div class="popup"> <p className="title">Marble Single Level</p>
            <p className="legend"> 
            Built with Unity3D 5.6.3p1, this simple marble rolling game has the objective of collecting all 42 cubes.           </p>
            <h4 className="references">
            <a href="https://github.com/SarahLizDettloff/MarbleSingleLevel">Repo</a>
            <a href="https://github.com/SarahLizDettloff/MarbleSingleLevel/raw/master/MarbleSingleLevel.exe">Download</a>
            </h4>
          </div>
},
{
  src: cheese,
  thumbnail:cheese,
  thumbnailWidth: 700,
  thumbnailHeight: 900,
tags: [{value: "Mobile", title: "Mobile"}, {value: "React", title: "React"}, {value: "JavaScript", title: "JavaScript"}],
  caption:            <div class="popup">
            <p className="title">I Would Put Some Cheese On That</p>
            <p className="legend">
            Android app built with Expo and React Native. Mobile camera application that detects a face to place cheese upon. Features nine different cheeses.
            </p>
            <h4 className="references">
            <a href="https://github.com/SarahLizDettloff/IWouldPutSomeCheeseOnThat">Repo</a>
            <a href="https://github.com/SarahLizDettloff/IWouldPutSomeCheeseOnThat/raw/master/IWouldPutSomeCheeseOnThat.apk">Download</a>
            </h4>
          </div>
},
{
  src: lyric_analysis,
  thumbnail:lyric_analysis,
  thumbnailWidth: 320,
  thumbnailHeight: 174,
tags: [{value: "Analytics", title: "Analytics"}, {value: "Python", title: "Python"}, {value: "JupyterLab", title: "JupyterLab"}],
  caption:            <div class="popup">
            <p className="title">Lyrical Analysis</p>
            <p className="legend"> 
            Written in Python 2, this JupyterLab reads lyrics from text files and generates visual analysis of the lyrics. Three available analysis: Top 20 words, word cloud with tiny text, word cloud with large text. </p>
            <h4  className="references">
            <a href="https://github.com/SarahLizDettloff/BandLyricsAnalysis">Repo</a>
            <a href="https://github.com/SarahLizDettloff/BandLyricsAnalysis/blob/master/LyricAnalysis.ipynb">Download</a>
            </h4>
          </div>
},
{
  src: physicsApp,
  thumbnail:physicsApp,
  thumbnailWidth: 300,
  thumbnailHeight: 310,
tags: [{value: "Windows App", title: "Windows App"}, {value: "C#", title: "C#"}],
  caption:           <div class="popup">
            <p className="title">Windows Form Physics App C#</p>
            <p className="legend">
            This windows application written in C# using .NET calculates the following:
            Volume of a Frustum, Planck's Constant, Buoyancy Force Calculator(helps calculate volume of object if needed)
, The Big Four(Kinematic equations), Binet's Fibonacci Number
            </p>
            <h4 className="references">
            <a href="https://github.com/SarahLizDettloff/Mathematics/tree/master/physicsApp">Repo</a>
            <a href="https://github.com/SarahLizDettloff/Mathematics/blob/master/physicsApp/Mathematics.exe">Download</a>
            </h4>
          </div>
},
{
  src: molar,
  thumbnail:molar,
  thumbnailWidth: 200,
  thumbnailHeight: 174,
tags: [{value: "Windows App", title: "Windows App"}, {value: "C#", title: "C#"}],
  caption:            <div class="popup">
            <p className="title">Mass for Molar Solution</p>
            <p className="legend">
            This VIsual Basic .NET calculator allows you to discover the mass molarity of a compound which requires a concentration and volume. Scientists practice this equation in order to make solutions.            </p>
            <h4 className="references">
            <a href="https://github.com/SarahLizDettloff/MassforMolarSolution">Repo</a>
            <a href="https://github.com/SarahLizDettloff/MassforMolarSolution/blob/master/Mass_for_Molar_Solution.exe">Download</a>
            </h4>
          </div>
},
{
  src: basicCal,
  thumbnail:basicCal,
  thumbnailWidth: 300,
  thumbnailHeight: 320,
tags: [{value: "Windows App", title: "Windows App"}, {value: "C#", title: "C#"}],
  caption:            <div class="popup">
            <p className="title">Calculator</p>
            <p className="legend">            
            Retro calculator written in Visual Basic .NET with images created in Graphics Gale. Compatible with Windows.
            </p>
            <h4 className="references">
            <a href="https://github.com/SarahLizDettloff/BasicCalculator">Repo</a>
            <a href="https://github.com/SarahLizDettloff/BasicCalculator/blob/master/Calculator.exe">Download</a>
            </h4>
          </div>
},
{
  src: quantum,
  thumbnail:quantum,
  thumbnailWidth: 320,
  thumbnailHeight: 300,
tags: [{value: "Windows App", title: "Windows App"}, {value: "Q#", title: "Q#"}],
  caption:             <div class="popup">
            <p className="title">Quantum Algorithms</p>
            <p className="legend">
            The quantum simulator supplied by Microsoft's Quantum Development Kit allows demonstrations of quantum algorithms. Written in Q#, this project contains an exhibit of entanglement. During each run of this program it informs the user of the estimated resources needed to run it on a quantum computer. Concepts covered are: Pauli-Z Gate, and Bell States.
            </p>
              <h4 className="references">
            <a href="https://github.com/SarahLizDettloff/QuantumAlgorithms">Repo</a>
            </h4>
          </div>
},
{
  src: linegraph,
  thumbnail:linegraph,
  thumbnailWidth: 500,
  thumbnailHeight: 250,
tags: [{value: "Analytics", title: "Analytics"}, {value: "Python", title: "Python"},  {value: "JupyterLab", title: "JupyterLab"}],
  caption: <div class="popup">
          <p className="title">Graphing Data</p>
          <p className="legend">
          This jupyer lab notebook compares two sets of family incomes from separate years and compares them visually on a line graph. The data is obtained from the US Data Gov. Written in Python using NumPy and MatPlotLib.          </p>
          <h4 className="references">
          <a href="https://github.com/SarahLizDettloff/Mathematics">Repo</a>
          <a href="https://github.com/SarahLizDettloff/Mathematics/blob/master/Line_graph_comparison_example.ipynb">Download</a>
          </h4>
        </div>
},
{
  src: stock,
  thumbnail:stock,
  thumbnailWidth: 320,
  thumbnailHeight: 300,
tags: [{value: "Windows App", title: "Windows App"}, {value: "C#", title: "C#"}],
  caption:             <div class="popup">
            <p className="title">Stock Dividend Distributable Calculator</p>
            <p className="legend">
            Built in C# using .NET framework, this application will calculate a stock dividend distributable for you as well as helps one calculate their stock dividend percentage if it is not known. 
            </p>
            <h4 className="references">
            <a href="https://github.com/SarahLizDettloff/StockDividendDistributableCalculator">Repo</a>
            <a href="https://github.com/SarahLizDettloff/StockDividendDistributableCalculator/blob/master/stock_Dividends_Distributable_Calulat.exe">Download</a>
            </h4>
          </div>
},
{
  src: hexconvert,
  thumbnail:hexconvert,
  thumbnailWidth: 400,
  thumbnailHeight: 200,
tags: [{value: "Python", title: "Python"}, {value: "Calculator", title: "Calculator"}],
  caption:             <div class="popup">
            <p className="title">Hexadecimal to Decimal Calculator</p>
            <p className="legend">
            This python script takes an inputted hexadecimal and converts it to a decimal without using any common Python libraries.      
            </p>
            <h4 className="references">
            <a href="https://github.com/SarahLizDettloff/Mathematics">Repo</a>
            <a href="https://github.com/SarahLizDettloff/Mathematics/blob/master/hexadecimal_to_decimal_calculator.py">Download</a>
            </h4>
          </div>
},
{
  src: decbin,
  thumbnail:decbin,
  thumbnailWidth: 320,
  thumbnailHeight: 300,
tags: [{value: "Python", title: "Python"}],
  caption:            <div class="popup">
            <p className="title">Converter: Decimal to Binary</p>
            <p className="legend">
            Script written in Python converts any decimal number and gives the binary equivalent as an output.
            </p>
            <h4 className="references">
            <a href="https://github.com/SarahLizDettloff/Mathematics">Repo</a>
            <a href="https://github.com/SarahLizDettloff/Mathematics/blob/master/decimal_to_binary_calculator.py">Download</a>
            </h4>
          </div>
},
{
  src: sinewave,
  thumbnail:sinewave,
  thumbnailWidth: 320,
  thumbnailHeight: 174,
tags: [{value: "Python", title: "Python"}, {value: "Physics", title: "Physics"}],
  caption:            <div>
            <p className="title">Python Physics Calculator</p>
            <p className="legend">
            This jupyter lab plots a sine wave. A sine wave is the trigonometric function of an angle executed by a visual graph. This example shows the periodic oscillations amplitude of displacement which is displayed at each point which is proportional to the sine of the phase angel of displacement.            </p>
            <h4 className="references">
            <a href="https://github.com/SarahLizDettloff/Mathematics/blob/master/Physics/Sine%20Wave.ipynb">Repo</a>
            </h4>
          </div>
}

]
const Development = ({ match }) => (
    <div class="dev">
    <Gallery images={IMAGES}/>
    </div>
  );

  
export default Development;
