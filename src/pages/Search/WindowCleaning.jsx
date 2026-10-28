
import React from "react";
import { Link } from "react-router-dom";
import "./WindowCleaning.css";

import windowCleaningImage from "../../assets/services_seventeen.png";
import promoImage from "../../assets/services_one.png";

const WindowCleaning = () => {
  const includedServices = [
    "Cleaning of accessible window glass",
    "Wiping of window frames and sills",
    "Removal of everyday dust and smudges",
    "Cleaning of accessible glass doors",
    "Wiping of reachable window ledges",
    "Removal of fingerprints and light marks",
  ];

  const excludedServices = [
    "Cleaning of exterior windows at height",
    "Work requiring ladders or specialised equipment",
    "Cleaning of inaccessible or unsafe windows",
    "Repair of damaged windows or frames",
    "Removal of paint, cement or heavy construction residue",
  ];

  return (
    <main className="window-cleaning-page">
      {/* Hero Section */}
      <section className="wc-hero">
        <div className="wc-container wc-hero-grid">
          <div className="wc-hero-content">
            <div className="wc-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/search">Services</Link>
              <span>/</span>
              <span>Window Cleaning</span>
            </div>

            <span className="wc-tag">LET THE LIGHT SHINE IN</span>

            <h1>
              Window Cleaning for{" "}
              <span>Clear &amp; Sparkling Views</span>
            </h1>

            <p>
              Let more light into your home with clean, sparkling windows.
              Our window cleaning service helps remove everyday dust,
              fingerprints and smudges from accessible glass surfaces,
              window frames and sills.
            </p>

            <div className="wc-hero-buttons">
              <Link to="/search" className="wc-btn wc-btn-primary">
                Book Window Cleaning
              </Link>

              <Link to="/search" className="wc-btn wc-btn-secondary">
                Explore All Services
              </Link>
            </div>
          </div>

          <div className="wc-hero-image">
            <img
              src={windowCleaningImage}
              alt="Window cleaning service"
            />
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="wc-details">
        <div className="wc-container">
          <div className="wc-section-heading">
            <span className="wc-eyebrow">SERVICE DETAILS</span>

            <h2>
              What's <span>included</span>
            </h2>

            <p>
              Understand what's covered by our window cleaning service.
              Review the included tasks and services that are not covered
              before booking.
            </p>
          </div>

          <div className="wc-service-cards">
            <div className="wc-service-card">
              <h3>
                <span className="wc-card-icon wc-check">✓</span>
                What's included
              </h3>

              <ul>
                {includedServices.map((service, index) => (
                  <li key={index}>
                    <span className="wc-list-check">✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="wc-service-card">
              <h3>
                <span className="wc-card-icon wc-cross">×</span>
                Not included
              </h3>

              <ul>
                {excludedServices.map((service, index) => (
                  <li key={index}>
                    <span className="wc-list-cross">×</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Promo Section */}
      <section className="wc-promo">
        <div className="wc-container wc-promo-grid">
          <div className="wc-promo-image">
            <img
              src={promoImage}
              alt="Professional home cleaning"
            />
          </div>

          <div className="wc-promo-content">
            <span className="wc-eyebrow">YOUR HOME, OUR HELP</span>

            <h2>
              Enjoy a cleaner, <span>fresher home.</span>
            </h2>

            <p>
              Make home care easier with Kaamdaar. Explore our cleaning
              services and find the right help for your home.
            </p>

            <Link to="/search" className="wc-btn wc-btn-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WindowCleaning;
