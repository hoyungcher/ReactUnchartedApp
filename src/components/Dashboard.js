import React, { Component } from 'react';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  handleLogoutClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true} )
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <h2>Welcome, {this.props.userData.first_name}</h2>
        <button onClick={() => this.handleLogoutClick()}>Log out</button>
      </div>
    );
  }
}

