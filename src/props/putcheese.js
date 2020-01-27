import React, { Component } from 'react';

import cheese from '../assets/cheeseOnThatScreenshot.png';

class Cheese extends Component {
    render() {
        return (
            <div>
            <img src={cheese} alt="I Would Put Some Cheese On That" width="10%" height="10%"/>
            <p className="title">I Would Put Some Cheese On That</p>
            <p className="legend">
            Android app built with Expo and React Native. Mobile camera application that detects a face to place cheese upon. Features nine different cheeses.
            </p>
            <h4 className="references">
            <a href="https://github.com/SarahLizDettloff/IWouldPutSomeCheeseOnThat">Repo</a>
            <a href="https://github.com/SarahLizDettloff/IWouldPutSomeCheeseOnThat/raw/master/IWouldPutSomeCheeseOnThat.apk">Download</a>
            </h4>
          </div>
              );
            }
          };
          
          export default Cheese;
          