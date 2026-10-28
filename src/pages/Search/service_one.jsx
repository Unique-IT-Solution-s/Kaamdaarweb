
import React from "react";
import { useNavigate } from "react-router-dom";
import "./service_one.css";

import bathroomImage from "../../assets/services_two.png";
import appPromotionImage from "../../assets/services_one.png";

const includedItems = [
  "Cleaning of toilet bowl (inside and rim)",
  "Cleaning of washbasin and faucet",
  "Wiping of bathroom tiles and visible surfaces",
  "Cleaning of taps and fixtures",
  "Sweeping and mopping of bathroom floor",
  "Final wipe-down and deodorizing of the bathroom",
];

const excludedItems = [
  "Specialist tile grout scrubbing",
  "Removal of heavy mold or hard water stains",
  "Use of acid-based or strong descaling chemicals",
  "Cleaning of mirrors or storage interiors",
  "Cleaning of shower curtains or drains",
  "Shifting or relocating heavy items in bathroom",
];

const ServiceOne = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/booking", {
      state: {
        service: "Bathroom Cleaning",
        serviceId: 2,
      },
    });
  };

  return (
    <main className="service-one-page">
      {/* Breadcrumb */}
      <div className="service-one-container">
        <nav className="service-one-breadcrumb" aria-label="Breadcrumb">
          <button type="button" onClick={() => navigate("/")}>
            Home
          </button>

          <span>/</span>

          <button type="button" onClick={() => navigate("/search")}>
            Services
          </button>

          <span>/</span>

          <span className="service-one-current">
            Bathroom Cleaning
          </span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="service-one-hero">
        <div className="service-one-container service-one-hero-grid">
          <div className="service-one-hero-content">
            <span className="service-one-eyebrow">
              KAAMDAAR HOME SERVICES
            </span>

            <h1>
              Bathroom
              <br />
              <span>Cleaning</span>
            </h1>

            <p className="service-one-description">
              Keep your bathroom fresh, hygienic and spotless.
              Book a trusted Kaamdaar professional for cleaning
              toilets, washbasins, tiles, taps and bathroom floors
              at a time that suits your schedule.
            </p>

            <div className="service-one-actions">
              <button
                type="button"
                className="service-one-primary-btn"
                onClick={handleBookNow}
              >
                Book Bathroom Cleaning <span>→</span>
              </button>

              <button
                type="button"
                className="service-one-secondary-btn"
                onClick={() => navigate("/search")}
              >
                Explore All Services
              </button>
            </div>
          </div>

          <div className="service-one-hero-visual">
            <img
              src={bathroomImage}
              alt="Bathroom cleaning service"
              className="service-one-main-image"
            />
          </div>
        </div>
      </section>

      {/* What's Included / Not Included */}
      <section className="service-one-details">
        <div className="service-one-container">
          <div className="service-one-details-grid">
            <article className="service-one-list-column">
              <h2>
                <span className="service-one-heading-mark included-mark">
                  ✓
                </span>
                What's included
              </h2>

              <ul className="service-one-list included-list">
                {includedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="service-one-list-column">
              <h2>
                <span className="service-one-heading-mark excluded-mark">
                  ×
                </span>
                Not included
              </h2>

              <ul className="service-one-list excluded-list">
                {excludedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* App Promotion */}
      <section className="service-one-app-section">
        <div className="service-one-container">
          <div className="service-one-app-banner">
            <div className="service-one-app-visual">
              <img
                src={appPromotionImage}
                alt="Kaamdaar home services"
                className="service-one-app-image"
                loading="lazy"
              />
            </div>

            <div className="service-one-app-content">
              <span className="service-one-app-eyebrow">
                YOUR HOME, OUR HELP
              </span>

              <h2>
                Get trusted house help in minutes.
              </h2>

              <p>
                Choose your service, schedule your visit and make
                everyday household tasks easier with Kaamdaar.
              </p>

              <button
                type="button"
                className="service-one-primary-btn"
                onClick={() => navigate("/search")}
              >
                Explore Services <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceOne;
