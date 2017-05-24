import React, { Component } from 'react';
import MovieList from './components/MovieList';


import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
          <h2>Star Wars Movie List</h2>
        <div style={{textAlign: 'left'}}>
          <MovieList />

        </div>
      </div>
    );
  }
}

export default App;
