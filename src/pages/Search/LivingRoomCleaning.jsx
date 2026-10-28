
import React from "react";
import { Link } from "react-router-dom";
import "./LivingRoomCleaning.css";

import livingRoomImage from "../../assets/services_fifteen.png";
import promoImage from "../../assets/services_one.png";

const LivingRoomCleaning = () => {
  const includedServices = [
    "Dusting of furniture and tables",
    "Wiping of accessible shelves and surfaces",
    "Cleaning of doors, handles and switches",
    "Dusting of decorative items in accessible areas",
    "Cleaning of mirrors and glass surfaces",
    "Sweeping and mopping of floors",
  ];

  const excludedServices = [
    "Professional carpet and upholstery shampooing",
    "Cleaning of inaccessible or unsafe areas",
    "Heavy furniture shifting",
    "Pest control and fumigation",
    "Wall painting and repair work",
  ];

  return (
    <main className="living-room-cleaning-page">
      {/* Hero Section */}
      <section className="lrc-hero">
        <div className="lrc-container lrc-hero-grid">
          <div className="lrc-hero-content">
            <div className="lrc-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/search">Services</Link>
              <span>/</span>
              <span>Living Room Cleaning</span>
            </div>

            <span className="lrc-tag">A FRESHER LIVING SPACE</span>

            <h1>
              Living Room Cleaning for a{" "}
              <span>Fresh &amp; Welcoming Home</span>
            </h1>

            <p>
              Keep your living room clean, tidy and inviting. Our living room
              cleaning service focuses on dust, dirt and everyday mess across
              accessible furniture, surfaces and floors, so your space feels
              fresh and comfortable.
            </p>

            <div className="lrc-hero-buttons">
              <Link to="/search" className="lrc-btn lrc-btn-primary">
                Book Living Room Cleaning
              </Link>

              <Link to="/search" className="lrc-btn lrc-btn-secondary">
                Explore All Services
              </Link>
            </div>
          </div>

          <div className="lrc-hero-image">
            <img
              src={livingRoomImage}
              alt="Living room cleaning service"
            />
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="lrc-details">
        <div className="lrc-container">
          <div className="lrc-section-heading">
            <span className="lrc-eyebrow">SERVICE DETAILS</span>

            <h2>
              What's <span>included</span>
            </h2>

            <p>
              Know what to expect from your living room cleaning service.
              Review the included tasks and services that are not covered
              before booking.
            </p>
          </div>

          <div className="lrc-service-cards">
            <div className="lrc-service-card">
              <h3>
                <span className="lrc-card-icon lrc-check">✓</span>
                What's included
              </h3>

              <ul>
                {includedServices.map((service, index) => (
                  <li key={index}>
                    <span className="lrc-list-check">✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lrc-service-card">
              <h3>
                <span className="lrc-card-icon lrc-cross">×</span>
                Not included
              </h3>

              <ul>
                {excludedServices.map((service, index) => (
                  <li key={index}>
                    <span className="lrc-list-cross">×</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Promo Section */}
      <section className="lrc-promo">
        <div className="lrc-container lrc-promo-grid">
          <div className="lrc-promo-image">
            <img
              src={promoImage}
              alt="Professional home cleaning"
            />
          </div>

          <div className="lrc-promo-content">
            <span className="lrc-eyebrow">YOUR HOME, OUR HELP</span>

            <h2>
              Enjoy a cleaner, <span>fresher home.</span>
            </h2>

            <p>
              Make home care easier with Kaamdaar. Explore our cleaning
              services and find the right help for your home.
            </p>

            <Link to="/search" className="lrc-btn lrc-btn-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LivingRoomCleaning;
