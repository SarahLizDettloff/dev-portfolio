import React, { Component } from 'react';

import stock from '../assets/stock.png';

class StockDivid extends Component {
    render() {
        return (
            <div>
            <img src={stock} alt="Stock Dividend Distributable Calculator" width="15%" height="15%"/>
            <p className="title">Stock Dividend Distributable Calculator</p>
            <p className="legend">
            Built in C# using .NET framework, this application will calculate a stock dividend distributable for you as well as helps one calculate their stock dividend percentage if it is not known. 
            </p>
            <h4 className="references">
            <a href="https://github.com/SarahLizDettloff/StockDividendDistributableCalculator">Repo</a>
            <a href="https://github.com/SarahLizDettloff/StockDividendDistributableCalculator/blob/master/stock_Dividends_Distributable_Calulat.exe">Download</a>
            </h4>
          </div>
              );
            }
          };
          
          export default StockDivid;
          