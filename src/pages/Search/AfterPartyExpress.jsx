import React from "react";
import { Link } from "react-router-dom";
import "./AfterPartyExpress.css";

import serviceImage from "../../assets/services_eleven.png";
import promoImage from "../../assets/services_one.png";

const AfterPartyExpress = () => {
  const includedItems = [
    "Tidying up accessible living and party areas",
    "Wiping tables and accessible countertops",
    "Collecting visible party waste and placing it in designated bins",
    "Gathering used dishes and utensils in the kitchen",
    "Sweeping and mopping accessible floor areas",
    "Straightening common areas after the gathering",
  ];

  const excludedItems = [
    "Deep cleaning the entire home",
    "Heavy-duty stain removal or intensive scrubbing",
    "Moving heavy furniture or appliances",
    "Cleaning inside cabinets, wardrobes, or storage units",
    "Specialized carpet or upholstery cleaning",
    "Handling hazardous waste or broken glass without appropriate safety arrangements",
  ];

  return (
    <div className="afterparty-page">

      <main className="afterparty-main">
        <div className="afterparty-container">

          {/* Breadcrumb */}
          <nav className="afterparty-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/search">Services</Link>
            <span>/</span>
            <span className="afterparty-current">
              After-Party Express
            </span>
          </nav>

          {/* Hero Section */}
          <section className="afterparty-hero">
            <div className="afterparty-hero-content">
              <span className="afterparty-tag">
                AFTER-PARTY CLEANING
              </span>

              <h1>
                After-Party <span>Express</span>
              </h1>

              <p>
                Enjoy the memories without worrying about the
                mess. Our After-Party Express service helps tidy
                up your gathering space, wipe accessible surfaces,
                collect visible waste, and refresh your floors
                after the celebration.
              </p>

              <div className="afterparty-actions">
                <Link
                  to="/search"
                  className="afterparty-primary-btn"
                >
                  Book After-Party Express
                  <span>→</span>
                </Link>

                <Link
                  to="/search"
                  className="afterparty-secondary-btn"
                >
                  Explore All Services
                </Link>
              </div>
            </div>

            <div className="afterparty-hero-image">
              <img
                src={serviceImage}
                alt="After-party home cleaning service"
              />
            </div>
          </section>

          {/* Included and Excluded */}
          <section className="afterparty-details">
            <div className="afterparty-section-heading">
              <span>SERVICE DETAILS</span>
              <h2>What's included</h2>
              <p>
                Here's what you can expect when you book our
                After-Party Express cleaning service.
              </p>
            </div>

            <div className="afterparty-lists">
              <div className="afterparty-list-card">
                <h3>
                  <span className="afterparty-list-icon included">
                    ✓
                  </span>
                  What's included
                </h3>

                <ul>
                  {includedItems.map((item, index) => (
                    <li key={index}>
                      <span className="afterparty-check">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="afterparty-list-card">
                <h3>
                  <span className="afterparty-list-icon excluded">
                    ×
                  </span>
                  Not included
                </h3>

                <ul>
                  {excludedItems.map((item, index) => (
                    <li key={index}>
                      <span className="afterparty-cross">×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Bottom Promotional Section */}
          <section className="afterparty-promo">
            <div className="afterparty-promo-image">
              <img
                src={promoImage}
                alt="Kaamdaar home services"
              />
            </div>

            <div className="afterparty-promo-content">
              <span className="afterparty-promo-tag">
                YOUR HOME, OUR HELP
              </span>

              <h2>
                Enjoy a cleaner, fresher home.
              </h2>

              <p>
                Let Kaamdaar help you take care of everyday
                cleaning tasks. Explore our home services and
                find the right help to keep your home neat
                and comfortable.
              </p>

              <Link
                to="/search"
                className="afterparty-promo-btn"
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

export default AfterPartyExpress;