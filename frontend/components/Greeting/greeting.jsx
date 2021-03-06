import React from 'react';
import EventIndex from '../Events/event_index_container';
import Footer from '../Footer/footer';

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
        <div>
          <form id="splash-page-search-bar">
            <div className="splash-page-search-item" id="splash-page-looking-for">
              <div><p>Looking for</p></div>
              <div>
                <input placeholder="Event" className="splash-page-input" type="text" name="" id=""/>
              </div>
            </div>
            <div className="splash-page-search-item" id="splash-page-in">
              <div><p>In</p></div>
              <div>
                <input placeholder="New York" className="splash-page-input" type="text"/>
              </div>
            </div>
            <div className="splash-page-search-item">
              <div><p>On</p></div>
              <div>
                <input placeholder="Any Date" className="splash-page-input" type="text"/>
              </div>
            </div>
            <div id="splash-page-search-submit">
              <button id="splash-page-search-submit-button" type="submit">
                <img src={window.searchImageURL}/>
              </button>
            </div>
          </form>
          <div id="master-box-for-event-index">
            <EventIndex />
          </div>
        </div>
      <div>
        <Footer />
      </div>
      </div>
    )
  }
};

export default Greeting;
