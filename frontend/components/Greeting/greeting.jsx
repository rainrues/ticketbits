import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({logout}) => {
  if (typeof(currentUser) !== "undefined") {
    return (
      <div>
        <h3>Welcome, {currentUser.first_name}</h3>
        <button onClick={logout}>Logout</button>
      </div>
    )
  } 
  else {
    return (
      <div>
        <Link to="/getstarted" >Sign Up</Link>
      </div>
    )
  }
};

export default Greeting;
