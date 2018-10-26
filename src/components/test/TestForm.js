import React, { Component } from 'react';

class TestForm extends Component {
  render() {
    return(
      <form action="/insert" method="post">
        <div className="form">
          <label for="title">Title</label>
          <input type="text" id="title" name="title"/>
        </div>
        <div className="form">
          <label for="content">Content</label>
          <input type="text" id="content" name="content"/>
        </div>
        <div className="form">
          <label for="author">Author</label>
          <input type="text" id="author" name="author"/>
        </div>
        <div className="form">
          <button type="submit">New Data</button>
        </div>
      </form>
    );
  }
}

export default TestForm;