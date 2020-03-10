import React, { Component } from 'react';

import basicCal from '../assets/basiccalculator.png';

class BasicCalculator extends Component {
    render() {
        return (
            <div>
            <img src={basicCal} alt="Basic Calculator"/>
            <p className="title">Calculator</p>
            <p className="legend">            
            Retro calculator written in Visual Basic .NET with images created in Graphics Gale. Compatible with Windows.
            </p>
            <h4 className="references">
            <a href="https://github.com/SarahLizDettloff/BasicCalculator">Repo</a>
            <a href="https://github.com/SarahLizDettloff/BasicCalculator/blob/master/Calculator.exe">Download</a>
            </h4>
          </div>
              );
            }
          };
          
          export default BasicCalculator;
          