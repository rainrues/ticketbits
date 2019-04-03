import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// refactor later into shared return
const Footer = (props) => {
  return (
    <div id="main-footer-body">
      <div id="footer-copyright" className="footer-text-element" >
        <p> © 2019 TicketBits </p>
      </div>
      <div id="footer-bullet-points">
        <ul id="footer-bullet-points-ul">
          <li><Link className="footer-text-element" to="#">About</Link></li>
          <li>•</li>
          <li><Link className="footer-text-element" to="#">Blog</Link></li>
          <li>•</li>
          <li><a className="footer-text-element" href="https://github.com/rainrues/ticketbits">Help</a></li>
          <li>•</li>
          <li><a className="footer-text-element" href="https://www.linkedin.com/in/rain-rues-08560854/">Linked In</a></li>
          <li>•</li>
          <li><a className="footer-text-element" href="">Personal Website</a></li>
          <li>•</li>
          <li><a className="footer-text-element" href="https://github.com/rainrues">Github</a></li>
          <li>•</li>
          <li><Link className="footer-text-element" to="#">Security</Link></li>
          <li>•</li>
          <li><Link className="footer-text-element" to="#">Terms</Link></li>
          <li>•</li>
          <li><Link className="footer-text-element" to="#">Cookies</Link> </li>
        </ul>
      </div>
      <div id="footer-location">
        <Link className="footer-text-element" to="#" >United States</Link>
      </div>
    </div>
  );
}

export default withRouter(Footer);