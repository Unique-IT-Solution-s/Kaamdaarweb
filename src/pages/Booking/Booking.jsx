import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
  const navigate = useNavigate();

  return (
    <div className="booking-page">
      
      {/* --- TOP STEPPER --- */}
      <div className="stepper-container container">
        <div className="stepper">
          <div className="step completed">
            <div className="step-circle">✓</div>
            <span>Service</span>
          </div>
          <div className="step-line active"></div>
          <div className="step active">
            <div className="step-circle">2</div>
            <span>Address & Date</span>
          </div>
          <div className="step-line"></div>
          <div className="step">
            <div className="step-circle">3</div>
            <span>Time & Review</span>
          </div>
          <div className="step-line"></div>
          <div className="step">
            <div className="step-circle">4</div>
            <span>Payment</span>
          </div>
        </div>
      </div>

      {/* --- MAIN LAYOUT --- */}
      <div className="container booking-layout">
        
        {/* LEFT SIDE: FORM */}
        <div className="booking-form-area">
          
          {/* Selected Service Card */}
          <div className="form-section">
            <h3 className="section-title">Selected Service</h3>
            <div className="selected-service-card">
              <img src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Rakesh" className="service-img" />
              <div className="service-details">
                <h4>AC Service</h4>
                <p>by Rakesh Kumar</p>
              </div>
              <div className="service-price">₹299</div>
            </div>
          </div>

          {/* Address Section */}
          <div className="form-section">
            <div className="section-header">
              <h3 className="section-title">Service Address</h3>
              <button className="add-new-btn">+ Add New Address</button>
            </div>
            
            <div className="address-option active">
              <div className="radio-circle"></div>
              <div className="address-info">
                <h4>Home</h4>
                <p>125, Malviya Nagar, Jaipur - 302017</p>
              </div>
            </div>
            <div className="address-option">
              <div className="radio-circle"></div>
              <div className="address-info">
                <h4>Office</h4>
                <p>Plot 12, Tonk Road, Jaipur - 302018</p>
              </div>
            </div>
          </div>

          {/* Date & Time Section */}
          <div className="form-section">
            <h3 className="section-title">Select Date & Time</h3>
            
            <div className="date-selector">
              <div className="date-box active">
                <span>Thu</span>
                <strong>9 Oct</strong>
              </div>
              <div className="date-box">
                <span>Fri</span>
                <strong>10 Oct</strong>
              </div>
              <div className="date-box">
                <span>Sat</span>
                <strong>11 Oct</strong>
              </div>
              <div className="date-box">
                <span>Sun</span>
                <strong>12 Oct</strong>
              </div>
            </div>

            <div className="time-selector">
              <div className="time-box">10:00 AM - 12:00 PM</div>
              <div className="time-box active">12:00 PM - 02:00 PM</div>
              <div className="time-box">02:00 PM - 04:00 PM</div>
              <div className="time-box">04:00 PM - 06:00 PM</div>
              <div className="time-box">06:00 PM - 08:00 PM</div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE: SUMMARY */}
        <div className="booking-summary-area">
          <div className="summary-card">
            <h3 className="summary-title">Booking Summary</h3>
            
            <div className="summary-row">
              <span>Service</span>
              <span className="bold">AC Service</span>
            </div>
            <div className="summary-row">
              <span>Provider</span>
              <span className="bold">Rakesh Kumar</span>
            </div>
            <div className="summary-row">
              <span>Date & Time</span>
              <span className="bold">Thu, 9 Oct | 12:00 PM</span>
            </div>
            
            <div className="summary-divider"></div>
            
            <div className="summary-row total-row">
              <span>Total Amount</span>
              <span>₹299</span>
            </div>

            <button className="proceed-btn" onClick={() => navigate('/tracking')}>
              Continue
            </button>
            
            <p className="secure-text">🔒 100% Secure & Safe</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Booking;  // <--- YE LINE SABSE ZAROORI HAI