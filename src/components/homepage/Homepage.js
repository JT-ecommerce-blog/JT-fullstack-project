import React, { Component } from "react";

import Hero from './hero/Hero.js';
import FeaturedBlog from './featuredBlogs/FeaturedBlogsContainer.js';
import HomeBucketOne from './homeBucketOne/HomeBucketOneContainer.js';
import HomeBucketTwo from './homeBucketTwo/HomeBucketTwoContainer.js';
import ComingSoon from './comingSoon/ComingSoon.js';
import SubNav from '../navigation/SubNav.js';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <SubNav />
        <Hero />
        <FeaturedBlog />
        <HomeBucketOne />
        <HomeBucketTwo />
        <ComingSoon />
      </div>
    );
  }
}

export default HomePage;
