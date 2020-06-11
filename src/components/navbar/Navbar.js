import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({loggedInStatus, userData}) => {
  return (
    <div>
      <Link to='/'><h1>Uncharted</h1></Link>
      { loggedInStatus === "LOGGED_IN" ?
        <div>
          <p>{userData.first_name}</p>
          <p>Logout</p>
        </div> :
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/registration'>Register</Link>
        </div>
      }
    </div>
  )
}

export default Navbar;
