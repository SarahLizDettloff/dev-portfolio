import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import { bounce } from 'react-animations';


const Bounce = styled.div`animation: 15s ${keyframes`${bounce}`} infinite`;
export default class WelcomeAnimations extends Component { render() { return ( <Bounce>Hello.</Bounce>);}}
