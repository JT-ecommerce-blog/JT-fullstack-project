import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import bucketTwoImage from "../../../assets/images/how-to-get-started.png";

class HomeBucketTwoContainer extends Component {
  render() {
    return (
      <div id="home-bucket-two">
        <div className="text-left">
          <h1>How to Get Started.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis dolorem asperiores inventore, quo ipsum quas
            laborum totam blanditiis odit maiores possimus quae nesciunt
            eligendi, voluptatum repellat! Minus saepe repellat accusantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sapiente mollitia corporis eaque suscipit nesciunt, maxime vitae
            non veritatis delectus, voluptatem autem reiciendis! Praesentium
            laudantium vero dolor natus! Asperiores, deleniti vel!
          </p>
          <Link to="/resources" className="button">Helpful Resources</Link>
        </div>
        <div className="img-right">
          <img src={bucketTwoImage} alt="How To Get Started" />
        </div>
      </div>
    )
  }
}

export default HomeBucketTwoContainer;