import React, { Component } from 'react';

import accountCreation from '/Users/jeffhorner/Development/Projects/the-cource/JT-fullstack-project/src/assets/images/account-creation.png';
import store from '/Users/jeffhorner/Development/Projects/the-cource/JT-fullstack-project/src/assets/images/store.png';

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
        <a href="/contact">Have A Question?</a>
      </div>;
  }
}

export default ComingSoon;