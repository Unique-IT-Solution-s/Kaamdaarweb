import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyBookings.css';

const MyBookings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Upcoming');

  // Dummy Data for Bookings
  const bookings = [
    {
      id: 'KD-8472',
      service: 'AC Service & Repair',
      provider: 'Rakesh Kumar',
      date: '10 Oct 2026, 12:00 PM',
      price: '299',
      status: 'On the Way',
      type: 'Upcoming'
    },
    {
      id: 'KD-8410',
      service: 'Plumber',
      provider: 'Suresh Sharma',
      date: '05 Oct 2026, 10:00 AM',
      price: '199',
      status: 'Completed',
      type: 'Completed'
    },
    {
      id: 'KD-8301',
      service: 'Home Cleaning',
      provider: 'Neha Cleaners',
      date: '28 Sep 2026, 02:00 PM',
      price: '499',
      status: 'Cancelled',
      type: 'Cancelled'
    }
  ];

  // Filter bookings based on active tab
  const filteredBookings = bookings.filter(b => b.type === activeTab);

  return (
    <div className="my-bookings-page container">
      <h1 className="page-title">My Bookings</h1>

      {/* Tabs */}
      <div className="booking-tabs">
        {['Upcoming', 'Completed', 'Cancelled'].map(tab => (
          <button 
            key={tab} 
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Bookings List */}
      <div className="bookings-list">
        {filteredBookings.length === 0 ? (
          <div className="empty-state">
            <p>No {activeTab.toLowerCase()} bookings found.</p>
          </div>
        ) : (
          filteredBookings.map(booking => (
            <div className="booking-card" key={booking.id}>
              
              {/* Card Header */}
              <div className="card-header">
                <div className="header-left">
                  <span className="booking-id">Booking #{booking.id}</span>
                  <h3>{booking.service}</h3>
                  <p>by {booking.provider}</p>
                </div>
                <div className={`status-badge ${booking.status.replace(/\s+/g, '-').toLowerCase()}`}>
                  {booking.status}
                </div>
              </div>

              {/* Card Body */}
              <div className="card-body">
                <div className="info-row">
                  <span>📅 Date & Time:</span>
                  <strong>{booking.date}</strong>
                </div>
                <div className="info-row">
                  <span>💰 Total Amount:</span>
                  <strong>₹{booking.price}</strong>
                </div>
              </div>

              {/* Card Footer (Actions) */}
              <div className="card-footer">
                {booking.type === 'Upcoming' && (
                  <button className="action-btn primary" onClick={() => navigate('/tracking')}>
                    Track Provider
                  </button>
                )}
                {booking.type === 'Completed' && (
                  <button className="action-btn outline">
                    Book Again
                  </button>
                )}
                {booking.type === 'Cancelled' && (
                  <button className="action-btn outline" disabled>
                    Cancelled
                  </button>
                )}
                <button className="action-btn text">View Details</button>
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyBookings;