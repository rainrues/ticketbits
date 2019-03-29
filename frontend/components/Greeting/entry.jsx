import React from 'react';
import { Link } from 'react-router-dom';

const EntryForm = ({ currentUser, logout }) => {
  return (
    <div>
      <h2>Let's get started</h2>
      <p>Use facebook or email to get started.</p>
      <input type="text"/>
      <Link to="/getstarted" >Get Started</Link>
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

export default EntryForm;
