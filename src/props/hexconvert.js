import React, { Component } from 'react';

import hexconvert from '../assets/hexconvert.png';

class HexConvert extends Component {
    render() {
        return (
            <div>
            <img src={hexconvert} alt="Converts a hexadecimal into a decimal." height="75%" width="75%"/>
            <p className="title">Hexadecimal to Decimal Calculator</p>
            <p className="legend">
            This python script takes an inputted hexadecimal and converts it to a decimal without using any common Python libaries.      
            </p>
            <h4 className="references">
            <a href="https://github.com/SarahLizDettloff/Mathematics">Repo</a>
            <a href="https://github.com/SarahLizDettloff/Mathematics/blob/master/hexadecimal_to_decimal_calculator.py">Download</a>
            </h4>
          </div>
              );
            }
          };
          
          export default HexConvert;
          