import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import bucketOneImage from "../../../assets/images/read-learn-more.png";

class HomeBucketOneContainer extends Component {
  constructor () {
    super();
    this.state = {
      customers: []
    }
  }

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
          <Link to="/blog" className="button">Read Our Blogs</Link>
        </div>
      </div>
    )
  }
}

export default HomeBucketOneContainer;