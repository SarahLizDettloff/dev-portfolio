import React, { Component } from 'react';

import marble from '../assets/marbleScreenshot.png';

class MarbleGame extends Component {
    render() {
        return (
            <div>
            <img src={marble} alt="Marble Single Level" width="30%" height="30%"/>
            <p className="title">Marble Single Level</p>
            <p className="legend"> 
            Built with Unity3D 5.6.3p1, this simple marble rolling game has the objective of collecting all 42 cubes.           </p>
            <h4 className="references">
            <a href="https://github.com/SarahLizDettloff/MarbleSingleLevel">Repo</a>
            <a href="https://github.com/SarahLizDettloff/MarbleSingleLevel/raw/master/MarbleSingleLevel.exe">Download</a>
            </h4>
          </div>
              );
            }
          };
          
          export default MarbleGame;
          