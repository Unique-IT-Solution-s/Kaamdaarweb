import React, { useState } from 'react'; // 1. useState import kiya
import './Home.css';
import { useNavigate } from 'react-router-dom';
import backgroundHeroImage from "../../assets/photofirst.jpg"

const Home = () => {
  const navigate = useNavigate();

  // 2. Search input ki value store karne ke liye state
  const [searchQuery, setSearchQuery] = useState("");

  // 3. Services ko ek variable me nikal liya taaki filter kar sakein
  const allServices = [
    { name: 'AC Service & Repair', icon: '❄️' },
    { name: 'Home Cleaning', icon: '🧹' },
    { name: 'Plumber', icon: '🔧' },
    { name: 'Electrician', icon: '⚡' },
    { name: 'Painter', icon: '🎨' },
    { name: 'Carpenter', icon: '🪚' },
    { name: 'Appliance Repair', icon: '📺' },
    { name: 'Pest Control', icon: '🐜' },
    { name: 'salon', icon: '💅' },
    { name: 'RO', icon: '💧' },
    { name: 'Geyser', icon: '♨️' },
    { name: 'Gardener', icon: '🌿' },
  ];

  // 4. Filter Logic: Search text ke hisaab se services filter karega
  const filteredServices = allServices.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-page">
      
      {/* --- Hero Section --- */}
      <section className="hero">
        
        <img
          src="https://media.istockphoto.com/id/2216081659/photo/young-businessman-using-phone-and-laughing-at-home.jpg?s=612x612&w=0&k=20&c=WXobQef39_gu-ToCKZDN6qPbZUhXPRPOT1r5uICu6Wc="
          alt='Hero-background image'
          className="hero-bg-img"
        />

        <div className="container hero__container">
          <div className="hero__content">
            <div className="hero__badge">TRUSTED HOME SERVICES</div>

            <h1 className="hero__title">
              Har Ghar Ka <br />
              Har Kaam <span className="text-orange">Turant</span>
            </h1>
            <p className="hero__subtitle">
              Verified professionals for all your home and business needs. Book easily, track live, pay safely.
            </p>

            <div className="hero__search-box">
              <div className="search-divider"></div>
              <div className="search-input-group search-input-group--main">
                <span className="icon">🔍</span>
                {/* 5. Input me onChange lagaya taaki state update ho */}
                <input 
                  type="text" 
                  placeholder="What service do you need?" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Search button pe click karne se abhi ke liye kuch nahi hoga, par live search chalega */}
              <button className="search-btn" onClick={() => {}}>Search</button>
            </div>
          </div>
        </div>

        <div className="hero__features-bar">
          {/* ... (Aapka same purana code) ... */}
          <div className="container hero__features-container">
            <div className="feature-item">
              <span className="feature-icon">🛡️</span>
              <div>
                <h4>Verified</h4>
                <p>Professionals</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💰</span>
              <div>
                <h4>Upfront</h4>
                <p>Pricing</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📍</span>
              <div>
                <h4>Live</h4>
                <p>Tracking</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <div>
                <h4>Secure</h4>
                <p>Payments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Popular Services Section --- */}
      <section className="services-section">
        <div className="container">
          <div className="services-header">
            {/* Heading dynamic kari hai thodi, agar search ho toh "Search Results" dikhaye */}
            <h2>{searchQuery ? "Search Results" : "Popular Services"}</h2>
            <p>Choose from 100+ professional services</p>
            <button onClick={() => navigate("/search")} className="view-all-btn">View All →</button>
          </div>

          <div className="services-grid">
            {/* 6. Yahan filteredServices map chalega */}
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-card__icon">{service.icon}</div>
                  <h3 className="service-card__title">{service.name}</h3>
                </div>
              ))
            ) : (
              // Agar kuch na mile toh yeh message dikhega
              <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px 0", color: "#666" }}>
                <h3>No services found for "{searchQuery}" 😔</h3>
                <p>Try searching for something else like "AC", "Plumber", or "Cleaning".</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- How Kaamdaar Works Section --- */}
      {/* ... (Aapka same code) ... */}
      <section className="how-it-works">
        <div className="container">
          <div className="how-it-works__header">
            <h2>How Kaam<span className="text-orange">daar</span> Works?</h2>
            <p>Get your service in 4 simple steps</p>
          </div>

          <div className="steps-container">
            <div className="step-card">
              <div className="step-icon-circle blue">🔍</div>
              <h3>1. Search</h3>
              <p>Choose your service and location</p>
            </div>
            <div className="step-arrow">➔</div>

            <div className="step-card">
              <div className="step-icon-circle orange">📅</div>
              <h3>2. Book</h3>
              <p>Select time and confirm booking</p>
            </div>
            <div className="step-arrow">➔</div>

            <div className="step-card">
              <div className="step-icon-circle teal">📍</div>
              <h3>3. Track</h3>
              <p>Track your provider live on map</p>
            </div>
            <div className="step-arrow">➔</div>

            <div className="step-card">
              <div className="step-icon-circle yellow">😌</div>
              <h3>4. Relax</h3>
              <p>Get your work done and pay securely</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Verified Professionals & Stats Section --- */}
      {/* ... (Aapka same code) ... */}
      <section className="verified-section container">
        <div className="verified-banner">
          <div className="verified-image">
            <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Professional Worker" />
          </div>

          <div className="verified-content">
            <h2>Verified Professionals<br/>at Your Service</h2>
            <ul className="verified-features">
              <li>✅ Background Verified</li>
              <li>✅ Trained & Experienced</li>
              <li>✅ Rated by Customers</li>
            </ul>
            <button className="book-now-orange-btn">Book Now</button>
          </div>
        </div>

        <div className="stats-container">
          <div className="stat-box">
            <h3>20,000+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-box">
            <h3>4.9 ★</h3>
            <p>Average Rating</p>
          </div>
          <div className="stat-box">
            <h3>100+</h3>
            <p>Services</p>
          </div>
          <div className="stat-box">
            <h3>500+</h3>
            <p>Verified Professionals</p>
          </div>
        </div>
      </section>

      {/* --- Customer Reviews Section --- */}
      {/* ... (Aapka same code) ... */}
      <section className="reviews-section">
        <div className="container">
          <div className="services-header" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2>What Our Customers Say</h2>
            </div>
            <button className="view-all-btn" style={{ position: 'static' }}>View All Reviews →</button>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">"Very professional service. Booked AC service and technician arrived on time. Highly recommended!"</p>
              <div className="review-user">
                <div className="user-avatar">👩</div>
                <div>
                  <h4>Priya Sharma</h4>
                  <p>Verified Customer</p>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">"Easy booking process and transparent pricing. Will definitely use Kaamdaar again."</p>
              <div className="review-user">
                <div className="user-avatar">👨</div>
                <div>
                  <h4>Amit Verma</h4>
                  <p>Verified Customer</p>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">"Great platform with verified professionals. The live tracking feature is very helpful."</p>
              <div className="review-user">
                <div className="user-avatar">👩</div>
                <div>
                  <h4>Neha Gupta</h4>
                  <p>Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;