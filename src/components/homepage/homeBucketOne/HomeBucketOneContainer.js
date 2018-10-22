import React, { Component } from 'react';

import bucketOneImage from '/Users/jeffhorner/Development/Projects/the-cource/JT-fullstack-project/src/assets/images/read-learn-more.png';

class HomeBucketOneContainer extends Component {
  render() {
    return (
      <div id="home-bucket-one">
        <div className="img-left">
          <img src={bucketOneImage} alt="Read.Learn.More" />
        </div>
        <div className="text-right">
          <h1>Read. Learn. Progress.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorem asperiores inventore, quo ipsum quas laborum totam blanditiis odit maiores possimus quae nesciunt eligendi, voluptatum repellat! Minus saepe repellat accusantium.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente mollitia corporis eaque suscipit nesciunt, maxime vitae non veritatis delectus, voluptatem autem reiciendis! Praesentium laudantium vero dolor natus! Asperiores, deleniti vel!</p>
          <a href="/blogs" className="button">Read Our Blogs</a>
        </div>
      </div>
    )
  }
}

export default HomeBucketOneContainer;