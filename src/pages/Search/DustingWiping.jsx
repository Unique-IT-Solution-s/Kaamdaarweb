
import React from "react";
import { useNavigate } from "react-router-dom";
import "./DustingWiping.css";

import dustingImage from "../../assets/services_seven.png";
import appImage from "../../assets/services_one.png";

const includedItems = [
  "Dusting of accessible furniture and tables",
  "Wiping of shelves and accessible surfaces",
  "Cleaning of side tables, desks and countertops",
  "Dusting of decorative items that can be safely reached",
  "Wiping of door handles and commonly touched surfaces",
  "Removal of loose dust from accessible household surfaces",
];

const excludedItems = [
  "Cleaning of ceilings and high surfaces requiring ladders",
  "Deep cleaning of upholstery, sofas or mattresses",
  "Removal of stubborn stains or paint marks",
  "Cleaning of electrical equipment interiors",
  "Heavy furniture shifting or dismantling",
  "Exterior window cleaning at height",
];

const DustingWiping = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/booking", {
      state: {
        service: "Dusting & Wiping",
        serviceId: 7,
      },
    });
  };

  return (
    <main className="dusting-page">

      {/* Breadcrumb */}
      <div className="dusting-container">
        <nav className="dusting-breadcrumb" aria-label="Breadcrumb">
          <button type="button" onClick={() => navigate("/")}>
            Home
          </button>
          <span>/</span>
          <button type="button" onClick={() => navigate("/search")}>
            Services
          </button>
          <span>/</span>
          <span className="dusting-current">Dusting & Wiping</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="dusting-hero">
        <div className="dusting-container dusting-hero-grid">
          <div className="dusting-hero-content">
            <span className="dusting-eyebrow">
              KAAMDAAR HOME SERVICES
            </span>

            <h1>
              Dusting &
              <br />
              <span>Wiping</span>
            </h1>

            <p className="dusting-description">
              Keep your home looking fresh and tidy with help for
              everyday dust removal. Get assistance with accessible
              furniture, tables, shelves and household surfaces,
              leaving your living spaces neat and comfortable.
            </p>

            <div className="dusting-actions">
              <button
                type="button"
                className="dusting-primary-btn"
                onClick={handleBookNow}
              >
                Book Dusting & Wiping <span>→</span>
              </button>

              <button
                type="button"
                className="dusting-secondary-btn"
                onClick={() => navigate("/search")}
              >
                Explore All Services
              </button>
            </div>
          </div>

          <div className="dusting-hero-visual">
            <img
              src={dustingImage}
              alt="Dusting and wiping home cleaning service"
              className="dusting-main-image"
            />
          </div>
        </div>
      </section>

      {/* What's included / Not included */}
      <section className="dusting-details">
        <div className="dusting-container">
          <div className="dusting-details-grid">
            <article className="dusting-details-column">
              <h2>
                <span className="dusting-heading-mark dusting-included-mark">
                  ✓
                </span>
                What's included
              </h2>

              <ul className="dusting-list dusting-included-list">
                {includedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="dusting-details-column">
              <h2>
                <span className="dusting-heading-mark dusting-excluded-mark">
                  ×
                </span>
                Not included
              </h2>

              <ul className="dusting-list dusting-excluded-list">
                {excludedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* App promotion */}
      <section className="dusting-app-section">
        <div className="dusting-container">
          <div className="dusting-app-banner">
            <div className="dusting-app-visual">
              <img
                src={appImage}
                alt="Kaamdaar home services"
                className="dusting-app-image"
                loading="lazy"
              />
            </div>

            <div className="dusting-app-content">
              <span className="dusting-app-eyebrow">
                YOUR HOME, OUR HELP
              </span>

              <h2>Enjoy a cleaner, fresher home.</h2>

              <p>
                Make everyday household cleaning easier. Find the
                right home services for your routine with Kaamdaar.
              </p>

              <button
                type="button"
                className="dusting-primary-btn"
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

export default DustingWiping;
