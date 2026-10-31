import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import backgroundHeroImage from "../../assets/photofirst.jpg";
import services_one from "../../assets/services_one.png";
import services_two from "../../assets/services_two.png";
import services_three from "../../assets/services_three.png";
import services_four from "../../assets/services_four.png";
import services_five from "../../assets/services_five.png";
import services_six from "../../assets/services_six.png";
import services_seven from "../../assets/services_seven.png";
import services_eight from "../../assets/services_eight.png";
import services_nine from "../../assets/services_nine.png";
import services_ten from "../../assets/services_ten.png";
import services_eleven from "../../assets/services_eleven.png";
import services_twelve from "../../assets/services_twelve.png";

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const services = [
    { id: 1, title: "Hourly Bookings", image: services_one, price: 299, rating: 4.5, availability: ["Today", "Tomorrow"], type: "Hourly Service" },
    { id: 2, title: "Bathroom Cleaning", image: services_two, price: 499, rating: 4.6, availability: ["Today", "Tomorrow"], type: "Deep Cleaning" },
    { id: 3, title: "Fridge Cleaning", image: services_three, price: 399, rating: 4.3, availability: ["Tomorrow", "This Week"], type: "One-time Service" },
    { id: 4, title: "Packing or Unpacking", image: services_four, price: 599, rating: 4.2, availability: ["Today", "This Week"], type: "One-time Service" },
    { id: 5, title: "Utensils", image: services_five, price: 249, rating: 4.1, availability: ["Today", "Tomorrow"], type: "Hourly Service" },
    { id: 6, title: "Kitchen Prep", image: services_six, price: 349, rating: 4.4, availability: ["Today", "Tomorrow"], type: "Hourly Service" },
    { id: 7, title: "Dusting & Wiping", image: services_seven, price: 299, rating: 4.2, availability: ["Today", "This Week"], type: "One-time Service" },
    { id: 8, title: "Sweeping & Mopping", image: services_eight, price: 299, rating: 4.4, availability: ["Today", "Tomorrow"], type: "Hourly Service" },
    { id: 9, title: "Pre-Party Express", image: services_nine, price: 699, rating: 4.5, availability: ["Tomorrow", "This Week"], type: "One-time Service" },
    { id: 10, title: "Complete Wardrobe", image: services_ten, price: 499, rating: 4.1, availability: ["Today", "This Week"], type: "One-time Service" },
    { id: 11, title: "After-Party Express", image: services_eleven, price: 799, rating: 4.3, availability: ["Tomorrow", "This Week"], type: "Deep Cleaning" },
    { id: 12, title: "Ironing & Folding", image: services_twelve, price: 249, rating: 4.6, availability: ["Today", "Tomorrow"], type: "Laundry & Clothes Care" },
  ];

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleServiceClick = (service) => {
    const routes = {
      "Hourly Bookings": "/hourly-booking",
      "Bathroom Cleaning": "/service-one",
      "Fridge Cleaning": "/services-two",
      "Packing or Unpacking": "/packing-unpacking",
      Utensils: "/utensils-cleaning",
      "Kitchen Prep": "/kitchen-prep",
      "Dusting & Wiping": "/dusting-wiping",
      "Sweeping & Mopping": "/sweeping-mopping",
      "Pre-Party Express": "/pre-party-express",
      "Complete Wardrobe": "/complete-wardrobe",
      "After-Party Express": "/after-party-express",
      "Ironing & Folding": "/ironing-folding",
    }

    const route = routes[service.title];

    if (route) {
      navigate(route);
      return;
    }

    navigate(`/service?category=${encodeURIComponent(service.title)}`, {
      state: {
        service: service.title,
        serviceId: service.id,
      },
    });



  }

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
                <input 
                  type="text" 
                  placeholder="What service do you need?" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="search-btn" onClick={() => {}}>Search</button>
            </div>
          </div>
        </div>
        <div className="hero__features-bar">
          <div className="container hero__features-container">
            <div className="feature-item">
              <span className="feature-icon">🛡️</span>
              <div><h4>Verified</h4><p>Professionals</p></div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💰</span>
              <div><h4>Upfront</h4><p>Pricing</p></div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📍</span>
              <div><h4>Live</h4><p>Tracking</p></div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <div><h4>Secure</h4><p>Payments</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Popular Services Section --- */}
      <section className="services-section">
        <div className="container">
          <div className="services-header">
            <h2>{searchQuery ? "Search Results" : "Popular Services"}</h2>
            <p>Choose from 100+ professional services</p>
            <button onClick={() => navigate("/search")} className="view-all-btn">View All →</button>
          </div>

          <div className="services-grid">
              {filteredServices.map((service) => (
                <button
                  type="button"
                  key={service.id}
                  className="service-card"
                  onClick={() => handleServiceClick(service)}
                  aria-label={`Explore ${service.title}`}
                >
                  <div className="service-image-wrapper">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-image"
                      loading={service.id <= 6 ? "eager" : "lazy"}
                    />
                  </div>

                  <div className="service-card-footer">
                    <h2>{service.title}</h2>
                    <span className="service-arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          
        </div>
      </section>

      {/* --- How Kaamdaar Works Section --- */}
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
          <div className="stat-box"><h3>20,000+</h3><p>Happy Customers</p></div>
          <div className="stat-box"><h3>4.9 ★</h3><p>Average Rating</p></div>
          <div className="stat-box"><h3>100+</h3><p>Services</p></div>
          <div className="stat-box"><h3>500+</h3><p>Verified Professionals</p></div>
        </div>
      </section>

      {/* --- Customer Reviews Section --- */}
      <section className="reviews-section">
        {/* Yahan container class hataya hai taaki cards screen ki puri width le sakein */}
        <div className="container">
          <div className="reviews-header">
            <h2>What Our Customers Say</h2>
            <button className="view-all-btn">View All Reviews →</button>
          </div>

          <div className="reviews-grid">
            {/* Card 1 */}
            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">"Very professional service. Booked AC service and technician arrived on time. Highly recommended!"</p>
              <div className="review-user">
                <div className="user-avatar">👩</div>
                <div className="user-info">
                  <h4>Priya Sharma</h4>
                  <p>Verified Customer</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">"Easy booking process and transparent pricing. Will definitely use Kaamdaar again."</p>
              <div className="review-user">
                <div className="user-avatar">👨</div>
                <div className="user-info">
                  <h4>Amit Verma</h4>
                  <p>Verified Customer</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">"Great platform with verified professionals. The live tracking feature is very helpful."</p>
              <div className="review-user">
                <div className="user-avatar">👩</div>
                <div className="user-info">
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