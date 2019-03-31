import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavBar = (props) => {

  const loggedIn = () => {
    return (
      <div>
        <div >
          <Link to='/'>TicketBits</Link>

          <section>
            <Link to='/events'>Browse Events</Link>
            <button>Organize</button>
            <button>Help</button>
            <Link to='/events/new'>Create Event</Link>

            <div> 
              <img src={props.currentUser.img_url} alt="" />
              {/* how to make this conditional? Can I set up a default photo in the database? */}
              <button>{props.currentUser.first_name}</button>
            </div>
            <button onClick={() => props.logout().then(() => props.history.push(`/`))}>Logout</button>
            {/* How to put this inside of dropdown? */}
          </section>
        </div>

      </div>
    );
  };

  const loggedOut = () => {
    return (
      <div>
        <div>
          <Link to='/'>TicketBits</Link>

          <section>
            <Link to='/events'>Browse Events</Link>
            <button>Organize</button>
            <button>Help</button>
            <Link to='/events/new'>Create Event</Link>

            <Link to='/getStarted'>Sign In</Link>
          </section>
        </div>

      </div>
    );
  };

  return props.currentUser ? loggedIn() : loggedOut();
};

export default withRouter(NavBar);