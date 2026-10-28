
import React from "react";
import { Link } from "react-router-dom";
import "./KitchenCleaning.css";

import kitchenCleaningImage from "../../assets/services_fourteen.png";
import promoImage from "../../assets/services_one.png";

const KitchenCleaning = () => {
  const includedServices = [
    "Cleaning of kitchen countertops and surfaces",
    "Cleaning of stovetop and exterior appliances",
    "Wiping of cabinet doors and handles",
    "Cleaning of sink and kitchen tap",
    "Removal of grease and everyday grime from accessible surfaces",
    "Sweeping and mopping of the kitchen floor",
  ];

  const excludedServices = [
    "Deep cleaning inside ovens and chimneys",
    "Pest control and fumigation",
    "Major plumbing or electrical repairs",
    "Cleaning of inaccessible or unsafe areas",
    "Heavy appliance dismantling",
  ];

  return (
    <main className="kitchen-cleaning-page">
      {/* Hero Section */}
      <section className="kc-hero">
        <div className="kc-container kc-hero-grid">
          <div className="kc-hero-content">
            <div className="kc-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/search">Services</Link>
              <span>/</span>
              <span>Kitchen Cleaning</span>
            </div>

            <span className="kc-tag">A FRESHER KITCHEN</span>

            <h1>
              Kitchen Cleaning for a{" "}
              <span>Spotless Cooking Space</span>
            </h1>

            <p>
              Keep your kitchen clean, fresh and ready for every meal.
              Our kitchen cleaning service focuses on everyday dirt,
              grease and grime across accessible kitchen surfaces, helping
              you enjoy a more comfortable cooking space.
            </p>

            <div className="kc-hero-buttons">
              <Link to="/search" className="kc-btn kc-btn-primary">
                Book Kitchen Cleaning
              </Link>

              <Link to="/search" className="kc-btn kc-btn-secondary">
                Explore All Services
              </Link>
            </div>
          </div>

          <div className="kc-hero-image">
            <img
              src={kitchenCleaningImage}
              alt="Kitchen cleaning service"
            />
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="kc-details">
        <div className="kc-container">
          <div className="kc-section-heading">
            <span className="kc-eyebrow">SERVICE DETAILS</span>

            <h2>
              What's <span>included</span>
            </h2>

            <p>
              Understand what is covered by our kitchen cleaning service.
              Review the included tasks and services that are not covered
              before booking.
            </p>
          </div>

          <div className="kc-service-cards">
            <div className="kc-service-card">
              <h3>
                <span className="kc-card-icon kc-check">✓</span>
                What's included
              </h3>

              <ul>
                {includedServices.map((service, index) => (
                  <li key={index}>
                    <span className="kc-list-check">✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="kc-service-card">
              <h3>
                <span className="kc-card-icon kc-cross">×</span>
                Not included
              </h3>

              <ul>
                {excludedServices.map((service, index) => (
                  <li key={index}>
                    <span className="kc-list-cross">×</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Promo Section */}
      <section className="kc-promo">
        <div className="kc-container kc-promo-grid">
          <div className="kc-promo-image">
            <img
              src={promoImage}
              alt="Professional home cleaning"
            />
          </div>

          <div className="kc-promo-content">
            <span className="kc-eyebrow">YOUR HOME, OUR HELP</span>

            <h2>
              Enjoy a cleaner, <span>fresher home.</span>
            </h2>

            <p>
              Make home care easier with Kaamdaar. Explore our cleaning
              services and find the right help for your home.
            </p>

            <Link to="/search" className="kc-btn kc-btn-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default KitchenCleaning;
