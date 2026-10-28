import React from "react";
import { Link } from "react-router-dom";
import "./CompleteWardrobe.css";

import serviceImage from "../../assets/services_ten.png";
import promoImage from "../../assets/services_one.png";

const CompleteWardrobe = () => {
  const includedItems = [
    "Organizing clothes and everyday wear",
    "Arranging folded clothes neatly",
    "Organizing accessible wardrobe shelves",
    "Grouping clothes by type for easy access",
    "Arranging clothes in designated wardrobe sections",
    "Neatening accessible wardrobe storage spaces",
  ];

  const excludedItems = [
    "Discarding or donating clothes without your approval",
    "Repairing damaged wardrobes or storage units",
    "Moving heavy furniture",
    "Deep cleaning or pest treatment inside wardrobes",
    "Washing or ironing clothes",
    "Organizing inaccessible or unsafe storage areas",
  ];

  return (
    <div className="wardrobe-page">
      

      <main className="wardrobe-main">
        <div className="wardrobe-container">

          {/* Breadcrumb */}
          <nav className="wardrobe-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/search">Services</Link>
            <span>/</span>
            <span className="wardrobe-current">
              Complete Wardrobe
            </span>
          </nav>

          {/* Hero Section */}
          <section className="wardrobe-hero">
            <div className="wardrobe-hero-content">
              <span className="wardrobe-tag">
                HOME ORGANIZATION
              </span>

              <h1>
                Complete <span>Wardrobe</span>
              </h1>

              <p>
                Bring order to your wardrobe with neatly arranged
                clothes and organized storage spaces. Make your
                everyday essentials easier to find and keep your
                wardrobe looking tidy and well organized.
              </p>

              <div className="wardrobe-actions">
                <Link
                  to="/search"
                  className="wardrobe-primary-btn"
                >
                  Book Complete Wardrobe
                  <span>→</span>
                </Link>

                <Link
                  to="/search"
                  className="wardrobe-secondary-btn"
                >
                  Explore All Services
                </Link>
              </div>
            </div>

            <div className="wardrobe-hero-image">
              <img
                src={serviceImage}
                alt="Neatly organized wardrobe and folded clothes"
              />
            </div>
          </section>

          {/* Included and Excluded */}
          <section className="wardrobe-details">
            <div className="wardrobe-section-heading">
              <span>SERVICE DETAILS</span>
              <h2>What's included</h2>
              <p>
                Here's what you can expect from our Complete
                Wardrobe organization service.
              </p>
            </div>

            <div className="wardrobe-lists">
              <div className="wardrobe-list-card">
                <h3>
                  <span className="wardrobe-list-icon included">
                    ✓
                  </span>
                  What's included
                </h3>

                <ul>
                  {includedItems.map((item, index) => (
                    <li key={index}>
                      <span className="wardrobe-check">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="wardrobe-list-card">
                <h3>
                  <span className="wardrobe-list-icon excluded">
                    ×
                  </span>
                  Not included
                </h3>

                <ul>
                  {excludedItems.map((item, index) => (
                    <li key={index}>
                      <span className="wardrobe-cross">×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Bottom Promotional Section */}
          <section className="wardrobe-promo">
            <div className="wardrobe-promo-image">
              <img
                src={promoImage}
                alt="Kaamdaar home services"
              />
            </div>

            <div className="wardrobe-promo-content">
              <span className="wardrobe-promo-tag">
                YOUR HOME, OUR HELP
              </span>

              <h2>
                Enjoy a cleaner, fresher home.
              </h2>

              <p>
                Let Kaamdaar help you simplify everyday tasks.
                Explore our home services and find the right
                help to keep your home organized and comfortable.
              </p>

              <Link
                to="/search"
                className="wardrobe-promo-btn"
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

export default CompleteWardrobe;