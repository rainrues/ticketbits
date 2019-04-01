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
        <Link className="footer-text-element" to="#">About</Link>
        <li></li>
        <Link className="footer-text-element" to="#">Blog</Link>
        <li></li>
        <Link className="footer-text-element" to="#">Help</Link>
        <li></li>
        <Link className="footer-text-element" to="#">Careers</Link>
        <li></li>
        <Link className="footer-text-element" to="#">Press</Link>
        <li></li>
        <Link className="footer-text-element" to="#">Investors</Link>
        <li></li>
        <Link className="footer-text-element" to="#">Security</Link>
        <li></li>
        <Link className="footer-text-element" to="#">Developers</Link>
        <li></li>
        <Link className="footer-text-element" to="#">Terms</Link>
        <li></li>
        <Link className="footer-text-element" to="#">Privacy</Link>
        <li></li>
        <Link className="footer-text-element" to="#">Cookies</Link> 
        </ul>
      </div>
      <div id="footer-location">
        <Link className="footer-text-element" to="#" >United States</Link>
      </div>
    </div>
  );
}

export default withRouter(Footer);