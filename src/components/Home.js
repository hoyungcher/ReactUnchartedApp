import React, { Component } from 'react';
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <Link to='/registration' >Registration</Link>
        <Link to='/login' >Login</Link>
        {this.props.loggedInStatus === "LOGGED_IN" ? <Link to='/dashboard'>Dashboard</Link> : null }
        <h1>Status: {this.props.loggedInStatus}</h1>
      </div>
    );
  }
}
