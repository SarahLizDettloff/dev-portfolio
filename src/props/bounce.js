import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import owl from "../assets/purpleOwl.gif";

const Bounce = styled.div`
  animation: 5s ${keyframes`${bounce}`} infinite;
`;
export default class WelcomeAnimations extends Component {
  render() {
    return (
      <Bounce>
        <img
          src={owl}
          height="75px"
          width="75px"
          alt="Pink owl by Sarah"
          background="transparent"
        ></img>
      </Bounce>
    );
  }
}
