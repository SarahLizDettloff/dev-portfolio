import React, { Component } from 'react';

import sinewave from '../assets/sinewave.png';

class SineWave extends Component {
    render() {
        return (
            <div>
            <img src={sinewave}  alt="Sinusoidal Wave Output" height="25%" width="25%" background="white"/>
            <p className="title">Python cli Physics Calculator</p>
            <p className="legend">
            This jupyter lab plots a sine wave. A sine wave is the trigonometric function of an angle executed by a visual graph. This example shows the periodic oscillations amplitude of displacement which is displayed at each point which is proportional to the sine of the phase angel of displacement.            </p>
            <h4 className="references">
            <a href="https://github.com/SarahLizDettloff/Mathematics/blob/master/Physics/Sine%20Wave.ipynb">Repo</a>
            </h4>
          </div>
              );
            }
          };
          
          export default SineWave;
          