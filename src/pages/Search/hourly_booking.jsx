
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hourly_Booking.css";

import hourlyImage from "../../assets/services_one.png";
import bathroomImage from "../../assets/services_two.png";
import fridgeImage from "../../assets/services_three.png";
import utensilsImage from "../../assets/services_five.png";
import kitchenPrepImage from "../../assets/services_six.png";
import dustingImage from "../../assets/services_seven.png";
import moppingImage from "../../assets/services_eight.png";
import partyImage from "../../assets/services_nine.png";
import kitchenImage from "../../assets/services_fourteen.png";
import laundryImage from "../../assets/services_sixteen.png";
import windowImage from "../../assets/services_seventeen.png";
import wardrobeImage from "../../assets/services_ten.png";

const durations = [
  { value: 0.5, label: "30 min" },
  { value: 1, label: "1 hr", popular: true },
  { value: 1.5, label: "1.5 hr" },
  { value: 2, label: "2 hr" },
  { value: 3, label: "3 hr" },
];

const taskDurations = [
  { name: "Bathroom Cleaning", time: 40 },
  { name: "Utensils", time: 20 },
  { name: "Balcony Cleaning", time: 30 },
  { name: "Dusting & Wiping", time: 30 },
  { name: "Sweeping & Mopping", time: 30 },
  { name: "Kitchen Cleaning", time: 30 },
  { name: "Window Cleaning", time: 25 },
  { name: "Ironing & Folding", time: 30 },
  { name: "Kitchen Prep", time: 30 },
  { name: "Laundry Services", time: 45 },
  { name: "Fridge Cleaning", time: 25 },
  { name: "Pre-Party Express", time: 45 },
];

const excludedTasks = [
  "Dry wiping of walls",
  "Complete wardrobe cleaning and organization",
  "Kitchen cabinet interior cleaning",
  "Shower cubicle and bathtub deep cleaning",
  "Specialized services booked separately, such as move-in cleaning",
];

const benefits = [
  {
    image: bathroomImage,
    title: "Verified Professionals",
    description: "Trained and background-verified professionals.",
  },
  {
    image: hourlyImage,
    title: "Flexible Booking",
    description: "Choose the duration that suits your needs.",
  },
  {
    image: utensilsImage,
    title: "Transparent Pricing",
    description: "Know your booking cost before confirming.",
  },
  {
    image: partyImage,
    title: "Dedicated Support",
    description: "Help whenever you need assistance.",
  },
];

