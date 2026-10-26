
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

import services_one from "../../assets/services_one.png";
import services_two from "../../assets/services_two.png";
import services_three from "../../assets/services_three.png";
import services_four from "../../assets/services_four.png";
import services_five from "../../assets/services_five.png";
import services_six from "../../assets/services_six.png";
import services_seven from "../../assets/services_seven.png";
import services_eight from "../../assets/services_eight.png";
import services_nine from "../../assets/services_nine.png";
import services_ten from "../../assets/services_ten.png";
import services_eleven from "../../assets/services_eleven.png";
import services_twelve from "../../assets/services_twelve.png";
import services_thirteen from "../../assets/services_thirteen.png";
import services_fourteen from "../../assets/services_fourteen.png";
import services_fifteen from "../../assets/services_fifteen.png";
import services_sixteen from "../../assets/services_sixteen.png";
import services_seventeen from "../../assets/services_seventeen.png";
import services_eighteen from "../../assets/services_eighteen.png";

const services = [
  { id: 1, title: "Hourly Bookings", image: services_one },
  { id: 2, title: "Bathroom Cleaning", image: services_two },
  { id: 3, title: "Fridge Cleaning", image: services_three },
  { id: 4, title: "Packing or Unpacking", image: services_four },
  { id: 5, title: "Utensils", image: services_five },
  { id: 6, title: "Kitchen Prep", image: services_six },
  { id: 7, title: "Dusting & Wiping", image: services_seven },
  { id: 8, title: "Sweeping & Mopping", image: services_eight },
  { id: 9, title: "Pre-Party Express", image: services_nine },
  { id: 10, title: "Complete Wardrobe", image: services_ten },
  { id: 11, title: "After-Party Express", image: services_eleven },
  { id: 12, title: "Ironing & Folding", image: services_twelve },
  { id: 13, title: "Home Deep Cleaning", image: services_thirteen },
  { id: 14, title: "Kitchen Cleaning", image: services_fourteen },
  { id: 15, title: "Living Room Cleaning", image: services_fifteen },
  { id: 16, title: "Laundry Services", image: services_sixteen },
  { id: 17, title: "Window Cleaning", image: services_seventeen },
  {
    id: 18,
    title: "Move-in / Move-out Cleaning",
    image: services_eighteen,
  },
];

const Search = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return services;

    return services.filter((service) =>
      service.title.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleServiceClick = (service) => {
    if (service.title === "Hourly Bookings") {
      navigate("/hourly-booking");
      return;
    }
    if (service.title === "Bathroom Cleaning") {
      navigate("/service-one");
      return;
    }
    if (service.title === "Fridge Cleaning") {
      navigate("/services-two");
      return;
    }

    navigate(
      `/service?category=${encodeURIComponent(service.title)}`,
      {
        state: {
          service: service.title,
          serviceId: service.id,
        },
      }
    );
  };

  return (
    <main className="search-page">
      {/* Search bar */}
      <section className="top-search-bar">
        <div className="container top-search-container">
          <div className="search-location">
            <span aria-hidden="true">📍</span>
            <span>Jaipur, Rajasthan</span>
            <span aria-hidden="true">▼</span>
          </div>

          <div className="search-input-wrapper">
            <span aria-hidden="true">🔍</span>

            <input
              type="search"
              placeholder="Search for a service..."
              aria-label="Search services"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />

            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          <button
            type="button"
            className="top-search-btn"
            aria-label="Search services"
            onClick={() => {
              document
                .querySelector(".services-grid")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
            }}
          >
            🔍
          </button>
        </div>
      </section>

      {/* Service cards */}
      <section className="services-panel">
        <div className="container">
          <div className="services-header">
            <div>
              <h1>Explore Our Services</h1>
              <p>Find the right service for your everyday needs.</p>
            </div>

            <span className="services-count">
              {filteredServices.length} Services
            </span>
          </div>

          {filteredServices.length > 0 ? (
            <div className="services-grid">
              {filteredServices.map((service) => (
                <button
                  type="button"
                  key={service.id}
                  className="service-card"
                  onClick={() => handleServiceClick(service)}
                  aria-label={`Explore ${service.title}`}
                >
                  <div className="service-image-wrapper">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-image"
                      loading={service.id <= 6 ? "eager" : "lazy"}
                    />
                  </div>

                  <div className="service-card-footer">
                    <h2>{service.title}</h2>

                    <span
                      className="service-arrow"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="services-empty">
              <h2>No services found</h2>
              <p>Try searching with a different service name.</p>

              <button
                type="button"
                className="reset-search-btn"
                onClick={() => setSearchQuery("")}
              >
                View all services
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Search;
