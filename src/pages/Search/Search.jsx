

import React, { useMemo, useState, useEffect } from "react";
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

// Demo filter values: replace with actual API data when available.
const services = [
  { id: 1, title: "Hourly Bookings", image: services_one, price: 299, rating: 4.5, availability: ["Today", "Tomorrow"], type: "Hourly Service" },
  { id: 2, title: "Bathroom Cleaning", image: services_two, price: 499, rating: 4.6, availability: ["Today", "Tomorrow"], type: "Deep Cleaning" },
  { id: 3, title: "Fridge Cleaning", image: services_three, price: 399, rating: 4.3, availability: ["Tomorrow", "This Week"], type: "One-time Service" },
  { id: 4, title: "Packing or Unpacking", image: services_four, price: 599, rating: 4.2, availability: ["Today", "This Week"], type: "One-time Service" },
  { id: 5, title: "Utensils", image: services_five, price: 249, rating: 4.1, availability: ["Today", "Tomorrow"], type: "Hourly Service" },
  { id: 6, title: "Kitchen Prep", image: services_six, price: 349, rating: 4.4, availability: ["Today", "Tomorrow"], type: "Hourly Service" },
  { id: 7, title: "Dusting & Wiping", image: services_seven, price: 299, rating: 4.2, availability: ["Today", "This Week"], type: "One-time Service" },
  { id: 8, title: "Sweeping & Mopping", image: services_eight, price: 299, rating: 4.4, availability: ["Today", "Tomorrow"], type: "Hourly Service" },
  { id: 9, title: "Pre-Party Express", image: services_nine, price: 699, rating: 4.5, availability: ["Tomorrow", "This Week"], type: "One-time Service" },
  { id: 10, title: "Complete Wardrobe", image: services_ten, price: 499, rating: 4.1, availability: ["Today", "This Week"], type: "One-time Service" },
  { id: 11, title: "After-Party Express", image: services_eleven, price: 799, rating: 4.3, availability: ["Tomorrow", "This Week"], type: "Deep Cleaning" },
  { id: 12, title: "Ironing & Folding", image: services_twelve, price: 249, rating: 4.6, availability: ["Today", "Tomorrow"], type: "Laundry & Clothes Care" },
  { id: 13, title: "Home Deep Cleaning", image: services_thirteen, price: 1499, rating: 4.8, availability: ["Tomorrow", "This Week"], type: "Deep Cleaning" },
  { id: 14, title: "Kitchen Cleaning", image: services_fourteen, price: 699, rating: 4.5, availability: ["Today", "This Week"], type: "Deep Cleaning" },
  { id: 15, title: "Living Room Cleaning", image: services_fifteen, price: 599, rating: 4.2, availability: ["Today", "Tomorrow"], type: "One-time Service" },
  { id: 16, title: "Laundry Services", image: services_sixteen, price: 399, rating: 4.4, availability: ["Today", "Tomorrow"], type: "Laundry & Clothes Care" },
  { id: 17, title: "Window Cleaning", image: services_seventeen, price: 499, rating: 4.3, availability: ["Tomorrow", "This Week"], type: "One-time Service" },
  { id: 18, title: "Move-in / Move-out Cleaning", image: services_eighteen, price: 1799, rating: 4.7, availability: ["Tomorrow", "This Week"], type: "Move-in / Move-out" },
];

const categories = services.map((service) => service.title);

const serviceTypes = [
  "Hourly Service",
  "One-time Service",
  "Deep Cleaning",
  "Move-in / Move-out",
  "Laundry & Clothes Care",
];

const availabilityOptions = ["Today", "Tomorrow", "This Week"];

const ratingOptions = [
  { label: "4.5 & above", value: 4.5, stars: "★★★★★" },
  { label: "4.0 & above", value: 4.0, stars: "★★★★" },
  { label: "3.5 & above", value: 3.5, stars: "★★★" },
];

const initialFilters = {
  categories: [],
  maxPrice: 2000,
  rating: null,
  availability: [],
  types: [],
};

