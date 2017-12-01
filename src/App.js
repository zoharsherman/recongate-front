import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecongateTextArea from "./RecongateTextArea";
export { RECONGATE_CHALLENGE_TEXT };

const RECONGATE_CHALLENGE_TEXT = 'Hi and welcome to\n' +
    'Recongate\'s Front-End\n' +
    'Challlenge. your mission if you wish to accept is to create this text-area component.';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Recongate's React Front-End Challenge</h1>
            <RecongateTextArea minrows={5} cols={24} placeholder={'placeholder'} autoFocus={true} value={RECONGATE_CHALLENGE_TEXT}/>
        </header>
        <p className="App-intro">
          By: Zohar Sherman
        </p>
      </div>
    );
  }
}

export default App;
