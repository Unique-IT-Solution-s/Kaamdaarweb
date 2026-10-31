
import React from "react";
import { useNavigate } from "react-router-dom";
import "./UtensilsCleaning.css";

import utensilsImage from "../../assets/services_five.png";
import appImage from "../../assets/services_one.png";

const includedItems = [
  "Washing of everyday plates, bowls and serving dishes",
  "Cleaning of cups, glasses and mugs",
  "Washing of spoons, forks and other everyday cutlery",
  "Cleaning of commonly used cooking utensils",
  "Rinsing utensils with water and dishwashing liquid",
  "Placing clean utensils in the designated drying area",
];

const excludedItems = [
  "Cleaning of chimney, oven or other kitchen appliances",
  "Removal of heavy burnt-on residue requiring specialized treatment",
  "Cleaning of kitchen cabinets and drawers",
  "Washing unusually large or heavy cookware",
  "Cleaning of utensils requiring special chemical treatment",
  "Deep cleaning of the kitchen sink and surrounding surfaces",
];

const UtensilsCleaning = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/booking", {
      state: {
        service: "Utensils",
        serviceId: 5,
      },
    });
  };

  return (
    <main className="utensils-page">

      {/* Breadcrumb */}
      <div className="utensils-container">
        <nav className="utensils-breadcrumb" aria-label="Breadcrumb">
          <button type="button" onClick={() => navigate("/")}>
            Home
          </button>
          <span>/</span>
          <button type="button" onClick={() => navigate("/search")}>
            Services
          </button>
          <span>/</span>
          <span className="utensils-breadcrumb-current">
            Utensils Cleaning
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="utensils-hero">
        <div className="utensils-container utensils-hero-grid">
          <div className="utensils-hero-content">
            <span className="utensils-eyebrow">
              KAAMDAAR HOME SERVICES
            </span>

            <h1>
              Utensils
              <br />
              <span>Cleaning</span>
            </h1>

            <p className="utensils-description">
              Keep your kitchen routine simple with help for everyday
              dishwashing. Get assistance with cleaning plates, bowls,
              cups, cutlery and commonly used cooking utensils.
            </p>

            <div className="utensils-actions">
              <button
                type="button"
                className="utensils-primary-btn"
                onClick={handleBookNow}
              >
                
                Book Utensils Cleaning <span>→</span>
              </button>

              <button
                type="button"
                className="utensils-secondary-btn"
                onClick={() => navigate("/search")}
              >
                Explore All Services
              </button>
            </div>
          </div>

          <div className="utensils-hero-visual">
            <img
              src={utensilsImage}
              alt="Utensils cleaning service"
              className="utensils-main-image"
            />
          </div>
        </div>
      </section>

      {/* Included and excluded */}
      <section className="utensils-details-section">
        <div className="utensils-container">
          <div className="utensils-details-grid">
            <article className="utensils-details-column">
              <h2>
                <span className="utensils-heading-mark utensils-included-mark">
                  ✓
                </span>
                What's included
              </h2>

              <ul className="utensils-list utensils-included-list">
                {includedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="utensils-details-column">
              <h2>
                <span className="utensils-heading-mark utensils-excluded-mark">
                  ×
                </span>
                Not included
              </h2>

              <ul className="utensils-list utensils-excluded-list">
                {excludedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* App promotion */}
      <section className="utensils-app-section">
        <div className="utensils-container">
          <div className="utensils-app-banner">
            <div className="utensils-app-visual">
              <img
                src={appImage}
                alt="Kaamdaar home services"
                className="utensils-app-image"
                loading="lazy"
              />
            </div>

            <div className="utensils-app-content">
              <span className="utensils-app-eyebrow">
                YOUR HOME, OUR HELP
              </span>

              <h2>Get trusted house help in minutes.</h2>

              <p>
                Spend less time on everyday household chores.
                Find the home services you need with Kaamdaar.
              </p>

              <button
                type="button"
                className="utensils-primary-btn"
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

export default UtensilsCleaning;
