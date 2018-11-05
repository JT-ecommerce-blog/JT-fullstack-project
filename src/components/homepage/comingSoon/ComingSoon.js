import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import accountCreation from '../../../assets/images/account-creation.png';
import store from "../../../assets/images/store.png";

class ComingSoon extends Component {
  render() {
    return <div id="coming-soon">
        <h1>Coming Soon.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laboriosam ducimus quos molestiae, optio natus architecto
          necessitatibus reiciendis deserunt deleniti at quasi consequuntur
          repellendus iure aut consectetur accusamus quas cumque? Quam.
        </p>
        <div className="inner-buckets">
          <div className="bucket">
            <h3>Account Creation</h3>
            <img src={accountCreation} alt="Account Creation coming soon" />
          </div>
          <div className="bucket">
            <h3>Store</h3>
            <img src={store} alt="Online Store coming soon" />
          </div>
        </div>
        <Link to="/contact">Have A Question?</Link>
      </div>;
  }
}

export default ComingSoon;