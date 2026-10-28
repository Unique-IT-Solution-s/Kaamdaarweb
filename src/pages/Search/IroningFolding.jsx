import React from "react";
import { Link } from "react-router-dom";
import "./IroningFolding.css";

import serviceImage from "../../assets/services_twelve.png";
import promoImage from "../../assets/services_one.png";

const IroningFolding = () => {
  const includedItems = [
    "Ironing everyday clothes and garments",
    "Folding ironed clothes neatly",
    "Organizing folded garments into neat piles",
    "Handling shirts, trousers, and everyday wear",
    "Arranging finished clothes in a designated area",
    "Keeping ironed and folded clothes ready for storage",
  ];

  const excludedItems = [
    "Washing or drying clothes",
    "Dry cleaning or specialized garment treatment",
    "Repairing clothes, stitching, or altering garments",
    "Removing difficult stains",
    "Ironing garments that require special professional care",
    "Organizing the entire wardrobe or storage area",
  ];

  return (
    <div className="ironing-page">
    

      <main className="ironing-main">
        <div className="ironing-container">

          {/* Breadcrumb */}
          <nav className="ironing-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/search">Services</Link>
            <span>/</span>
            <span className="ironing-current">
              Ironing &amp; Folding
            </span>
          </nav>

          {/* Hero Section */}
          <section className="ironing-hero">
            <div className="ironing-hero-content">
              <span className="ironing-tag">
                LAUNDRY CARE
              </span>

              <h1>
                Ironing <span>&amp; Folding</span>
              </h1>

              <p>
                Keep your clothes neat, smooth, and ready to wear.
                Our Ironing &amp; Folding service helps take care
                of everyday garments by ironing suitable clothes
                and folding them neatly for convenient storage.
              </p>

              <div className="ironing-actions">
                <Link
                  to="/search"
                  className="ironing-primary-btn"
                >
                  Book Ironing &amp; Folding
                  <span>→</span>
                </Link>

                <Link
                  to="/search"
                  className="ironing-secondary-btn"
                >
                  Explore All Services
                </Link>
              </div>
            </div>

            <div className="ironing-hero-image">
              <img
                src={serviceImage}
                alt="Ironing and folding clothes service"
              />
            </div>
          </section>

          {/* Included and Excluded */}
          <section className="ironing-details">
            <div className="ironing-section-heading">
              <span>SERVICE DETAILS</span>
              <h2>What's included</h2>
              <p>
                Here's what you can expect from our Ironing
                &amp; Folding service.
              </p>
            </div>

            <div className="ironing-lists">
              <div className="ironing-list-card">
                <h3>
                  <span className="ironing-list-icon included">
                    ✓
                  </span>
                  What's included
                </h3>

                <ul>
                  {includedItems.map((item, index) => (
                    <li key={index}>
                      <span className="ironing-check">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ironing-list-card">
                <h3>
                  <span className="ironing-list-icon excluded">
                    ×
                  </span>
                  Not included
                </h3>

                <ul>
                  {excludedItems.map((item, index) => (
                    <li key={index}>
                      <span className="ironing-cross">×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Bottom Promotional Section */}
          <section className="ironing-promo">
            <div className="ironing-promo-image">
              <img
                src={promoImage}
                alt="Kaamdaar home services"
              />
            </div>

            <div className="ironing-promo-content">
              <span className="ironing-promo-tag">
                YOUR HOME, OUR HELP
              </span>

              <h2>
                Enjoy a cleaner, fresher home.
              </h2>

              <p>
                Let Kaamdaar help you simplify everyday tasks.
                Explore our home services and find the right
                help to keep your home neat and comfortable.
              </p>

              <Link
                to="/search"
                className="ironing-promo-btn"
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

export default IroningFolding;