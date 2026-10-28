import React from "react";
import { Link } from "react-router-dom";
import "./SweepingMopping.css";

import serviceImage from "../../assets/services_eight.png";
import promoImage from "../../assets/services_one.png";

const SweepingMopping = () => {
  const includedItems = [
    "Sweeping accessible floor areas",
    "Removing dust, hair, and loose dirt",
    "Mopping accessible floor surfaces",
    "Cleaning accessible corners and edges",
    "Cleaning common floor areas and walkways",
    "Routine floor cleaning to keep your home fresh",
  ];

  const excludedItems = [
    "Deep cleaning or polishing floors",
    "Moving heavy furniture or appliances",
    "Removing stubborn stains requiring special treatment",
    "Cleaning inaccessible or elevated areas",
    "Specialized carpet or upholstery cleaning",
    "Handling hazardous waste or chemical spills",
  ];

  return (
    <div className="sweeping-page">


      <main className="sweeping-main">
        <div className="sweeping-container">

          {/* Breadcrumb */}
          <nav className="sweeping-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/search">Services</Link>
            <span>/</span>
            <span className="sweeping-current">
              Sweeping &amp; Mopping
            </span>
          </nav>

          {/* Hero Section */}
          <section className="sweeping-hero">
            <div className="sweeping-hero-content">
              <span className="sweeping-tag">
                HOME CLEANING
              </span>

              <h1>
                Sweeping <span>&amp; Mopping</span>
              </h1>

              <p>
                Keep your floors clean and fresh with our sweeping
                and mopping service. From everyday dust to loose
                dirt and footprints, we help maintain a neat and
                comfortable home.
              </p>

              <div className="sweeping-actions">
                <Link
                  to="/search"
                  className="sweeping-primary-btn"
                >
                  Book Sweeping &amp; Mopping
                  <span>→</span>
                </Link>

                <Link
                  to="/search"
                  className="sweeping-secondary-btn"
                >
                  Explore All Services
                </Link>
              </div>
            </div>

            <div className="sweeping-hero-image">
              <img
                src={serviceImage}
                alt="Sweeping and mopping service"
              />
            </div>
          </section>

          {/* Included and Excluded */}
          <section className="sweeping-details">
            <div className="sweeping-section-heading">
              <span>SERVICE DETAILS</span>
              <h2>What's included</h2>
              <p>
                Here's what you can expect from our sweeping
                and mopping service.
              </p>
            </div>

            <div className="sweeping-lists">
              <div className="sweeping-list-card">
                <h3>
                  <span className="sweeping-list-icon included">
                    ✓
                  </span>
                  What's included
                </h3>

                <ul>
                  {includedItems.map((item, index) => (
                    <li key={index}>
                      <span className="sweeping-check">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sweeping-list-card">
                <h3>
                  <span className="sweeping-list-icon excluded">
                    ×
                  </span>
                  Not included
                </h3>

                <ul>
                  {excludedItems.map((item, index) => (
                    <li key={index}>
                      <span className="sweeping-cross">×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Promotional Section - Image Left */}
          <section className="sweeping-promo">
            <div className="sweeping-promo-image">
              <img
                src={promoImage}
                alt="Kaamdaar home services"
              />
            </div>

            <div className="sweeping-promo-content">
              <span className="sweeping-promo-tag">
                YOUR HOME, OUR HELP
              </span>

              <h2>
                Enjoy a cleaner, fresher home.
              </h2>

              <p>
                Let Kaamdaar help you take care of everyday
                cleaning. Explore our services and find the
                right help for your home.
              </p>

              <Link
                to="/search"
                className="sweeping-promo-btn"
              >
                Explore All Services
                <span>→</span>
              </Link>
            </div>
          </section>

        </div>
      </main>

    </div>
  );
};

export default SweepingMopping;