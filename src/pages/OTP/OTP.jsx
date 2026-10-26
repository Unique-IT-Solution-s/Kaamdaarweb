import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OTP.css';
import Logo from '../../assets/Kaamdaar_Primary_Logo_400x137.png';

const OTP = () => {
  const navigate = useNavigate();
  
  // 4 digit ke liye state
  const [otp, setOtp] = useState(['', '', '', '']);
  
  // Yahan apna Hardcoded OTP set karein (Aap isko 1234 ya 5678 kuch bhi rakh sakte hain)
  const HARDCODED_OTP = "1234"; 

  const userPhone = localStorage.getItem('userPhone') || '+91 XXXXX XXXXX';

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    
    // Auto-focus next box
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    
    // Check karein ki user ne sahi OTP dala hai ya nahi
    if (enteredOtp === HARDCODED_OTP) {
     // alert("✅ Login Successful!"); // Optional alert
      navigate('/'); // Home page par bhej dein
    } else {
     // alert(`❌ Invalid OTP! Hint: Ye demo hai, isme ${HARDCODED_OTP} daal kar dekhein.`);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="otp-card">
        
        <div className="otp-blue-header">
          <div className="logo-box">
            <img src={Logo} alt="Kaamdaar Logo" className="otp-logo" />
          </div>
        </div>

        <div className="otp-body">
          <h2>Verify OTP</h2>
          <p className="otp-subtext">we have sent a 4-digit OTP to <br/><strong>{userPhone}</strong></p>

          {/* OTP Boxes */}
          <div className="otp-inputs">
            {otp.map((data, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={data}
                  onChange={e => handleChange(e.target, index)}
                  onFocus={e => e.target.select()}
                />
              );
            })}
          </div>

          <p className="resend-text">Resend OTP in <strong>00:44</strong></p>

          <div className="otp-footer">
            <button className="auth-btn" onClick={handleVerify}>
              Continue
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OTP;