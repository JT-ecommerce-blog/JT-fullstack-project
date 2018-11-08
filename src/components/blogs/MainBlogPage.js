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
  //   fetch('http://localhost:3001/api/blogs')
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       let blog = data.response.map((post) => {
  //         return (
  //           <div key={post.response}></div>
  //         )
  //       })
  //     })
  //     this.setState({ blogAuthor: blog });
  // }
  // componentDidMount() {
  //   fetch('/api/posts')
  //   .then(results => {
  //     return results.json();
  // }

  render() {
    return(
      <div>
        {this.state.blogAuthor}
      </div>
    );
  }
}

export default MainBlogPage;