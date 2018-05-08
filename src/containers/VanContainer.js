import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import dotenv from 'dotenv';
import axios from 'axios';
require('dotenv').config();


class VanContainer extends Component {
  constructor() {
    super();
    this.state = {
      info: ''
    }
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {
  }

  handleClick(e) {
    e.preventDefault();
    const API_KEY = 'deeb2bb8606ff3a9bc887e56a0574b04';
    const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
    const url = `${ROOT_URL}&q=philadelphia,us`;
    axios.get(url)
      .then(res => {
        debugger;
        this.setState( {info: res.body} );
      });
  }

  render() {
    let info = this.state.info
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Match Match Philly</h1>
        </header>
        <p className="App-intro">
          This is a testing app for van-api
        </p>
        <a href="#" onClick={this.handleClick}>
          Fetch to Van
        </a>
        <div>{this.info}</div>
      </div>
    )
  }
}

export default VanContainer;