import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'cats') => {
    axios
      .get(`http://api.icndb.com/jokes/random/10`)
      .then(response => {
        this.setState({
          jokes: response.data.value
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  };

  renderJokes(jokes) {
    return (jokes || []).map(item => {
      return (
        <li key={item.id}>
          {item.joke}
          <br />
        </li>
      );
    });
  }

  render() {
    console.log('joepie jokes', this.state.jokes);
    if (this.state && this.state.jokes) {
      return this.renderJokes(this.state.jokes);
    }
    return <div>Loading..</div>;
  }
}

export default App;
