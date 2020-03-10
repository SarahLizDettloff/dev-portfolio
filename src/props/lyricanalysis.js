import React, { Component } from 'react';

import lyric_analysis from '../assets/lyric_analysis.png';

class LyricAnalysis extends Component {
    render() {
        return (
            <div>
            <img src={lyric_analysis} alt="Lyrical Analysis" height="30%" width="40%"/>
            <p className="title">Lyrical Analysis</p>
            <p className="legend"> 
            Written in Python 2, this juptyer lab reads lyrics from text files and generates visual analysis of the lyrics. Three available analysis: Top 20 words, word cloud with tiny text, word cloud with large text. </p>
            <h4  className="references">
            <a href="https://github.com/SarahLizDettloff/BandLyricsAnalysis">Repo</a>
            <a href="https://github.com/SarahLizDettloff/BandLyricsAnalysis/blob/master/LyricAnalysis.ipynb">Download</a>
            </h4>
          </div>
              );
            }
          };
          
          export default LyricAnalysis;
          