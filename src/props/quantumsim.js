import React, { Component } from 'react';

import quantum from '../assets/quantumsimulator.png';

class QuantumSim extends Component {
    render() {
        return (
            <div>
            <img src={quantum} alt="Output from Quantum Simulator"/>
            <p className="title">Quantum Algorithms</p>
            <p className="legend">
            The quantum simulator supplied by Microsoft's Quantum Development Kit allows demonstrations of quantum algorithms. Written in Q#, this project contains an exhibit of entanglement. During each run of this program it informs the user of the estimated resources needed to run it on a quantum computer. Concepts covered are: Pauli-Z Gate, and Bell States.
            </p>
              <h4 className="references">
            <a href="https://github.com/SarahLizDettloff/QuantumAlgorithms">Repo</a>
            </h4>
          </div>
              );
            }
          };
          
          export default QuantumSim;
          