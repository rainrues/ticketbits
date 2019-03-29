import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  if (currentUser) {
    return (
      <div>
        <h3>Welcome, {currentUser.username}</h3>
        <button onClick={logout}>Logout</button>
      </div>
    )
  } 
  else {
    return (
      <div>
        <Link to="/signup" >Sign Up</Link>
        <Link to="/login" >Log In</Link>
      </div>
    )
  }
};

export default Greeting;
