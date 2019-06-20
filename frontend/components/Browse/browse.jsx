import React from 'react';
import EventIndex from '../Events/event_index_container';
import Footer from '../Footer/footer';

const Browse = ({ logout }) => {
  if (typeof (currentUser) !== "undefined") {
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
          <div id="master-box-for-event-index">
            <EventIndex />
          </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
};

export default Browse;
