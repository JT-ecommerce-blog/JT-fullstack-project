import React, { Component } from 'react';

class FeaturedBlogContainer extends Component {
  render() {
    return (
      <div id="homepage-bucketone">
        <div className="homepage-bucketone-container">
          <div className="blog-box">
            <div className="blog-title">
              <h4>Blog Title</h4>
            </div>
            <div className="blog-image">
              <a href="#">read post</a>
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-title">
              <h4>Blog Title</h4>
            </div>
            <div className="blog-image">
              <img src="" alt="" />
              <a href="#">read post</a>
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-title">
              <h4>Blog Title</h4>
            </div>
            <div className="blog-image">
              <img src="" alt="" />
              <a href="#">read post</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FeaturedBlogContainer;