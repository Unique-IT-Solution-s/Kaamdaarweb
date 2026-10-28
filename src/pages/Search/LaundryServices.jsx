
import React from "react";
import { Link } from "react-router-dom";
import "./LaundryServices.css";

import laundryImage from "../../assets/services_sixteen.png";
import promoImage from "../../assets/services_one.png";

const LaundryServices = () => {
  const includedServices = [
    "Sorting of laundry by colour and fabric type",
    "Washing of everyday clothes",
    "Drying of washed clothes",
    "Folding of clean and dry clothes",
    "Basic organisation of folded laundry",
    "Careful handling of regular garments",
  ];

  const excludedServices = [
    "Dry cleaning of delicate garments",
    "Removal of specialised or stubborn stains",
    "Repairing clothes, zippers or buttons",
    "Ironing, unless booked as a separate service",
    "Cleaning of shoes, bags and leather items",
  ];

  return (
    <main className="laundry-services-page">
      {/* Hero Section */}
      <section className="ls-hero">
        <div className="ls-container ls-hero-grid">
          <div className="ls-hero-content">
            <div className="ls-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/search">Services</Link>
              <span>/</span>
              <span>Laundry Services</span>
            </div>

            <span className="ls-tag">FRESH CLOTHES, LESS HASSLE</span>

            <h1>
              Laundry Services for{" "}
              <span>Fresh &amp; Well-Cared Clothes</span>
            </h1>

            <p>
              Make laundry day easier with Kaamdaar. Get help with everyday
              washing, drying and folding so your clothes stay fresh and your
              laundry routine becomes more convenient.
            </p>

            <div className="ls-hero-buttons">
              <Link to="/search" className="ls-btn ls-btn-primary">
                Book Laundry Services
              </Link>

              <Link to="/search" className="ls-btn ls-btn-secondary">
                Explore All Services
              </Link>
            </div>
          </div>

          <div className="ls-hero-image">
            <img
              src={laundryImage}
              alt="Laundry washing and clothes care service"
            />
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="ls-details">
        <div className="ls-container">
          <div className="ls-section-heading">
            <span className="ls-eyebrow">SERVICE DETAILS</span>

            <h2>
              What's <span>included</span>
            </h2>

            <p>
              Understand what's covered by the laundry service before
              booking. Check the included tasks and services that are not
              covered.
            </p>
          </div>

          <div className="ls-service-cards">
            <div className="ls-service-card">
              <h3>
                <span className="ls-card-icon ls-check">✓</span>
                What's included
              </h3>

              <ul>
                {includedServices.map((service, index) => (
                  <li key={index}>
                    <span className="ls-list-check">✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="ls-service-card">
              <h3>
                <span className="ls-card-icon ls-cross">×</span>
                Not included
              </h3>

              <ul>
                {excludedServices.map((service, index) => (
                  <li key={index}>
                    <span className="ls-list-cross">×</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Promo Section */}
      <section className="ls-promo">
        <div className="ls-container ls-promo-grid">
          <div className="ls-promo-image">
            <img
              src={promoImage}
              alt="Professional home services"
            />
          </div>

          <div className="ls-promo-content">
            <span className="ls-eyebrow">YOUR HOME, OUR HELP</span>

            <h2>
              Enjoy a cleaner, <span>fresher home.</span>
            </h2>

            <p>
              Make everyday chores easier with Kaamdaar. Explore our home
              services and find the right help for your daily needs.
            </p>

            <Link to="/search" className="ls-btn ls-btn-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LaundryServices;
