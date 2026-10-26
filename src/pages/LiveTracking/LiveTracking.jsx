import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LiveTracking.css';

const LiveTracking = () => {
  const navigate = useNavigate();

  return (
    <div className="tracking-page container">
      
      <div className="tracking-header">
        <h2>Booking #KD-8472</h2>
        <span className="status-badge">On the Way</span>
      </div>

      <div className="tracking-layout">
        
        {/* Left Side: Status Timeline */}
        <div className="tracking-sidebar">
          
          {/* Provider Info */}
          <div className="provider-info-card">
            <div className="provider-top">
              <img src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Rakesh" className="tracking-avatar" />
              <div>
                <h3>Rakesh Kumar</h3>
                <p className="rating">★ 4.8 (256 reviews)</p>
              </div>
            </div>
            
            <div className="eta-box">
              <p>Estimated Arrival</p>
              <h2>12 min</h2>
            </div>
            <button className="contact-btn">📞 Contact Provider</button>
          </div>

          {/* Timeline */}
          <div className="timeline-card">
            <h3>Booking Status</h3>
            <div className="timeline">
              <div className="timeline-item completed">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Booking Confirmed</h4>
                </div>
              </div>
              <div className="timeline-item completed">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Provider Assigned</h4>
                </div>
              </div>
              <div className="timeline-item active">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>On the Way</h4>
                  <p>Provider is heading to your location</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Service Started</h4>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Map Area */}
        <div className="tracking-map-area">
          {/* Ek dummy map image */}
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Map" className="map-bg" />
          
          <div className="map-marker provider-marker">🚗</div>
          <div className="map-marker user-marker">🏠</div>

          <button className="back-to-home-btn" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>

      </div>
    </div>
  );
};

export default LiveTracking;