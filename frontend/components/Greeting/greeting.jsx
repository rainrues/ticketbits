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
        <div>
          <img id="splashimage-1" src={window.splashImageURL} alt="Do more of what you love"/>
        </div>
        <form id="splash-page-search-bar">
          <div className="splash-page-search-item" id="splash-page-looking-for">
            <div><p>Looking for</p></div>
            <div>
              <input className="splash-page-input" type="text" name="" id=""/>
            </div>
          </div>
          <div className="splash-page-search-item" id="splash-page-in">
            <div><p>In</p></div>
            <div>
              <input className="splash-page-input" type="text"/>
            </div>
          </div>
          <div className="splash-page-search-item">
            <div><p>On</p></div>
            <div>
              <input className="splash-page-input" type="text"/>
            </div>
          </div>
          <div id="splash-page-search-submit">
            <button id="splash-page-search-submit-button" type="submit">
              <img src={window.searchImageURL}/>
            </button>
          </div>
        </form>
      </div>
    )
  }
};

export default Greeting;
