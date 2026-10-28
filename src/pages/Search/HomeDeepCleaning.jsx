import React from "react";
import { Link } from "react-router-dom";
import "./HomeDeepCleaning.css";

import homeDeepCleaningImage from "../../assets/services_thirteen.png";
import promoImage from "../../assets/services_one.png";

const HomeDeepCleaning = () => {
  const includedServices = [
    "Deep cleaning of floors and surfaces",
    "Dusting of furniture and accessible areas",
    "Cleaning of doors, switches and handles",
    "Kitchen surface and exterior cleaning",
    "Bathroom and toilet deep cleaning",
    "Removal of dust, dirt and everyday grime",
  ];

  const excludedServices = [
    "Pest control and fumigation",
    "Major repairs and plumbing work",
    "Cleaning of inaccessible or unsafe areas",
    "Heavy furniture shifting",
    "Exterior building and facade cleaning",
  ];

  return (
    <main className="home-deep-cleaning-page">
      {/* Hero Section */}
      <section className="hdc-hero">
        <div className="hdc-container hdc-hero-grid">
          <div className="hdc-hero-content">
            <div className="hdc-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/search">Services</Link>
              <span>/</span>
              <span>Home Deep Cleaning</span>
            </div>

            <span className="hdc-tag">COMPLETE HOME CARE</span>

            <h1>
              Home Deep Cleaning for a{" "}
              <span>Fresh &amp; Spotless Home</span>
            </h1>

            <p>
              Give your home the deep clean it deserves. Our home deep cleaning
              service focuses on removing built-up dust, dirt and grime from
              everyday living spaces, helping you enjoy a cleaner and fresher
              home.
            </p>

            <div className="hdc-hero-buttons">
              <Link to="/search" className="hdc-btn hdc-btn-primary">
                Book Home Deep Cleaning
              </Link>

              <Link to="/search" className="hdc-btn hdc-btn-secondary">
                Explore All Services
              </Link>
            </div>
          </div>

          <div className="hdc-hero-image">
            <img
              src={homeDeepCleaningImage}
              alt="Home deep cleaning service"
            />
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="hdc-details">
        <div className="hdc-container">
          <div className="hdc-section-heading">
            <span className="hdc-eyebrow">SERVICE DETAILS</span>
            <h2>
              What's <span>included</span>
            </h2>
            <p>
              Know what to expect from our home deep cleaning service before
              you book. Review the included tasks and services that are not
              covered.
            </p>
          </div>

          <div className="hdc-service-cards">
            <div className="hdc-service-card">
              <h3>
                <span className="hdc-card-icon hdc-check">✓</span>
                What's included
              </h3>

              <ul>
                {includedServices.map((service, index) => (
                  <li key={index}>
                    <span className="hdc-list-check">✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hdc-service-card">
              <h3>
                <span className="hdc-card-icon hdc-cross">×</span>
                Not included
              </h3>

              <ul>
                {excludedServices.map((service, index) => (
                  <li key={index}>
                    <span className="hdc-list-cross">×</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Promo Section */}
      <section className="hdc-promo">
        <div className="hdc-container hdc-promo-grid">
          <div className="hdc-promo-image">
            <img src={promoImage} alt="Professional home cleaning" />
          </div>

          <div className="hdc-promo-content">
            <span className="hdc-eyebrow">YOUR HOME, OUR HELP</span>

            <h2>
              Enjoy a cleaner, <span>fresher home.</span>
            </h2>

            <p>
              Make home care easier with Kaamdaar. Explore our cleaning
              services and find the right help for your home.
            </p>

            <Link to="/search" className="hdc-btn hdc-btn-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeDeepCleaning;