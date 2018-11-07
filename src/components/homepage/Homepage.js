import React, { Component } from "react";

import SubNav from '../navigation/SubNav';
import Hero from './hero/Hero';
import FeaturedBlog from './featuredBlogs/FeaturedBlogsContainer';
import HomeBucketOne from './homeBucketOne/HomeBucketOneContainer';
import HomeBucketTwo from './homeBucketTwo/HomeBucketTwoContainer';
import ComingSoon from './comingSoon/ComingSoon';
import TestForm from '.././test/TestForm';

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
        <TestForm />
      </div>
    );
  }
}

export default HomePage;
