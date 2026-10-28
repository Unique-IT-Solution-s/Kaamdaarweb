
import React from "react";
import { useNavigate } from "react-router-dom";
import "./PackingUnpacking.css";

import packingImage from "../../assets/services_four.png";
import appImage from "../../assets/services_one.png";

const includedItems = [
  "Packing of everyday household items into suitable boxes",
  "Careful wrapping of fragile items using available packing material",
  "Organizing packed items by room or category",
  "Unpacking boxes and placing items in designated areas",
  "Basic arrangement of household belongings",
  "Collecting and organizing used packing materials in one place",
];

const excludedItems = [
  "Supply or purchase of cartons, bubble wrap, or packing materials",
  "Transportation of packed belongings to another location",
  "Heavy furniture dismantling or reassembly",
  "Installation of appliances, lights, or wall-mounted items",
  "Moving safes, unusually heavy objects, or hazardous materials",
  "Professional relocation, loading, or unloading services",
];

const PackingUnpacking = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/booking", {
      state: {
        service: "Packing or Unpacking",
        serviceId: 4,
      },
    });
  };

  return (
    <main className="packing-page">
    

      {/* Breadcrumb */}
      <div className="packing-container">
        <nav className="packing-breadcrumb" aria-label="Breadcrumb">
          <button type="button" onClick={() => navigate("/")}>
            Home
          </button>
          <span>/</span>
          <button type="button" onClick={() => navigate("/search")}>
            Services
          </button>
          <span>/</span>
          <span className="packing-breadcrumb-current">
            Packing or Unpacking
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="packing-hero">
        <div className="packing-container packing-hero-grid">
          <div className="packing-hero-content">
            <span className="packing-eyebrow">
              KAAMDAAR HOME SERVICES
            </span>

            <h1>
              Packing or
              <br />
              <span>Unpacking</span>
            </h1>

            <p className="packing-description">
              Make moving and organizing easier with reliable
              household packing and unpacking help. Get assistance
              with packing everyday belongings, organizing boxes
              and unpacking items at your convenience.
            </p>

            <div className="packing-actions">
              <button
                type="button"
                className="packing-primary-btn"
                onClick={handleBookNow}
              >
                Book Packing Help <span>→</span>
              </button>

              <button
                type="button"
                className="packing-secondary-btn"
                onClick={() => navigate("/search")}
              >
                Explore All Services
              </button>
            </div>
          </div>

          <div className="packing-hero-visual">
            <img
              src={packingImage}
              alt="Household packing and unpacking service"
              className="packing-main-image"
            />
          </div>
        </div>
      </section>

      {/* What's included / Not included */}
      <section className="packing-details-section">
        <div className="packing-container">
          <div className="packing-details-grid">
            <article className="packing-details-column">
              <h2>
                <span className="packing-heading-mark packing-included-mark">
                  ✓
                </span>
                What's included
              </h2>

              <ul className="packing-list packing-included-list">
                {includedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="packing-details-column">
              <h2>
                <span className="packing-heading-mark packing-excluded-mark">
                  ×
                </span>
                Not included
              </h2>

              <ul className="packing-list packing-excluded-list">
                {excludedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* App promotion */}
      <section className="packing-app-section">
        <div className="packing-container">
          <div className="packing-app-banner">
            <div className="packing-app-visual">
              <img
                src={appImage}
                alt="Kaamdaar home services"
                className="packing-app-image"
                loading="lazy"
              />
            </div>

            <div className="packing-app-content">
              <span className="packing-app-eyebrow">
                YOUR HOME, OUR HELP
              </span>

              <h2>Get trusted house help in minutes.</h2>

              <p>
                Whether you're organizing your home or preparing
                for a move, Kaamdaar helps make everyday tasks
                easier to manage.
              </p>

              <button
                type="button"
                className="packing-primary-btn"
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

export default PackingUnpacking;
