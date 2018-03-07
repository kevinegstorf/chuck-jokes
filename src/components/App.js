import React, { Component } from 'react';
import './App.css';
import Jokes from './Jokes';
import axios from 'axios';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      active: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }
  render() {
    return (
      <div className="container">
        <button className="btn-add" onClick={this.handleClick}>
          Render Jokes
        </button>
        <ul>{this.state.active && <Jokes />}</ul>
      </div>
    );
  }
}

export default App;
