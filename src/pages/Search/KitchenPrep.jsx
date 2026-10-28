
import React from "react";
import { useNavigate } from "react-router-dom";
import "./KitchenPrep.css";

import kitchenPrepImage from "../../assets/services_six.png";
import appImage from "../../assets/services_one.png";

const includedItems = [
  "Washing and cutting vegetables for meal preparation",
  "Peeling and chopping common cooking ingredients",
  "Basic preparation of ingredients according to instructions",
  "Sorting and organizing ingredients before cooking",
  "Preparing basic ingredients such as herbs and spices",
  "Keeping the immediate food preparation area tidy",
];

const excludedItems = [
  "Cooking complete meals or preparing elaborate dishes",
  "Grocery shopping or purchasing missing ingredients",
  "Handling raw meat or seafood unless agreed in advance",
  "Operating specialized kitchen equipment",
  "Deep cleaning kitchen appliances, cabinets or chimneys",
  "Preparing food for commercial or large-scale events",
];

const KitchenPrep = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/booking", {
      state: {
        service: "Kitchen Prep",
        serviceId: 6,
      },
    });
  };

  return (
    <main className="kitchen-prep-page">

      {/* Breadcrumb */}
      <div className="kitchen-prep-container">
        <nav className="kitchen-prep-breadcrumb" aria-label="Breadcrumb">
          <button type="button" onClick={() => navigate("/")}>
            Home
          </button>
          <span>/</span>
          <button type="button" onClick={() => navigate("/search")}>
            Services
          </button>
          <span>/</span>
          <span className="kitchen-prep-current">
            Kitchen Prep
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="kitchen-prep-hero">
        <div className="kitchen-prep-container kitchen-prep-hero-grid">
          <div className="kitchen-prep-hero-content">
            <span className="kitchen-prep-eyebrow">
              KAAMDAAR HOME SERVICES
            </span>

            <h1>
              Kitchen
              <br />
              <span>Prep</span>
            </h1>

            <p className="kitchen-prep-description">
              Make everyday cooking easier with help preparing
              ingredients before you start. Get assistance with
              washing, peeling, chopping and organizing vegetables
              and other ingredients according to your instructions.
            </p>

            <div className="kitchen-prep-actions">
              <button
                type="button"
                className="kitchen-prep-primary-btn"
                onClick={handleBookNow}
              >
                Book Kitchen Prep <span>→</span>
              </button>

              <button
                type="button"
                className="kitchen-prep-secondary-btn"
                onClick={() => navigate("/search")}
              >
                Explore All Services
              </button>
            </div>
          </div>

          <div className="kitchen-prep-hero-visual">
            <img
              src={kitchenPrepImage}
              alt="Kitchen preparation service"
              className="kitchen-prep-main-image"
            />
          </div>
        </div>
      </section>

      {/* Included / Not included */}
      <section className="kitchen-prep-details">
        <div className="kitchen-prep-container">
          <div className="kitchen-prep-details-grid">
            <article className="kitchen-prep-details-column">
              <h2>
                <span className="kitchen-prep-heading-mark kitchen-prep-included-mark">
                  ✓
                </span>
                What's included
              </h2>

              <ul className="kitchen-prep-list kitchen-prep-included-list">
                {includedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="kitchen-prep-details-column">
              <h2>
                <span className="kitchen-prep-heading-mark kitchen-prep-excluded-mark">
                  ×
                </span>
                Not included
              </h2>

              <ul className="kitchen-prep-list kitchen-prep-excluded-list">
                {excludedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* App promotion */}
      <section className="kitchen-prep-app-section">
        <div className="kitchen-prep-container">
          <div className="kitchen-prep-app-banner">
            <div className="kitchen-prep-app-visual">
              <img
                src={appImage}
                alt="Kaamdaar home services"
                className="kitchen-prep-app-image"
                loading="lazy"
              />
            </div>

            <div className="kitchen-prep-app-content">
              <span className="kitchen-prep-app-eyebrow">
                YOUR HOME, OUR HELP
              </span>

              <h2>Make everyday kitchen tasks easier.</h2>

              <p>
                Get help with everyday household tasks and spend
                more time on the things that matter to you.
              </p>

              <button
                type="button"
                className="kitchen-prep-primary-btn"
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

export default KitchenPrep;
