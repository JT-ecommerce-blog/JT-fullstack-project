import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../../scss/Nav.scss';

const FontAwesome = require('react-fontawesome');

const Home = () => (
  <div>
    
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

const Discussion= () => (
  <div>
    <h3>This will be the discussion board.</h3>
  </div>
);

const Resources = ({ match }) => (
  <div>
    <h2>This will be the resource page.</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Resource} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Resource list:</h3>}
    />
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
                <li><Link to="blog">blog</Link></li>
                <li><Link to="/resources">resources</Link></li>
                <li><Link to="/discussion">discussion</Link></li>
                <li><Link to="/discussion"><FontAwesome name='user' /></Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <br />

      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/resources" component={Resources} />
      <Route path="/discussion" component={Discussion} />
    </div>
  </Router>
);
export default Nav;