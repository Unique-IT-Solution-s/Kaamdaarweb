import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from '../../assets/Kaamdaar_Primary_Logo_400x137.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        
        {/* Column 1: Logo & Info */}
        <div className="footer__col">
          <div className="footer__logo">
            <span>
                <img src={Logo} alt="Kaamdaar-Logo" style={{ height: '60px', objectFit: 'contain' }} />
            </span>
          </div>

          <p className="footer__copyright">© 2026 Kaamdaar. All rights reserved.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer__col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Customer Support */}
        <div className="footer__col">
          <h3>Customer Support</h3>
          <ul>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;