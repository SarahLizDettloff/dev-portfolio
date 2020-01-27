import React, { Component } from 'react';

import decbin from '../assets/decimal2Binary.png';

class DecimaltoBinaryCalculator extends Component {
    render() {
        return (
            <div>
            <img src={decbin} alt="Decimal to Binary: Python CLI" height="75%" width="75%" top="30px" />
            <p className="title">Converter: Decimal to Binary</p>
            <p className="legend">
            Script written in Python converts any decimal number and gives the binary equivalent as an output.
            </p>
            <h4 className="references">
            <a href="https://github.com/SarahLizDettloff/Mathematics">Repo</a>
            <a href="https://github.com/SarahLizDettloff/Mathematics/blob/master/decimal_to_binary_calculator.py">Download</a>
            </h4>
          </div>
              );
            }
          };
          
          export default DecimaltoBinaryCalculator;
          