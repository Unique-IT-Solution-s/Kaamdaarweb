import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const navigate = useNavigate();

  // Login check karne ka function
  const handleBookNow = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      //alert("Please login to book a service!"); 
      navigate('/login');
    } else {
      navigate('/booking');
    }
  };

  return (
    <div className="detail-page">
      
      {/* Breadcrumb */}
      <div className="container breadcrumb">
        Home &gt; AC Service &gt; <span>Rakesh Kumar</span>
      </div>

      <div className="container detail-layout">
        
        {/* --- LEFT SIDE (Content) --- */}
        <div className="detail-content">
          
          {/* Provider Header */}
          <div className="provider-main-header">
            <div className="provider-image-large">
              <img src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Rakesh Kumar" />
            </div>
            
            <div className="provider-header-info">
              <h1>Rakesh Kumar</h1>
              <p className="verified-badge">✅ Verified Professional</p>
              <p className="rating-text"><span className="star">★ 4.8</span> (256 reviews)</p>
              
              <div className="provider-meta">
                <p>📍 2.1 km away</p>
                <p>🎓 5+ Years Experience</p>
                <p>💼 500+ Jobs Completed</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="detail-tabs">
            <span className="active">Overview</span>
            <span>Services & Pricing</span>
            <span>Reviews</span>
            <span>Gallery</span>
            <span>FAQs</span>
          </div>

          {/* About Section */}
          <div className="about-section">
            <h2>About</h2>
            <p>Professional AC service technician with 5+ years of experience in AC repair, installation and maintenance. Specialized in split AC, window AC and commercial AC systems.</p>
          </div>

          {/* Features Badges */}
          <div className="features-badges">
            <span className="badge">✅ Background Verified</span>
            <span className="badge">✅ Trained Professional</span>
            <span className="badge">✅ On-time Service</span>
            <span className="badge">✅ Quality Guarantee</span>
          </div>

          {/* Customer Reviews */}
          <div className="reviews-section">
            <h2>Customer Reviews</h2>
            
            <div className="reviews-summary">
              <div className="rating-big">
                <h3>4.8</h3>
                <p>⭐⭐⭐⭐⭐</p>
                <span>256 reviews</span>
              </div>
              
              <div className="rating-bars">
                <div className="bar-row"><span>5 ★</span> <div className="bar-bg"><div className="bar-fill" style={{width: '72%', background: '#fbbf24'}}></div></div> 72%</div>
                <div className="bar-row"><span>4 ★</span> <div className="bar-bg"><div className="bar-fill" style={{width: '20%', background: '#fbbf24'}}></div></div> 20%</div>
                <div className="bar-row"><span>3 ★</span> <div className="bar-bg"><div className="bar-fill" style={{width: '6%', background: '#fbbf24'}}></div></div> 6%</div>
                <div className="bar-row"><span>2 ★</span> <div className="bar-bg"><div className="bar-fill" style={{width: '1%', background: '#fbbf24'}}></div></div> 1%</div>
                <div className="bar-row"><span>1 ★</span> <div className="bar-bg"><div className="bar-fill" style={{width: '1%', background: '#fbbf24'}}></div></div> 1%</div>
              </div>
            </div>

            {/* Single Review */}
            <div className="single-review">
              <div className="review-user">
                <div className="user-avatar">👩</div>
                <div>
                  <h4>Priya Sharma</h4>
                  <p>⭐⭐⭐⭐⭐ 5 days ago</p>
                </div>
              </div>
              <p className="review-text">"Very professional service. Arrived on time and did a great job."</p>
            </div>
          </div>

        </div>

        {/* --- RIGHT SIDE (Booking Card) --- */}
        <div className="detail-sidebar">
          <div className="booking-card">
            
            <div className="booking-header">
              <h2>AC Service</h2>
              <div className="price"><span>₹299</span> (Starting Price)</div>
            </div>

            <div className="booking-includes">
              <h4>Service Includes</h4>
              <p>✔ Complete AC cleaning</p>
              <p>✔ Filter cleaning</p>
              <p>✔ Performance check</p>
              <p>✔ Basic gas pressure check</p>
            </div>

            <hr />

            <div className="date-time-select">
              <h4>Select Date</h4>
              <div className="date-grid">
                <div className="date-box active"><span>Thu</span><strong>10 Oct</strong></div>
                <div className="date-box"><span>Fri</span><strong>11 Oct</strong></div>
                <div className="date-box"><span>Sat</span><strong>12 Oct</strong></div>
                <div className="date-box"><span>Sun</span><strong>13 Oct</strong></div>
              </div>

              <h4 style={{marginTop: '20px'}}>Select Time</h4>
              <div className="time-grid">
                <div className="time-box">10:00 AM</div>
                <div className="time-box active">12:00 PM</div>
                <div className="time-box">02:00 PM</div>
                <div className="time-box">04:00 PM</div>
                <div className="time-box">06:00 PM</div>
                <div className="time-box">08:00 PM</div>
              </div>
            </div>

            {/* Yahan handleBookNow function laga diya hai */}
            <button className="book-now-btn" onClick={handleBookNow}>
              Book Now
            </button>
            
            <button className="chat-btn">
              💬 Chat with Provider
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetail;