import React, { Component } from 'react';
import './App.css';

import NavBar from './ui/NavBar'

class App extends Component {
  render() {
    const logo = 'Logo do Projeto'
    return (
      <div className="container">
        <NavBar logo={logo}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
