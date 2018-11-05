import React, { Component } from 'react';

import aboutUsBlogImage from "../../../assets/images/about-us-hero.jpg";

class HeroBlog extends Component {
  render() {
    return (
      <div class="blog-hero-container">
        <img src={aboutUsBlogImage} alt="blog highlight" />
      </div>
    );
  }
}

export default HeroBlog;