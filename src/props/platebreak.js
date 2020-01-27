import React, { Component } from 'react';

import plate from '../assets/plate.gif';

class PlateBreak extends Component {
    render() {
        return (
            <div>
          <img src={plate} alt="Plate Break" width="30%" height="20%"/>
          <p className="title">Plate Break</p>
          <p className="legend">Shake your phone to drop the plate or use your finger to throw the plate across the screen. Built with Unity 2019.1.7f1 for Android in C#.</p>
          <h4 className="references">
          <a href="https://github.com/SarahLizDettloff/PlateBreak">Repo</a>
          <a href="https://github.com/SarahLizDettloff/PlateBreak/raw/master/PlateBreak.aab">Download</a>
          </h4>
        </div>
              );
            }
          };
          
          export default PlateBreak;
          