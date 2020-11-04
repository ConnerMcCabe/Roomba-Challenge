import React, { Component } from 'react';
import Room from '../Components/Room/Room';
import Results from '../Components/Results/Results';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Results />
        <Room />
      </div>
    );
  }
}


export default App;
