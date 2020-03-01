import React, { Component } from 'react';

import molar from '../assets/molar.png';

class MolarCalculator extends Component {
    render() {
        return (
            <div>
            <img src={molar} alt="Mass for Molar Solution"  width="30%" height="30%"/>
            <p className="title">Mass for Molar Solution</p>
            <p className="legend">
            This VIsual Basic .NET calculator allows you to discover the mass molarity of a compound which requires a concentration and volume. Scientists practice this equation in order to make solutions.            </p>
            <h4 className="references">
            <a href="https://github.com/SarahLizDettloff/MassforMolarSolution">Repo</a>
            <a href="https://github.com/SarahLizDettloff/MassforMolarSolution/blob/master/Mass_for_Molar_Solution.exe">Download</a>
            </h4>
          </div>
              );
            }
          };
          
          export default MolarCalculator;
          