import React from 'react';
import Fade from 'react-reveal/Fade';

import '../styles/DevStyle.css';
import PlateBreak from '../props/platebreak';
import BasicCalculator from '../props/basiccal';
import DecimaltoBinaryCalculator from '../props/dec2bin';
import FamilyIncomeComp from '../props/familyincomecomp';
import HexConvertfrom from '../props/hexconvert';
import LyricAnalysis from '../props/lyricanalysis';
import MarbleGame from '../props/marblegame';
import MolarCalculator from '../props/molarcal';
import PhysicsApp from '../props/physicsequations';
import StockDivid from '../props/stockdivid';
import Cheese from '../props/putcheese';
import SineWave from '../props/sinuwave';
import QuantumSim from '../props/quantumsim';

const Development = ({ match }) => (
    <div>
        <Fade top>
        <h1 className="plate">
        <PlateBreak></PlateBreak>
        </h1>
        </Fade>
        <Fade left>
        <h1 className="marble">
          <MarbleGame></MarbleGame>
        </h1>
        </Fade>
        <Fade right>
        <h1 className="cheese">
          <Cheese></Cheese>
        </h1>
        </Fade>
        <Fade left>
        <h1 className="lyricAnalysis">
          <LyricAnalysis></LyricAnalysis>
          </h1>
          </Fade>
        <Fade right>
          <h1 className="quantumsim">
          <QuantumSim></QuantumSim>
          </h1>
          </Fade>
        <Fade left>
          <h1 className="physicsApp">
          <PhysicsApp></PhysicsApp>
          </h1>
          </Fade>
        <Fade right>
          <h1 className="basicCal">
          <BasicCalculator></BasicCalculator>
          </h1>
          </Fade>
        <Fade left>
          <h1 className="stockdiv">
          <StockDivid></StockDivid>
          </h1>
          </Fade>
        <Fade right>
          <h1 className="molarCal">
          <MolarCalculator></MolarCalculator>
          </h1>
          </Fade>
        <Fade left>
          <h1 className="sine">
          <SineWave></SineWave>
          </h1>
          </Fade>
        <Fade right>
          <h1 className="dec2bin">
          <DecimaltoBinaryCalculator></DecimaltoBinaryCalculator>
          </h1>
          </Fade>
        <Fade left>
          <h1 className="familyincome">
          <FamilyIncomeComp></FamilyIncomeComp>
          </h1>
          </Fade>
        <Fade bottom>
          <h1 className="hexco">
          <HexConvertfrom></HexConvertfrom>
          </h1>
          </Fade>
    </div>
  );

  
export default Development;
