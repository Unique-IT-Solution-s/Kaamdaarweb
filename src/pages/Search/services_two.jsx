
import React from "react";
import { useNavigate } from "react-router-dom";
import "./services_two.css";

import fridgeImage from "../../assets/services_three.png";
import appImage from "../../assets/services_one.png";

const includedItems = [
  "Cleaning of accessible refrigerator shelves and drawers",
  "Wiping of interior walls and accessible surfaces",
  "Cleaning of refrigerator door and exterior surface",
  "Wiping of accessible door seals",
  "Removal of loose food residue and minor spills",
  "Final wipe-down of cleaned surfaces",
];

const excludedItems = [
  "Repair of refrigerator parts or electrical components",
  "Handling or disposal of spoiled food",
  "Deep freezer defrosting or ice removal",
  "Cleaning of inaccessible internal components",
  "Moving heavy refrigerators or disconnecting appliances",
  "Removal of severe mold or persistent stains",
];

const ServicesTwo = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/booking", {
      state: {
        service: "Fridge Cleaning",
        serviceId: 3,
      },
    });
  };

  return (
    <main className="fridge-service-page">

      {/* Breadcrumb */}
      <div className="fridge-container">
        <nav className="fridge-breadcrumb" aria-label="Breadcrumb">
          <button type="button" onClick={() => navigate("/")}>
            Home
          </button>

          <span>/</span>

          <button type="button" onClick={() => navigate("/search")}>
            Services
          </button>

          <span>/</span>

          <span className="fridge-breadcrumb-current">
            Fridge Cleaning
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="fridge-hero">
        <div className="fridge-container fridge-hero-grid">
          <div className="fridge-hero-content">
            <span className="fridge-eyebrow">
              KAAMDAAR HOME SERVICES
            </span>

            <h1>
              Fridge
              <br />
              <span>Cleaning</span>
            </h1>

            <p className="fridge-hero-description">
              Keep your refrigerator fresh, clean and organized.
              Book a Kaamdaar professional to clean accessible
              shelves, drawers, interior surfaces and the exterior
              of your refrigerator.
            </p>

            <div className="fridge-hero-actions">
              <button
                type="button"
                className="fridge-primary-btn"
                onClick={handleBookNow}
              >
                Book Fridge Cleaning <span>→</span>
              </button>

              <button
                type="button"
                className="fridge-secondary-btn"
                onClick={() => navigate("/search")}
              >
                Explore All Services
              </button>
            </div>
          </div>

          <div className="fridge-hero-visual">
            <img
              src={fridgeImage}
              alt="Fridge cleaning service"
              className="fridge-main-image"
            />
          </div>
        </div>
      </section>

      {/* What's included and not included */}
      <section className="fridge-details-section">
        <div className="fridge-container">
          <div className="fridge-details-grid">
            <article className="fridge-details-column">
              <h2>
                <span className="fridge-heading-mark fridge-included-mark">
                  ✓
                </span>
                What's included
              </h2>

              <ul className="fridge-list fridge-included-list">
                {includedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="fridge-details-column">
              <h2>
                <span className="fridge-heading-mark fridge-excluded-mark">
                  ×
                </span>
                Not included
              </h2>

              <ul className="fridge-list fridge-excluded-list">
                {excludedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* App promotion */}
      <section className="fridge-app-section">
        <div className="fridge-container">
          <div className="fridge-app-banner">
            <div className="fridge-app-visual">
              <img
                src={appImage}
                alt="Kaamdaar home services"
                className="fridge-app-image"
                loading="lazy"
              />
            </div>

            <div className="fridge-app-content">
              <span className="fridge-app-eyebrow">
                YOUR HOME, OUR HELP
              </span>

              <h2>Get trusted house help in minutes.</h2>

              <p>
                From kitchen cleaning to everyday household tasks,
                find the right help for your home with Kaamdaar.
              </p>

              <button
                type="button"
                className="fridge-primary-btn"
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

export default ServicesTwo;
