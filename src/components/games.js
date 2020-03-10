import React from 'react';
import Fade from 'react-reveal/Fade';

import TicTac from '../props/tictactoe';

const Games = ({ match }) => (
    <div>
        <Fade top>
        <h1>
        <TicTac></TicTac>
        </h1>
        </Fade>
    </div>
  );

  
export default Games;
