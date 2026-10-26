import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/Kaamdaar_Primary_Logo_400x137.png'; 

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userPhone');
    //alert("Logged out successfully!");
    navigate('/');
    window.location.reload();
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false); // Menu band karne ke liye
  };

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={() => handleLinkClick('/')}>
          <span className="navbar__logo-icon">
            <img src={Logo} alt="Kaamdaar-Logo" style={{ height: '50px', objectFit: 'contain' }} />
          </span>
        </Link>

        {/* Links (Desktop & Mobile) */}
        <ul className={`navbar__links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <Link to="/" className={activeLink === '/' ? 'active-link' : ''} onClick={() => handleLinkClick('/')}>Home</Link>
          </li>
          <li>
            <Link to="/search" className={activeLink === '/search' ? 'active-link' : ''} onClick={() => handleLinkClick('/search')}>Services</Link>
          </li>
          <li>
            <Link to="/my-bookings" className={activeLink === '/my-bookings' ? 'active-link' : ''} onClick={() => handleLinkClick('/my-bookings')}>My Bookings</Link>
          </li>
          <li>
            <Link to="/profile" className={activeLink === '/profile' ? 'active-link' : ''} onClick={() => handleLinkClick('/profile')}>Profile</Link>
          </li>
          <li>
            <Link to="/help" className={activeLink === '/help' ? 'active-link' : ''} onClick={() => handleLinkClick('/help')}>Help</Link>
          </li>

          {/* Mobile ke liye Login/Signup (Desktop par nahi dikhega) */}
          <li className="mobile-auth-links">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="navbar__logout-btn" style={{ width: '100%' }}>
                Logout
              </button>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
                <Link to="/login" className="navbar__login" onClick={() => handleLinkClick('/login')} style={{ display: 'block' }}>Login</Link>
                <Link to="/login" className="navbar__signup" onClick={() => handleLinkClick('/login')} style={{ display: 'block', margin: '0 20px' }}>Sign Up</Link>
              </div>
            )}
          </li>
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="navbar__auth desktop-auth">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="navbar__logout-btn">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="navbar__login">Login</Link>
              <Link to="/login" className="navbar__signup">Sign Up</Link>
            </>
          )}
        </div>

        {/* Hamburger Icon (Mobile only) */}
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
          <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
          <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;