import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// refactor later into shared return
// Return all of the main things and then have a turnary 
// opporator in the return that adds the additional butons
const NavBar = (props) => {

  const loggedIn = () => {
    return (
      <div id="header-main-section">
        {/* <div id="navbar-left"> */}
          <Link className="ticketbits-home-icon" to='/'>ticketbits</Link>
        {/* </div> */}

        <section id="navbar-right">
          <Link  className="navbar-item" id="browse-events-navbar" to='/events'>Browse Events</Link>
          <Link className="navbar-item" id="organize-navbar" to="#">Organize</Link>
          <Link className="navbar-item" id="help-navbar" to="#">Help</Link>
          <Link  className="navbar-item" id="create-event-navbar" to='/events/new'>Create Event</Link>

          <div> 
            {/* <img className="mini-pic" src={props.currentUser.img_url} alt="" /> */}
            {/* how to make this conditional? Can I set up a default photo in the database? */}
            <Link className="navbar-item" id="users-name"to="#">{props.currentUser.first_name}</Link>
          </div>
          <Link className="navbar-item" to="#"id="logout-navbar" onClick={() => props.logout().then(() => props.history.push(`/`))}>Logout</Link>
          {/* How to put this inside of dropdown? */}
        </section>
      </div>
    );
  };

  const loggedOut = () => {
    return (
      <div id="header-main-section">
        {/* <div id="navbar-left"> */}
        <Link className="ticketbits-home-icon" to='/'>ticketbits</Link>
        {/* </div> */}

        <section id="navbar-right">
          <Link  className="navbar-item" id="browse-events-navbar" to='/events'>Browse Events</Link>
          <Link className="navbar-item" id="help-navbar" to="#">Help</Link>

          <Link className="navbar-item" id="signin-navbar" to='/getStarted'>Sign In</Link>
        </section>
      </div>
    );
  };

  return props.currentUser ? loggedIn() : loggedOut();
};

export default withRouter(NavBar);