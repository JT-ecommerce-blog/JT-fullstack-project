import React, { Component } from 'react';

import Nav from './navigation/Nav.js';
import Footer from './footer/Footer.js';

import '../scss/styles.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default App;
