import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../styles/CarouselStyle.css';

import lyric_analysis from '../assets/lyric_analysis.png';
import marble from '../assets/marbleScreenshot.png';
import cheese from '../assets/cheeseOnThatScreenshot.png';
import quantum from '../assets/quantumsimulator.png';
import physicsApp from '../assets/physicsApp.png';
import basicCal from '../assets/basiccalculator.png';
import stock from '../assets/stock.png';
import molar from '../assets/molar.png';
import sinewave from '../assets/sinewave.png';
import linegraph from '../assets/linegraph.png';
import hexconvert from '../assets/hexconvert.png';
import decbin from '../assets/decimal2Binary.png';

class CustCarousel extends Component {
  render() {
      return (
        <Carousel autoPlay>
        <div>
          <img src={marble} alt="Marble Single Level"/>
          <p className="legend">Marble Single Level: 
          Built with Unity3D, this simple marble rolling game has the objective of collecting all 42 cubes.           </p>
          <h4>
          <a href="https://github.com/SarahLizDettloff/IWouldPutSomeCheeseOnThat">Repo</a>
          <a href="https://github.com/SarahLizDettloff/IWouldPutSomeCheeseOnThat/raw/master/IWouldPutSomeCheeseOnThat.apk">Download</a>
          </h4>
        </div>
        <div>
          <img src={cheese} alt="I Would Put Some Cheese On That"/>
          <p className="legend">
          <b>I Would Put Some Cheese On That: </b>
          Android app built with Expo and React Native. Mobile camera application that detects a face to place cheese upon. Features nine different cheeses.
          </p>
          <h4>
          <a href="https://github.com/SarahLizDettloff/IWouldPutSomeCheeseOnThat">Repo</a>
          <a href="https://github.com/SarahLizDettloff/IWouldPutSomeCheeseOnThat/raw/master/IWouldPutSomeCheeseOnThat.apk">Download</a>
          </h4>
        </div>
        <div>
          <img src={lyric_analysis} alt="Lyrical Analysis: "/>
          <p className="legend">Lyrical Analysis: 
          Juptyer notebook reads lyrics from text files and generates visual analysis of the lyrics.</p>
          <h4>
          <a href="https://github.com/SarahLizDettloff/BandLyricsAnalysis">Repo</a>
          <a href="https://github.com/SarahLizDettloff/BandLyricsAnalysis/blob/master/LyricAnalysis.ipynb">Download</a>
          </h4>
        </div>
        <div>
          <img src={quantum} alt="Output from Quantum Simulator"/>
          <p className="legend">Quantum Algorithms: 
          The quantum simulator supplied by Microsoft's Quantum Development Kit allows demonstrations of quantum algorithms. This project contains an exhitbit of entangement. During each run of this program it informs the user of the estimatd resources needed to run it on a quantum computer. Concepts covered are: Pauli-Z Gate, and Bell States.
          </p>
            <h4>
          <a href="https://github.com/SarahLizDettloff/QuantumAlgorithms">Repo</a>
          </h4>
        </div>
        <div>
          <img src={physicsApp} alt="Windows Form Physics App C#"/>
          <p className="legend">Windows Form Physics App C#: 
          This windows application written with .NET framework calculates the following:
          Volume of a Frustum,
Planck's Constant,
Buoyancy Force Calculator(helps calculate volume of object if needed),
The Big Four(Kinematic equations),
Binet's Fibonacci Number,
          </p>
          <h4>
          <a href="https://github.com/SarahLizDettloff/Mathematics/tree/master/physicsApp">Repo</a>
          <a href="https://github.com/SarahLizDettloff/Mathematics/blob/master/physicsApp/Mathematics.exe">Download</a>
          </h4>
        </div>
        <div>
          <img src={basicCal} alt="Basic Calculator"/>
          <p className="legend">Basic Calculator:
          
          Written in Visual Basic in .NET this is a basic calculator with retro graphics created with GraphicsGale.</p>
          <h4>
          <a href="https://github.com/SarahLizDettloff/BasicCalculator">Repo</a>
          <a href="https://github.com/SarahLizDettloff/BasicCalculator/blob/master/Calculator.exe">Download</a>
          </h4>
        </div>
        <div>
          <img src={stock} alt="Stock Dividend Distributable Calculator"/>
          <p className="legend">Stock Dividend Distributable Calculator:
          Built in C# using .NET framework, this application will calculate a stock dividend distributable for you as well as helps one calculate their stock dividend percentage if it is not known. 
          </p>
          <h4>
          <a href="https://github.com/SarahLizDettloff/StockDividendDistributableCalculator">Repo</a>
          <a href="https://github.com/SarahLizDettloff/StockDividendDistributableCalculator/blob/master/stock_Dividends_Distributable_Calulat.exe">Download</a>
          </h4>
        </div>
        <div>
          <img src={molar} alt="Mass for Molar Solution"/>
          <p className="legend">Mass for Molar Solution:
          This calculator allows you to discover the mass molarity of a compound which requires a concentration and volume.  Written in Visual Basic.
          </p>
          <h4>
          <a href="https://github.com/SarahLizDettloff/MassforMolarSolution">Repo</a>
          <a href="https://github.com/SarahLizDettloff/MassforMolarSolution/blob/master/Mass_for_Molar_Solution.exe">Download</a>
          </h4>
        </div>
        <div>
          <img src={sinewave}  alt="Sinusoidal Wave Output"/>
          <p className="legend">Python cli Physics Calculator:
          Picture is from the Sinusoidal Wave portion of this application. This application covers the following: Volume of a Frustum, Planck Constant, Buoyancy Force Calculator, The Big Four, Sinusoidal Wave, Binet's Fibonacci Number,
          </p>
          <h4>
          <a href="https://github.com/SarahLizDettloff/Mathematics/tree/master/Physics">Repo</a>
          </h4>
        </div>
        <div>
          <img src={linegraph} alt="Data comparison with a line graph output"/>
          <p className="legend">Python Notebook - Data comparison with a line graph:
          This comparison line graph containing data from 1999 and 2000 of mean family incomes was obtained, then plotted with numPy and Mathplotlib. Data collections were obtained through US Data Gov
          </p>
          <h4>
          <a href="https://github.com/SarahLizDettloff/Mathematics">Repo</a>
          <a href="https://github.com/SarahLizDettloff/Mathematics/blob/master/Line_graph_comparison_example.ipynb">Download</a>
          </h4>
        </div>
        <div>
          <img src={hexconvert} alt="Converts a hexadecimal into a decimal."/>
          <p className="legend">Hexadecimal to Decimal Python CLI Calculator:
          Converts a hexadecimal into a decimal.          
          </p>
          <h4>
          <a href="https://github.com/SarahLizDettloff/Mathematics">Repo</a>
          <a href="https://github.com/SarahLizDettloff/Mathematics/blob/master/hexadecimal_to_decimal_calculator.py">Download</a>
          </h4>
        </div>
        <div>
          <img src={decbin} alt="Decimal to Binary: Python CLI"/>

          <p className="legend">Decimal to binary calculator:
          Python CLI that converts an inputted decimal into binary.
          </p>
          <h4>
          <a href="https://github.com/SarahLizDettloff/Mathematics">Repo</a>
          <a href="https://github.com/SarahLizDettloff/Mathematics/blob/master/decimal_to_binary_calculator.py">Download</a>
          </h4>
        </div>
      </Carousel>
      );
  }
};

export default CustCarousel;
