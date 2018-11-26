import React, { Component } from 'react';
import axios from 'axios';

class MainBlogPage extends Component {

  constructor() {
    super();
    this.state = {
      blogAuthor: '',
      blogComment: '',
      blogs: []
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:3001/api/blogs')
      .then(res => {
        const blogs = res.data
        this.setState({ blogs })
        console.log(this.state.blogs);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return(
      <div>
        {
          this.state.blogs.map((blogs, index) =>  {
            return (
              <div key={index}>
                <h3>{blogs.author}</h3>
                <p>{blogs.comment}</p>

                <p>oiasdjfoisjafoisajdfoiasfjoiafj</p>
                <p>asdoifjosaijfioasfjosidafjaoidsfj</p>
              </div> 
            );
          })
        }
      </div>
    );
  }
}

export default MainBlogPage;