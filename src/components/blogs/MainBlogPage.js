import React, { Component } from 'react';

class MainBlogPage extends Component {

  constructor() {
    super();
    this.state = {
      blogAuthor: '',
      blogComment: '',
      data: null
    }
  }

  // componentDidMount() {
  //   fetch('/api/posts')
  //   .then(results => {
  //     return results.json();
  // }

  render() {
    return(
      <div>
        blog page content
      </div>
    );
  }
}

export default MainBlogPage;