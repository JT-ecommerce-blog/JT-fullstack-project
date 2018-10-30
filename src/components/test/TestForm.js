import React, { Component } from 'react';

class TestForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      author: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState ({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <form action="/api/posts" method="post">
        <div className="form">
          <label htmlFor="author">Author</label>
          <input value={this.state.author} onChange={this.onInputChange} type="text" id="author" name="author"/>
        </div>
        <div className="form">
          <label htmlFor="comment">Comment</label>
          <input value={this.state.comment} onChange={this.onInputChange} type="text" id="comment" name="comment"/>
        </div>
        <div className="form">
          <button type="submit">New Data</button>
        </div>
      </form>
    );
  }
}

export default TestForm;