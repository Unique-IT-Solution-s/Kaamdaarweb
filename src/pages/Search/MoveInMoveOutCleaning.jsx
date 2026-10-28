
import React from "react";
import { Link } from "react-router-dom";
import "./MoveInMoveOutCleaning.css";

import moveCleaningImage from "../../assets/services_eighteen.png";
import promoImage from "../../assets/services_one.png";

const MoveInMoveOutCleaning = () => {
  const includedServices = [
    "Dusting of accessible surfaces and fixtures",
    "Cleaning of floors, corners and skirting areas",
    "Wiping of doors, handles and switches",
    "Cleaning of accessible kitchen surfaces",
    "Cleaning of bathroom surfaces and fittings",
    "Removal of everyday dust and accumulated grime",
  ];

  const excludedServices = [
    "Removal of construction debris and rubble",
    "Pest control and fumigation",
    "Major repairs, plumbing or electrical work",
    "Cleaning of inaccessible or unsafe areas",
    "Heavy furniture shifting",
    "Specialised stain removal or restoration",
  ];

  return (
    <main className="move-in-move-out-page">
      {/* Hero Section */}
      <section className="mimo-hero">
        <div className="mimo-container mimo-hero-grid">
          <div className="mimo-hero-content">
            <div className="mimo-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/search">Services</Link>
              <span>/</span>
              <span>Move-in / Move-out Cleaning</span>
            </div>

            <span className="mimo-tag">A FRESH START BEGINS HERE</span>

            <h1>
              Move-in / Move-out Cleaning for a{" "}
              <span>Fresh New Beginning</span>
            </h1>

            <p>
              Moving into a new place or preparing to leave your current home?
              Make the transition easier with a thorough cleaning of
              accessible surfaces, floors, kitchen areas and bathrooms, so
              your space feels fresh and ready for its next chapter.
            </p>

            <div className="mimo-hero-buttons">
              <Link to="/search" className="mimo-btn mimo-btn-primary">
                Book Move-in / Move-out Cleaning
              </Link>

              <Link to="/search" className="mimo-btn mimo-btn-secondary">
                Explore All Services
              </Link>
            </div>
          </div>

          <div className="mimo-hero-image">
            <img
              src={moveCleaningImage}
              alt="Move-in and move-out cleaning service"
            />
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="mimo-details">
        <div className="mimo-container">
          <div className="mimo-section-heading">
            <span className="mimo-eyebrow">SERVICE DETAILS</span>

            <h2>
              What's <span>included</span>
            </h2>

            <p>
              Understand what's covered by our move-in / move-out cleaning
              service. Review the included tasks and services that are not
              covered before booking.
            </p>
          </div>

          <div className="mimo-service-cards">
            <div className="mimo-service-card">
              <h3>
                <span className="mimo-card-icon mimo-check">✓</span>
                What's included
              </h3>

              <ul>
                {includedServices.map((service, index) => (
                  <li key={index}>
                    <span className="mimo-list-check">✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mimo-service-card">
              <h3>
                <span className="mimo-card-icon mimo-cross">×</span>
                Not included
              </h3>

              <ul>
                {excludedServices.map((service, index) => (
                  <li key={index}>
                    <span className="mimo-list-cross">×</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Promo Section */}
      <section className="mimo-promo">
        <div className="mimo-container mimo-promo-grid">
          <div className="mimo-promo-image">
            <img
              src={promoImage}
              alt="Professional home cleaning services"
            />
          </div>

          <div className="mimo-promo-content">
            <span className="mimo-eyebrow">YOUR HOME, OUR HELP</span>

            <h2>
              Enjoy a cleaner, <span>fresher home.</span>
            </h2>

            <p>
              Make your move simpler with Kaamdaar. Explore our home cleaning
              services and find the right help for your next chapter.
            </p>

            <Link to="/search" className="mimo-btn mimo-btn-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MoveInMoveOutCleaning;
