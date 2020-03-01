import React, { Component } from 'react';

import linegraph from '../assets/linegraph.png';

class FamilyIncomeComp extends Component {
    render() {
        return (
            <div>
          <img src={linegraph} alt="Data comparison with a line graph output" height="70%" width="70%"/>
          <p className="title">Graphing Data in Python</p>
          <p className="legend">
          This jupyer lab notebook compares two sets of family incomes from seperate years and compares them visually on a line graph. The data is obtained from the US Data Gov. Written in Python using NumPy and MatPlotLib.          </p>
          <h4 className="references">
          <a href="https://github.com/SarahLizDettloff/Mathematics">Repo</a>
          <a href="https://github.com/SarahLizDettloff/Mathematics/blob/master/Line_graph_comparison_example.ipynb">Download</a>
          </h4>
        </div>
              );
            }
          };
          
          export default FamilyIncomeComp;
          