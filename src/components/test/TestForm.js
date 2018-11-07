import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class TestForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: '',
      comment: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState ({
      [e.target.name]: e.target.value
    });
  }

  routeRedirect(e) {
    e.preventDefault();
    this.props.history.push('/');
  }

  //posting to database
  submitForm = async e => {
    e.preventDefault();
    await fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        comment: this.state.comment,
        author: this.state.author
      }),
    });
    this.props.history.push('/');
  }
  

  render() {
    return (
      <form onSubmit={this.routeRedirect.bind(this)}>
        <div className="form">
          <label htmlFor="author">Author</label>
          <input value={this.state.author} onChange={this.onInputChange} type="text" id="author" name="author" />
        </div>
        <div className="form">
          <label htmlFor="comment">Comment</label>
        <input value={this.state.comment} onChange={this.onInputChange} type="text" id="comment" name="comment" />
        </div>
        <div className="form">
        <button type="submit" onClick={this.submitForm}>New Data</button>
        </div>
      </form>
    );
  }
}

export default withRouter(TestForm);