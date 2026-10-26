import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Logo from '../../assets/Kaamdaar_Primary_Logo_400x137.png'; 

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // User ko logged in mark kar diya
    localStorage.setItem('isLoggedIn', 'true'); 
    // OTP page par bhej dein
    navigate('/otp');
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        
        {/* Header */}
        <div className="auth-header">
          <img src={Logo} alt="Kaamdaar" className="auth-logo" />
          <h2>Create an Account</h2>
        </div>

        {/* Form */}
        <div className="auth-form">
          <label>Enter Your Mobile Number</label>
          <div className="input-group">
            <span className="country-code">IN +91</span>
            <input type="tel" placeholder="Enter 10-digit number" />
          </div>
        </div>

        {/* Footer Button */}
        <div className="auth-footer">
          {/* Yahan click karne par handleLogin function chalega */}
          <button className="auth-btn" onClick={handleLogin}>
            Continue
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;