const Search = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState(initialFilters);
  const [draftFilters, setDraftFilters] = useState(initialFilters);

  useEffect(() => {
    if (!filtersOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") setFiltersOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    document.body.classList.add("filters-drawer-open");

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("filters-drawer-open");
    };
  }, [filtersOpen]);

  const activeFilterCount =
    filters.categories.length +
    (filters.rating !== null ? 1 : 0) +
    filters.availability.length +
    filters.types.length +
    (filters.maxPrice < 2000 ? 1 : 0);

  const filteredServices = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return services.filter((service) => {
      const matchesSearch =
        !query || service.title.toLowerCase().includes(query);

      const matchesCategory =
        filters.categories.length === 0 ||
        filters.categories.includes(service.title);

      const matchesPrice = service.price <= filters.maxPrice;

      const matchesRating =
        filters.rating === null || service.rating >= filters.rating;

      const matchesAvailability =
        filters.availability.length === 0 ||
        filters.availability.some((day) =>
          service.availability.includes(day)
        );

      const matchesType =
        filters.types.length === 0 ||
        filters.types.includes(service.type);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice &&
        matchesRating &&
        matchesAvailability &&
        matchesType
      );
    });
  }, [searchQuery, filters]);

  const toggleArrayFilter = (key, value, checked) => {
    setDraftFilters((previous) => ({
      ...previous,
      [key]: checked
        ? [...previous[key], value]
        : previous[key].filter((item) => item !== value),
    }));
  };

  const openFilters = () => {
    setDraftFilters(filters);
    setFiltersOpen(true);
  };

  const applyFilters = () => {
    setFilters(draftFilters);
    setFiltersOpen(false);
  };

  const clearDraftFilters = () => {
    setDraftFilters(initialFilters);
  };

  const clearAllFilters = () => {
    setFilters(initialFilters);
    setDraftFilters(initialFilters);
  };

  const handleServiceClick = (service) => {
    const routes = {
      "Hourly Bookings": "/hourly-booking",
      "Bathroom Cleaning": "/service-one",
      "Fridge Cleaning": "/services-two",
      "Packing or Unpacking": "/packing-unpacking",
      Utensils: "/utensils-cleaning",
      "Kitchen Prep": "/kitchen-prep",
      "Dusting & Wiping": "/dusting-wiping",
      "Sweeping & Mopping": "/sweeping-mopping",
      "Pre-Party Express": "/pre-party-express",
      "Complete Wardrobe": "/complete-wardrobe",
      "After-Party Express": "/after-party-express",
      "Ironing & Folding": "/ironing-folding",
      "Home Deep Cleaning": "/home-deep-cleaning",
      "Kitchen Cleaning": "/kitchen-cleaning",
      "Living Room Cleaning": "/living-room-cleaning",
      "Laundry Services": "/laundry-services",
      "Window Cleaning": "/window-cleaning",
      "Move-in / Move-out Cleaning": "/move-in-move-out-cleaning",
    };

    const route = routes[service.title];

    if (route) {
      navigate(route);
      return;
    }

    navigate(`/service?category=${encodeURIComponent(service.title)}`, {
      state: {
        service: service.title,
        serviceId: service.id,
      },
    });
  };

  return (
    <main className="search-page">
      {/* Search Bar */}
      <section className="top-search-bar">
        <div className="container top-search-container">

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
            className="filters-open-btn"
            onClick={openFilters}
            aria-expanded={filtersOpen}
            aria-controls="services-filter-drawer"
          >
            <span aria-hidden="true">☷</span>
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className="filters-count-badge">{activeFilterCount}</span>
            )}
          </button>

          <button
            type="button"
            className="top-search-btn"
            aria-label="Scroll to search results"
            onClick={() =>
              document.querySelector(".services-grid")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          >
            🔍
          </button>
        </div>
      </section>

      {/* Services */}
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
                    <span className="service-arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="services-empty">
              <h2>No services found</h2>
              <p>
                Try changing your search or clearing some filters.
              </p>

              <button
                type="button"
                className="reset-search-btn"
                onClick={() => {
                  setSearchQuery("");
                  clearAllFilters();
                }}
              >
                Clear Search & Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Drawer Overlay */}
      <div
        className={`filters-overlay ${filtersOpen ? "is-visible" : ""}`}
        onClick={() => setFiltersOpen(false)}
        aria-hidden="true"
      />

      {/* Right-side Filter Drawer */}
      <aside
        id="services-filter-drawer"
        className={`filters-drawer ${filtersOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal={filtersOpen ? "true" : undefined}
        aria-labelledby="filters-drawer-title"
        aria-hidden={!filtersOpen}
        inert={!filtersOpen}
      >
        <div className="filters-drawer-header">
          <h2 id="filters-drawer-title">Filters</h2>

          <button
            type="button"
            className="filters-clear-btn"
            onClick={clearDraftFilters}
          >
            Clear All
          </button>

          <button
            type="button"
            className="filters-close-btn"
            onClick={() => setFiltersOpen(false)}
            aria-label="Close filters"
          >
            ×
          </button>
        </div>

        <div className="filters-drawer-content">
          {/* Category */}
          <section className="filter-section">
            <h3>Category</h3>

            <div className="filter-options category-options">
              {categories.map((category) => (
                <label className="filter-option" key={category}>
                  <input
                    type="checkbox"
                    checked={draftFilters.categories.includes(category)}
                    onChange={(event) =>
                      toggleArrayFilter(
                        "categories",
                        category,
                        event.target.checked
                      )
                    }
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Price Range */}
          <section className="filter-section">
            <h3>Price Range</h3>

            <input
              className="price-range-slider"
              type="range"
              min="0"
              max="2000"
              step="50"
              value={draftFilters.maxPrice}
              onChange={(event) =>
                setDraftFilters((previous) => ({
                  ...previous,
                  maxPrice: Number(event.target.value),
                }))
              }
              aria-label="Maximum service price"
            />

            <div className="price-range-labels">
              <span>₹0</span>
              <strong>Up to ₹{draftFilters.maxPrice}</strong>
              <span>₹2000+</span>
            </div>
          </section>

          {/* Rating */}
          <section className="filter-section">
            <h3>Rating</h3>

            <div className="filter-options">
              {ratingOptions.map((option) => (
                <label className="filter-option" key={option.value}>
                  <input
                    type="radio"
                    name="service-rating"
                    checked={draftFilters.rating === option.value}
                    onChange={() =>
                      setDraftFilters((previous) => ({
                        ...previous,
                        rating:
                          previous.rating === option.value
                            ? null
                            : option.value,
                      }))
                    }
                  />

                  <span className="rating-stars">{option.stars}</span>
                  <span>{option.label}</span>
                </label>
              ))}

              <label className="filter-option">
                <input
                  type="radio"
                  name="service-rating"
                  checked={draftFilters.rating === null}
                  onChange={() =>
                    setDraftFilters((previous) => ({
                      ...previous,
                      rating: null,
                    }))
                  }
                />
                <span>Any rating</span>
              </label>
            </div>
          </section>

          {/* Availability */}
          <section className="filter-section">
            <h3>Availability</h3>

            <div className="filter-options">
              {availabilityOptions.map((day) => (
                <label className="filter-option" key={day}>
                  <input
                    type="checkbox"
                    checked={draftFilters.availability.includes(day)}
                    onChange={(event) =>
                      toggleArrayFilter(
                        "availability",
                        day,
                        event.target.checked
                      )
                    }
                  />
                  <span>{day}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Service Type */}
          <section className="filter-section">
            <h3>Service Type</h3>

            <div className="filter-options">
              {serviceTypes.map((type) => (
                <label className="filter-option" key={type}>
                  <input
                    type="checkbox"
                    checked={draftFilters.types.includes(type)}
                    onChange={(event) =>
                      toggleArrayFilter(
                        "types",
                        type,
                        event.target.checked
                      )
                    }
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </section>
        </div>

        <div className="filters-drawer-footer">
          <button
            type="button"
            className="filters-reset-footer-btn"
            onClick={clearDraftFilters}
          >
            Reset
          </button>

          <button
            type="button"
            className="filters-apply-btn"
            onClick={applyFilters}
          >
            Show {services.filter((service) => {
              const matchesCategory =
                draftFilters.categories.length === 0 ||
                draftFilters.categories.includes(service.title);
              const matchesPrice = service.price <= draftFilters.maxPrice;
              const matchesRating =
                draftFilters.rating === null ||
                service.rating >= draftFilters.rating;
              const matchesAvailability =
                draftFilters.availability.length === 0 ||
                draftFilters.availability.some((day) =>
                  service.availability.includes(day)
                );
              const matchesType =
                draftFilters.types.length === 0 ||
                draftFilters.types.includes(service.type);

              return (
                matchesCategory &&
                matchesPrice &&
                matchesRating &&
                matchesAvailability &&
                matchesType
              );
            }).length} Services
          </button>
        </div>
      </aside>
    </main>
  );
};

export default Search;