const Hourly_Booking = () => {
  const navigate = useNavigate();

  const [selectedDuration, setSelectedDuration] = useState(1);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const toggleTask = (taskName) => {
    setSelectedTasks((previous) =>
      previous.includes(taskName)
        ? previous.filter((task) => task !== taskName)
        : [...previous, taskName]
    );
  };

  const handleContinue = () => {
    navigate(
      `/service?category=${encodeURIComponent("Hourly Bookings")}`,
      {
        state: {
          service: "Hourly Bookings",
          duration: selectedDuration,
          tasks: selectedTasks,
        },
      }
    );
  };

  return (
    <main className="hourly-page">
      {/* Breadcrumb */}
      <div className="hourly-container hourly-breadcrumb">
        <button type="button" onClick={() => navigate("/")}>
          Home
        </button>

        <span>/</span>

        <button type="button" onClick={() => navigate("/search")}>
          Services
        </button>

        <span>/</span>

        <span className="breadcrumb-current">Hourly Bookings</span>
      </div>

      {/* Hero Section */}
      <section className="hourly-hero">
        <div className="hourly-container hourly-hero-grid">
          <div className="hourly-hero-content">
            <span className="hourly-eyebrow">
              <span className="eyebrow-dot" />
              Flexible · Reliable · On-Demand
            </span>

            <h1>
              Hourly
              <br />
              <span>Bookings</span>
            </h1>

            <h2>Book for up to 3 hours, pick your time.</h2>

            <p className="hourly-hero-description">
              Book a trusted Kaamdaar professional for your everyday
              household tasks. Combine multiple tasks in a single visit
              and choose a duration that works for you.
            </p>

            <div className="hourly-duration-label">
              PICK YOUR DURATION
            </div>

            <div className="hourly-duration-options">
              {durations.map((duration) => (
                <button
                  type="button"
                  key={duration.value}
                  className={`hourly-duration-card ${
                    selectedDuration === duration.value ? "selected" : ""
                  }`}
                  onClick={() => setSelectedDuration(duration.value)}
                  aria-pressed={selectedDuration === duration.value}
                >
                  {duration.popular && (
                    <span className="duration-popular">
                      MOST POPULAR
                    </span>
                  )}

                  <span className="duration-value">
                    {duration.label}
                  </span>

                  {selectedDuration === duration.value && (
                    <span className="duration-check">✓</span>
                  )}
                </button>
              ))}
            </div>

            <div className="hourly-hero-actions">
              <button
                type="button"
                className="hourly-primary-btn"
                onClick={handleContinue}
              >
                Book Hourly Help <span>→</span>
              </button>

              <button
                type="button"
                className="hourly-secondary-btn"
                onClick={() => navigate("/search")}
              >
                Explore All Services <span>↗</span>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hourly-hero-visual">
            <div className="hourly-visual-decoration decoration-one" />
            <div className="hourly-visual-decoration decoration-two" />

            <div className="hourly-image-placeholder">
              <img
                src={hourlyImage}
                alt="Hourly home services"
                className="hourly-hero-image"
              />

              <span className="hourly-visual-caption">
                Your time. Your tasks. Your choice.
              </span>
            </div>

            <div className="hourly-floating-tag">
              <span>✓</span>
              Flexible home help
            </div>
          </div>
        </div>
      </section>

      {/* Task Duration Guide - No Icons */}
      <section className="hourly-task-section">
        <div className="hourly-container">
          <div className="hourly-section-heading">
            <span className="hourly-section-kicker">
              PLAN YOUR VISIT
            </span>

            <h2>How long does it take?</h2>

            <p>
              Estimated task durations for a typical 2BHK home.
              Actual time may vary depending on the condition and size.
            </p>
          </div>

          <div className="hourly-task-grid">
            {taskDurations.map((task) => (
              <div className="hourly-task-item" key={task.name}>
                <span className="hourly-task-name">
                  {task.name}
                </span>

                <span className="hourly-task-time">
                  {task.time} mins
                </span>
              </div>
            ))}
          </div>

          <p className="hourly-task-note">
            Task times are indicative, not guaranteed. The helper will
            prioritize tasks according to your available booking duration.
          </p>
        </div>
      </section>

      {/* Exclusions */}
      <section className="hourly-exclusions-section">
        <div className="hourly-container">
          <div className="hourly-exclusions-heading">
            <span className="exclusion-cross">×</span>
            <h2>What is not included?</h2>
          </div>

          <div className="hourly-exclusions-grid">
            {excludedTasks.map((task) => (
              <div className="hourly-exclusion-item" key={task}>
                <span>•</span>
                <p>{task}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Promotion */}
      <section className="hourly-app-section">
        <div className="hourly-container">
          <div className="hourly-app-banner">
            <div className="hourly-app-visual">
              <div className="hourly-app-placeholder">
                <img
                  src={hourlyImage}
                  alt="Kaamdaar home services"
                  className="hourly-app-image"
                  loading="lazy"
                />

                <strong>Kaamdaar</strong>
                <small>Home services, made simple.</small>
              </div>
            </div>

            <div className="hourly-app-content">
              <span className="hourly-section-kicker">
                YOUR HOME, OUR HELP
              </span>

              <h2>Get trusted home help in minutes.</h2>

              <p>
                Choose your service, plan your time and make
                everyday household tasks easier with Kaamdaar.
              </p>

              <button
                type="button"
                className="hourly-primary-btn"
                onClick={() => navigate("/search")}
              >
                Explore Services <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="hourly-benefits-section">
        <div className="hourly-container">
          <div className="hourly-section-heading benefits-heading">
            <h2>Why book hourly help on Kaamdaar?</h2>

            <p>
              Flexible household help designed around your day.
            </p>
          </div>

          <div className="hourly-benefits-grid">
            {benefits.map((benefit) => (
              <article
                className="hourly-benefit-card"
                key={benefit.title}
              >
                <div className="hourly-benefit-icon">
                  <img src={benefit.image} alt="" loading="lazy" />
                </div>

                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hourly_Booking;
