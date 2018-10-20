import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const FontAwesome = require("react-fontawesome");

class Footer extends Component {
  render() {
    return <div id="footer">
        <div className="social-icons">
          <FontAwesome name="github" />
          <FontAwesome name='instagram' />
          <FontAwesome name='facebook' />
        </div>
        <div className="copyright">
          <p>&copy; 2018 JT | All Rights Reserved.</p>
        </div>
        <div className="resource-links"> 
          <ul>
            <li>resources</li>
            <li>blog</li>
            <li>discussion</li>
            <li>account</li>
            <li>contact us</li>
          </ul>
        </div>

      </div>;
  }
}

export default Footer;