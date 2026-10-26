import React, { useState } from 'react';
import './HelpSupport.css';

const HelpSupport = () => {
  // FAQ ko open/close karne ke liye state
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "How do I book a service?", a: "You can search for your required service on the home page, select a verified provider, and click 'Book Now' to schedule a time." },
    { q: "How can I track my provider?", a: "Once your booking is confirmed, go to 'My Bookings' and click on 'Track' to see the live location of your provider." },
    { q: "What if I need to cancel my booking?", a: "You can cancel your booking from the 'My Bookings' page up to 2 hours before the scheduled time without any penalty." },
    { q: "Are the professionals verified?", a: "Yes, all our professionals go through a strict background check and verification process before joining the platform." }
  ];

  return (
    <div className="help-page">
      
      {/* --- HERO SECTION --- */}
      <div className="help-hero">
        <div className="container">
          <h1>How can we help you?</h1>
          <p>Find answers to your questions or get in touch with our support team.</p>
          
          <div className="help-search">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search for help (e.g., cancellation, refunds)" />
            <button>Search</button>
          </div>
        </div>
      </div>

      <div className="container help-content">
        
        {/* --- QUICK ACTIONS --- */}
        <div className="quick-actions">
          <div className="action-card">
            <span className="action-icon">💬</span>
            <h3>Chat with Us</h3>
            <p>Get instant help from our team</p>
          </div>
          <div className="action-card">
            <span className="action-icon">📞</span>
            <h3>Call Support</h3>
            <p>Available 24/7 for your queries</p>
          </div>
          <div className="action-card">
            <span className="action-icon">📧</span>
            <h3>Email Us</h3>
            <p>We will reply within 24 hours</p>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                className={`faq-item ${openFaq === index ? 'active' : ''}`} 
                key={index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="faq-question">
                  <h4>{faq.q}</h4>
                  <span className="faq-toggle">{openFaq === index ? '−' : '+'}</span>
                </div>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HelpSupport;