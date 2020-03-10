import React, { Component } from 'react';

import physicsApp from '../assets/physicsApp.png';

class PhysicsApp extends Component {
    render() {
        return (
            <div>
            <img src={physicsApp} alt="Windows Form Physics App C#" height="20%" width="15%"/>
            <p className="title">Windows Form Physics App C#</p>
            <p className="legend">
            This windows application written in C# using .NET calculates the following:
            <br></br>
            Volume of a Frustum
            <br></br>
  Planck's Constant
  <br></br>
  Buoyancy Force Calculator(helps calculate volume of object if needed)
  <br></br>
  The Big Four(Kinematic equations)
  <br></br>
  Binet's Fibonacci Number
            </p>
            <h4 className="references">
            <a href="https://github.com/SarahLizDettloff/Mathematics/tree/master/physicsApp">Repo</a>
            <a href="https://github.com/SarahLizDettloff/Mathematics/blob/master/physicsApp/Mathematics.exe">Download</a>
            </h4>
          </div>
              );
            }
          };
          
          export default PhysicsApp;
          