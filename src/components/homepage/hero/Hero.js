import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Hero extends Component {
  render() {
    return (
      <div id="homepage-hero-container">
        <div className="hero-content">
          <h1>Start Your Journey</h1>
          <p>Learn how we became creatives and how we both transitioned from one career into Development</p>
          <Link to="/about-us">Read Our Story</Link>
        </div>
      </div>
    )
  }
}

export default Hero;