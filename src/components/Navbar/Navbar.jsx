import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/Kaamdaar_Primary_Logo_400x137.png';

// 🔽 Logout Icon (SVG)
const LogoutIcon = ({ size = 22 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

// 🔽 User Icon (SVG) — ORANGE
const UserIcon = ({ size = 22, color = "#FF7A00" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userPhone');
    navigate('/');
    window.location.reload();
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false);
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

        <div className="search-input-location">
          <span className="icon">📍</span>
          <select className="location-select">
            <option>Jaipur, Rajasthan</option>
          </select>
        </div>

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

          {/* Mobile ke liye Login/Logout */}
          <li className="mobile-auth-links">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="navbar__logout-btn"
                title="Logout"
                aria-label="Logout"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                <LogoutIcon size={20} />
                <span>Logout</span>
              </button>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
                <Link to="/login" className="navbar__login" onClick={() => handleLinkClick('/login')} style={{ display: 'block' }}>Login</Link>
              </div>
            )}
          </li>
        </ul>

        {/* 🔽 USER LOGO — links ke baad, sirf login ke baad */}
        {isLoggedIn && (
          <Link
            to="/profile"
            className="navbar__user-icon"
            title="User Profile"
            aria-label="User Profile"
            onClick={() => handleLinkClick('/profile')}
          >
            <UserIcon size={24} />
          </Link>
        )}

        {/* Desktop Auth Buttons */}
        <div className="navbar__auth desktop-auth">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="navbar__logout-btn"
              title="Logout"
              aria-label="Logout"
            >
              <LogoutIcon size={22} />
            </button>
          ) : (
            <>
              <Link to="/login" className="navbar__login">Login</Link>
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