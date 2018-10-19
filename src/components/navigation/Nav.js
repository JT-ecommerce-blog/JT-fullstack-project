import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from '../homepage/Homepage.js'

import '../../scss/styles.scss';

const FontAwesome = require('react-fontawesome');

const Home = () => (
  <div>
    <HomePage />
  </div>
);

const Blog = () => (
  <div>
    <h3>This will be the blog page.</h3>
  </div>
);

const Resource = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Discussion = () => (
  <div>
    <h3>This will be the discussion board.</h3>
  </div>
);

const Account = () => (
  <div>
    <h3>This will be the account/profile page.</h3>
  </div>
);

const Nav = () => (
  <Router>
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">The Cource</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
                <li><Link to="/blog">blog</Link></li>
                <li><Link to="/resources">resources</Link></li>
                <li><Link to="/discussion">discussion</Link></li>
                <li><Link to="/account"><FontAwesome name='user' /></Link></li>
            </ul>
          </div>

          <button type="button" className="navbar-toggle toggle-desktop collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

        </div>
      </nav>

      <br />

      <Route exact path="/" component = {Home} />
      <Route path="/blog" component = {Blog} />
      <Route path="/resources" component = {Resource} />
      <Route path="/discussion" component = {Discussion} />
      <Route path="/account" component = {Account} />
    </div>
  </Router>
);
export default Nav;