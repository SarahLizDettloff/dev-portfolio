import '../styles/MenuStyle.css';
import Icon from "react";
import React, { Component } from 'react';
export default class MenuBar extends Component {
    handleClick() {
    const wrapper = document.getElementById('wrapper');
    wrapper.classList.toggle('is-nav-open')}
    
    render() {
    return (
    <div id="wrapper" className="wrapper">
    <div className="nav">
    <Icon
    className="nav__icon"
    type="menu-fold"
    onClick={() => this.handleClick()}
    />
    <div className="nav__body">
    </div>
    </div>
    </div>
    );
    }
    }