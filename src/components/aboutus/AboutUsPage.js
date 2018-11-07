import React, { Component } from "react";

import HeroBlog from '../blogs/HeroBlog/HeroBlog';
import BlogContent from '../blogs/BlogContent/BlogContent';

class AboutUsPage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <div>
          <HeroBlog />
          <BlogContent />
        </div>
      </div>
    );
  }
}

export default AboutUsPage;
