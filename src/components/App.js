import React, { Component } from 'react';

import Nav from './navigation/Nav.js';
import Home from './homepage/Homepage.js';
import Footer from './footer/Footer.js';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
