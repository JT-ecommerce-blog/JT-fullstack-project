import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from '../homepage/Homepage.js';

import '../../scss/styles.scss';

import logo from '../../assets/images/logo.png';

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

class Nav extends Component {

  componentDidMount() {
    ReactDOM.findDOMNode(this).classList.add("nav-animation");
  }

  removeAnimation = () => {
    let el = ReactDOM.findDOMNode(this);
    el.classList.remove("nav-animation");
    setTimeout (function () {
      el.classList.add("nav-animation");
    }, 100);
    
  }

  render(){
    return(
      <Router>
        <div id="main-nav-container">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/"><img src={logo} alt="The Cource logo"/></Link>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li><Link onClick={this.removeAnimation} to="/blog">blog</Link></li>
                    <li><Link onClick={this.removeAnimation} to="/resources">resources</Link></li>
                    <li><Link onClick={this.removeAnimation} to="/discussion">discussion</Link></li>
                    <li><Link onClick={this.removeAnimation} to="/account"><FontAwesome name='user' /></Link></li>
                </ul>
              </div>
              <div className="desktop-hamburger">
                <button type="button" className="navbar-toggle toggle-desktop collapsed">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
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
  }
}
export default Nav;