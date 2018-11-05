import React, { Component } from "react";

import HeroBlog from '../Blogs/HeroBlog/HeroBlog';
import BlogContent from '../Blogs//BlogContent';

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
