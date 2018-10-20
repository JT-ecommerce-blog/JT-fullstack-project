import React, { Component } from 'react';

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
          </div>
          <div className="bucket">
            <h3>Store</h3>
          </div>
        </div>
        <a href="#">Have A Question?</a>
      </div>;
  }
}

export default ComingSoon;