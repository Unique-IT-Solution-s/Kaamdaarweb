import React from "react";
import { Link } from "react-router-dom";
import "./PrePartyExpress.css";

import serviceImage from "../../assets/services_nine.png";
import promoImage from "../../assets/services_one.png";

const PrePartyExpress = () => {
  const includedItems = [
    "Quick dusting of accessible surfaces",
    "Wiping tables and visible countertops",
    "Tidying living rooms and common areas",
    "Arranging cushions and straightening visible items",
    "Sweeping and mopping accessible floors where needed",
    "Freshening up the entryway and guest areas",
  ];

  const excludedItems = [
    "Deep cleaning of the entire home",
    "Cleaning inside cabinets and wardrobes",
    "Moving heavy furniture or appliances",
    "Detailed kitchen or bathroom deep cleaning",
    "Post-party cleaning and extensive waste removal",
    "Specialized stain removal or intensive scrubbing",
  ];

  return (
    <div className="preparty-page">


      <main className="preparty-main">
        <div className="preparty-container">

          {/* Breadcrumb */}
          <nav className="preparty-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/search">Services</Link>
            <span>/</span>
            <span className="preparty-current">
              Pre-Party Express
            </span>
          </nav>

          {/* Hero Section */}
          <section className="preparty-hero">
            <div className="preparty-hero-content">
              <span className="preparty-tag">
                PARTY PREPARATION
              </span>

              <h1>
                Pre-Party <span>Express</span>
              </h1>

              <p>
                Getting ready to welcome guests? Give your home
                a quick refresh before the celebration. We focus
                on visible surfaces, common areas, and those
                finishing touches that make your space feel
                neat and welcoming.
              </p>

              <div className="preparty-actions">
                <Link
                  to="/search"
                  className="preparty-primary-btn"
                >
                  Book Pre-Party Express
                  <span>→</span>
                </Link>

                <Link
                  to="/search"
                  className="preparty-secondary-btn"
                >
                  Explore All Services
                </Link>
              </div>
            </div>

            <div className="preparty-hero-image">
              <img
                src={serviceImage}
                alt="Pre-party home preparation and cleaning"
              />
            </div>
          </section>

          {/* Included and Excluded */}
          <section className="preparty-details">
            <div className="preparty-section-heading">
              <span>SERVICE DETAILS</span>
              <h2>What's included</h2>
              <p>
                Get your key living spaces ready for guests
                with focused pre-party cleaning.
              </p>
            </div>

            <div className="preparty-lists">
              <div className="preparty-list-card">
                <h3>
                  <span className="preparty-list-icon included">
                    ✓
                  </span>
                  What's included
                </h3>

                <ul>
                  {includedItems.map((item, index) => (
                    <li key={index}>
                      <span className="preparty-check">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="preparty-list-card">
                <h3>
                  <span className="preparty-list-icon excluded">
                    ×
                  </span>
                  Not included
                </h3>

                <ul>
                  {excludedItems.map((item, index) => (
                    <li key={index}>
                      <span className="preparty-cross">×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Promotional Section - Image Left */}
          <section className="preparty-promo">
            <div className="preparty-promo-image">
              <img
                src={promoImage}
                alt="Kaamdaar home services"
              />
            </div>

            <div className="preparty-promo-content">
              <span className="preparty-promo-tag">
                YOUR HOME, OUR HELP
              </span>

              <h2>
                Enjoy a cleaner, fresher home.
              </h2>

              <p>
                Let Kaamdaar take some of the work off your
                hands. Explore our home services and prepare
                your space for your next gathering.
              </p>

              <Link
                to="/search"
                className="preparty-promo-btn"
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

export default PrePartyExpress;