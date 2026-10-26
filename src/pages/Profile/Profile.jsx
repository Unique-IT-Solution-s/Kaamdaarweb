import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('Personal Info');

  return (
    <div className="profile-page container">
      <h1 className="page-title">My Profile</h1>

      <div className="profile-layout">
        
        {/* Left Sidebar: Menu */}
        <div className="profile-sidebar">
          <div className="user-summary">
            <div className="user-avatar-large">👨</div>
            <h3>Amit Sharma</h3>
            <p>+91 98288 6572</p>
          </div>

          <ul className="profile-menu">
            {['Personal Info', 'Saved Addresses', 'Payments & Wallet', 'My Reviews', 'Notifications', 'Settings'].map(item => (
              <li 
                key={item} 
                className={activeTab === item ? 'active' : ''}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content Area */}
        <div className="profile-content">
          
          {/* Personal Info Tab */}
          {activeTab === 'Personal Info' && (
            <div className="tab-content">
              <div className="content-header">
                <h2>Personal Information</h2>
                <button className="edit-btn">Edit</button>
              </div>
              
              <div className="info-grid">
                <div className="info-group">
                  <label>Full Name</label>
                  <p>Amit Sharma</p>
                </div>
                <div className="info-group">
                  <label>Phone Number</label>
                  <p>+91 98288 6572</p>
                </div>
                <div className="info-group">
                  <label>Email Address</label>
                  <p>amit.sharma@example.com</p>
                </div>
                <div className="info-group">
                  <label>Date of Birth</label>
                  <p>15 Aug 1995</p>
                </div>
              </div>
            </div>
          )}

          {/* Saved Addresses Tab */}
          {activeTab === 'Saved Addresses' && (
            <div className="tab-content">
              <div className="content-header">
                <h2>Saved Addresses</h2>
                <button className="add-btn">+ Add New Address</button>
              </div>
              
              <div className="address-card">
                <div className="address-header">
                  <h4>Home</h4>
                  <span className="default-tag">Default</span>
                </div>
                <p>125, Malviya Nagar, Jaipur - 302017</p>
                <div className="address-actions">
                  <button className="text-btn">Edit</button>
                  <button className="text-btn danger">Delete</button>
                </div>
              </div>

              <div className="address-card">
                <div className="address-header">
                  <h4>Office</h4>
                </div>
                <p>Plot 12, Tonk Road, Jaipur - 302018</p>
                <div className="address-actions">
                  <button className="text-btn">Edit</button>
                  <button className="text-btn danger">Delete</button>
                </div>
              </div>
            </div>
          )}

          {/* Other Tabs Placeholder */}
          {activeTab !== 'Personal Info' && activeTab !== 'Saved Addresses' && (
            <div className="tab-content empty-tab">
              <h2>{activeTab}</h2>
              <p>Content for {activeTab} will appear here.</p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default Profile;