
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const INITIAL_PROFILE = {
  firstName: "Amit",
  lastName: "Sharma",
  mobile: "+91 98288 6572",
  email: "amit.sharma@example.com",
};

const INITIAL_ADDRESSES = [
  {
    id: 1,
    type: "Home",
    address: "125, Malviya Nagar, Jaipur - 302017",
    isDefault: true,
  },
  {
    id: 2,
    type: "Office",
    address: "Plot 12, Tonk Road, Jaipur - 302018",
    isDefault: false,
  },
];

const MENU_ITEMS = [
  { id: "profile", label: "My Profile", icon: "user-round" },
  { id: "bookings", label: "My Bookings", icon: "calendar-check" },
  { id: "addresses", label: "Saved Addresses", icon: "map-pin" },
  { id: "support", label: "Help & Support", icon: "headset" },
  { id: "refer", label: "Refer & Earn", icon: "gift" },
  { id: "terms", label: "Terms of Services", icon: "file-text" },
  { id: "about", label: "About Us", icon: "info" },
  { id: "privacy", label: "Privacy Policy", icon: "shield-check" },
  {
    id: "delete",
    label: "Request account deletion",
    icon: "user-round-x",
    danger: true,
  },
  { id: "logout", label: "Logout", icon: "log-out", danger: true },
];

const INITIAL_BOOKINGS = {
  Current: [],
  Upcoming: [],
  Previous: [],
};

const Profile = () => {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("profile");
  const [bookingTab, setBookingTab] = useState("Current");
  const [profile, setProfile] = useState(INITIAL_PROFILE);
  const [savedProfile, setSavedProfile] = useState(INITIAL_PROFILE);
  const [addresses, setAddresses] = useState(INITIAL_ADDRESSES);
  const [bookings] = useState(INITIAL_BOOKINGS);

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);

  const [addressForm, setAddressForm] = useState({
    type: "Home",
    address: "",
  });

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  const [notice, setNotice] = useState("");
  const [noticeType, setNoticeType] = useState("success");
  const [confirmAction, setConfirmAction] = useState(null);

  const showNotice = (message, type = "success") => {
    setNotice(message);
    setNoticeType(type);
  };

  const fullName =
    `${profile.firstName} ${profile.lastName}`.trim() || "Your Profile";

  const initials =
    `${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`.toUpperCase() ||
    "U";

  const profileCompletion = [
    profile.firstName.trim(),
    profile.lastName.trim(),
    profile.mobile.trim(),
    profile.email.trim(),
  ].filter(Boolean).length * 25;

  const handleProfileChange = (event) => {
    const { name, value } = event.target;
    setProfile((current) => ({ ...current, [name]: value }));
  };

  const handleProfileSave = (event) => {
    event.preventDefault();

    if (!profile.firstName.trim() || !profile.lastName.trim()) {
      showNotice("Please enter your first and last name.", "error");
      return;
    }

    setSavedProfile({ ...profile });
    setIsEditingProfile(false);
    showNotice("Your profile details have been saved.");
  };

  const handleProfileCancel = () => {
    setProfile({ ...savedProfile });
    setIsEditingProfile(false);
  };

  const openAddAddress = () => {
    setEditingAddressId(null);
    setAddressForm({ type: "Home", address: "" });
    setShowAddressForm(true);
    setNotice("");
  };

  const openEditAddress = (item) => {
    setEditingAddressId(item.id);
    setAddressForm({ type: item.type, address: item.address });
    setShowAddressForm(true);
    setNotice("");
  };

  const handleAddressSave = (event) => {
    event.preventDefault();

    if (!addressForm.address.trim()) {
      showNotice("Please enter your complete address.", "error");
      return;
    }

    if (editingAddressId !== null) {
      setAddresses((current) =>
        current.map((item) =>
          item.id === editingAddressId ? { ...item, ...addressForm } : item
        )
      );
      showNotice("Address updated successfully.");
    } else {
      setAddresses((current) => [
        ...current,
        {
          id: Date.now(),
          ...addressForm,
          isDefault: current.length === 0,
        },
      ]);
      showNotice("New address added successfully.");
    }

    setShowAddressForm(false);
    setEditingAddressId(null);
    setAddressForm({ type: "Home", address: "" });
  };

  const handleAddressDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this address?")) {
      return;
    }

    setAddresses((current) => {
      const remaining = current.filter((item) => item.id !== id);

      if (remaining.length && !remaining.some((item) => item.isDefault)) {
        remaining[0] = { ...remaining[0], isDefault: true };
      }

      return remaining;
    });

    showNotice("Address deleted successfully.");
  };

  const handleSetDefault = (id) => {
    setAddresses((current) =>
      current.map((item) => ({
        ...item,
        isDefault: item.id === id,
      }))
    );

    showNotice("Default address updated.");
  };

  const changeSection = (section) => {
    setActiveSection(section);
    setNotice("");
    setShowAddressForm(false);
    setConfirmAction(null);
  };

  const renderIcon = (name, size = 19) => {
    const paths = {
      "user-round": (
        <>
          <circle cx="12" cy="8" r="4" />
          <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
        </>
      ),
      "calendar-check": (
        <>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 10h18m-12 5 2 2 4-4" />
        </>
      ),
      "map-pin": (
        <>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      ),
      headset: (
        <>
          <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
          <rect x="3" y="13" width="5" height="7" rx="2" />
          <rect x="16" y="13" width="5" height="7" rx="2" />
          <path d="M16 21h-4" />
        </>
      ),
      gift: (
        <>
          <rect x="3" y="8" width="18" height="13" rx="2" />
          <path d="M12 8v13M2 8h20v4H2zM12 8H8a3 3 0 1 1 3-3l1 3Zm0 0h4a3 3 0 1 0-3-3l-1 3Z" />
        </>
      ),
      "file-text": (
        <>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
          <path d="M14 2v6h6M8 13h8M8 17h8" />
        </>
      ),
      info: (
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 11v5m0-8h.01" />
        </>
      ),
      "shield-check": (
        <>
          <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
          <path d="m9 12 2 2 4-4" />
        </>
      ),
      "user-round-x": (
        <>
          <circle cx="9" cy="8" r="4" />
          <path d="M2 21v-2a7 7 0 0 1 12-5m2 0 6 6m0-6-6 6" />
        </>
      ),
      "log-out": (
        <>
          <path d="M10 17l5-5-5-5m5 5H3" />
          <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7" />
        </>
      ),
      edit: (
        <>
          <path d="m15 5 4 4M4 20l4-.8L19 8a2.8 2.8 0 0 0-4-4L4 15l0 5Z" />
        </>
      ),
      plus: <path d="M12 5v14M5 12h14" />,
      check: <path d="m5 12 4 4L19 6" />,
      home: (
        <>
          <path d="m3 10 9-7 9 7" />
          <path d="M5 9v12h14V9M9 21v-7h6v7" />
        </>
      ),
      briefcase: (
        <>
          <rect x="3" y="7" width="18" height="14" rx="2" />
          <path d="M8 7V4h8v3M3 12h18m-11 0v2h4v-2" />
        </>
      ),
    };

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {paths[name] || paths.info}
      </svg>
    );
  };

  const renderAddressForm = () => (
    <form className="ka-address-form" onSubmit={handleAddressSave}>
      <div className="ka-form-heading">
        <div>
          <h3>
            {editingAddressId !== null ? "Edit address" : "Add a new address"}
          </h3>
          <p>Save an address for convenient future bookings.</p>
        </div>

        <button
          type="button"
          className="ka-icon-button"
          onClick={() => setShowAddressForm(false)}
          aria-label="Close address form"
        >
          ×
        </button>
      </div>

      <div className="ka-form-grid">
        <div className="ka-field">
          <label htmlFor="addressType">Address type</label>
          <select
            id="addressType"
            value={addressForm.type}
            onChange={(event) =>
              setAddressForm((current) => ({
                ...current,
                type: event.target.value,
              }))
            }
          >
            <option>Home</option>
            <option>Office</option>
            <option>Other</option>
          </select>
        </div>

        <div className="ka-field ka-field-full">
          <label htmlFor="addressText">Complete address *</label>
          <textarea
            id="addressText"
            rows={3}
            value={addressForm.address}
            onChange={(event) =>
              setAddressForm((current) => ({
                ...current,
                address: event.target.value,
              }))
            }
            placeholder="House/flat, street, locality, city and PIN code"
            required
          />
        </div>
      </div>

      <div className="ka-form-actions">
        <button type="submit" className="ka-btn ka-btn-primary">
          {renderIcon("check", 16)} Save address
        </button>
        <button
          type="button"
          className="ka-btn ka-btn-outline"
          onClick={() => setShowAddressForm(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );

  const renderAddresses = () => (
    <section className="ka-card">
      <div className="ka-card-heading">
        <div>
          <span className="ka-eyebrow">YOUR LOCATIONS</span>
          <h2>Saved addresses</h2>
          <p>Choose where you need a service.</p>
        </div>

        <button
          type="button"
          className="ka-btn ka-btn-primary"
          onClick={openAddAddress}
        >
          {renderIcon("plus", 16)} Add address
        </button>
      </div>

      {showAddressForm && renderAddressForm()}

      {addresses.length === 0 ? (
        <div className="ka-empty-state">
          <div className="ka-empty-icon">{renderIcon("map-pin", 28)}</div>
          <h3>No saved addresses yet</h3>
          <p>Add your home or office address for quicker bookings.</p>
          <button
            type="button"
            className="ka-btn ka-btn-primary"
            onClick={openAddAddress}
          >
            Add your first address
          </button>
        </div>
      ) : (
        <div className="ka-address-grid">
          {addresses.map((item) => (
            <article className="ka-address-card" key={item.id}>
              <div className="ka-address-top">
                <span className="ka-address-icon">
                  {renderIcon(item.type === "Office" ? "briefcase" : "home", 21)}
                </span>

                <div className="ka-address-title">
                  <h3>{item.type}</h3>
                  {item.isDefault && (
                    <span className="ka-default-tag">Default</span>
                  )}
                </div>

                <button
                  type="button"
                  className="ka-icon-button ka-address-edit"
                  onClick={() => openEditAddress(item)}
                  aria-label={`Edit ${item.type} address`}
                >
                  {renderIcon("edit", 16)}
                </button>
              </div>

              <p className="ka-address-text">{item.address}</p>

              <div className="ka-address-actions">
                {!item.isDefault && (
                  <button
                    type="button"
                    onClick={() => handleSetDefault(item.id)}
                  >
                    Set as default
                  </button>
                )}
                <button
                  type="button"
                  className="ka-delete-link"
                  onClick={() => handleAddressDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );

  const renderBookings = () => (
    <section className="ka-card">
      <div className="ka-card-heading">
        <div>
          <span className="ka-eyebrow">YOUR SERVICES</span>
          <h2>My bookings</h2>
          <p>Keep track of your service appointments.</p>
        </div>

        <button
          type="button"
          className="ka-btn ka-btn-orange"
          onClick={() => showNotice("Connect this button to your services page.", "info")}
        >
          {renderIcon("plus", 16)} Book a service
        </button>
      </div>

      <div className="ka-booking-tabs" role="tablist" aria-label="My bookings">
        {["Current", "Upcoming", "Previous"].map((tab) => (
          <button
            type="button"
            role="tab"
            aria-selected={bookingTab === tab}
            className={bookingTab === tab ? "active" : ""}
            key={tab}
            onClick={() => setBookingTab(tab)}
          >
            {tab}
            <span>{bookings[tab].length}</span>
          </button>
        ))}
      </div>

      {bookings[bookingTab].length === 0 ? (
        <div className="ka-empty-state ka-booking-empty">
          <div className="ka-empty-icon">
            {renderIcon("calendar-check", 27)}
          </div>
          <h3>No {bookingTab.toLowerCase()} bookings</h3>
          <p>
            Your {bookingTab.toLowerCase()} service bookings will appear here
            once they are connected to your account.
          </p>
          <button
            type="button"
            className="ka-btn ka-btn-primary"
            onClick={() => showNotice("Connect this button to your services page.", "info")}
          >
            Explore services
          </button>
        </div>
      ) : (
        <div className="ka-booking-list">
          {bookings[bookingTab].map((booking) => (
            <article key={booking.id} className="ka-booking-item">
              <h3>{booking.name}</h3>
              <p>{booking.date}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );

  const renderProfile = () => (
    <>
      <section className="ka-profile-hero">
        <div className="ka-profile-hero-main">
          <div className="ka-avatar">{initials}</div>
          <div className="ka-profile-hero-text">
            <span className="ka-eyebrow">YOUR KAAMDAAR ACCOUNT</span>
            <h2>Hello, {profile.firstName || "there"}!</h2>
            <p>Manage your personal details and make your next booking easier.</p>

            <div className="ka-verified-phone">
              <span className="ka-verified-check">{renderIcon("check", 12)}</span>
              {profile.mobile}
              <span>Verified</span>
            </div>
          </div>
        </div>

        <div className="ka-completion">
          <div className="ka-completion-top">
            <span>Profile completion</span>
            <strong>{profileCompletion}%</strong>
          </div>

          <div
            className="ka-progress-track"
            role="progressbar"
            aria-label="Profile completion"
            aria-valuenow={profileCompletion}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <span style={{ width: `${profileCompletion}%` }} />
          </div>

          <p>
            {profileCompletion === 100
              ? "Your profile is complete."
              : "Add your details to complete your profile."}
          </p>
        </div>
      </section>

      <section className="ka-card">
        <div className="ka-card-heading">
          <div>
            <span className="ka-eyebrow">PERSONAL DETAILS</span>
            <h2>Basic information</h2>
            <p>Keep your contact information up to date.</p>
          </div>

          {!isEditingProfile && (
            <button
              type="button"
              className="ka-btn ka-btn-outline"
              onClick={() => {
                setProfile({ ...savedProfile });
                setIsEditingProfile(true);
                setNotice("");
              }}
            >
              {renderIcon("edit", 15)} Edit details
            </button>
          )}
        </div>

        <form onSubmit={handleProfileSave}>
          <div className="ka-form-grid">
            <div className="ka-field">
              <label htmlFor="firstName">First name *</label>
              <input
                id="firstName"
                name="firstName"
                value={profile.firstName}
                onChange={handleProfileChange}
                placeholder="Enter first name"
                readOnly={!isEditingProfile}
                required
              />
            </div>

            <div className="ka-field">
              <label htmlFor="lastName">Last name *</label>
              <input
                id="lastName"
                name="lastName"
                value={profile.lastName}
                onChange={handleProfileChange}
                placeholder="Enter last name"
                readOnly={!isEditingProfile}
                required
              />
            </div>

            <div className="ka-field">
              <label htmlFor="mobile">Mobile number</label>
              <div className="ka-mobile-input">
                <span>+91</span>
                <input
                  id="mobile"
                  name="mobile"
                  value={profile.mobile.replace(/^\+91\s?/, "")}
                  readOnly
                  aria-describedby="mobileHelp"
                />
                <span className="ka-mobile-verified">
                  {renderIcon("check", 13)}
                </span>
              </div>
              <span className="ka-field-help" id="mobileHelp">
                Your verified number cannot be edited here.
              </span>
            </div>

            <div className="ka-field">
              <label htmlFor="email">
                Email address <span>(optional)</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={profile.email}
                onChange={handleProfileChange}
                placeholder="you@example.com"
                readOnly={!isEditingProfile}
              />
            </div>
          </div>

          {/* Terms and Conditions + Privacy Policy checkboxes */}
          <div
            className="ka-policy-checkboxes"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginTop: "22px",
              paddingTop: "18px",
              borderTop: "1px solid #e8edf4",
            }}
          >
            <label
              className="ka-policy-checkbox"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                fontSize: "14px",
                lineHeight: 1.6,
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(event) => setAcceptedTerms(event.target.checked)}
                style={{
                  width: "17px",
                  height: "17px",
                  marginTop: "3px",
                  flexShrink: 0,
                  accentColor: "var(--primary-blue, #155eef)",
                  cursor: "pointer",
                }}
              />
              <span>
                I agree to the{" "}
                <button
                  type="button"
                  className="ka-policy-link"
                  onClick={() => changeSection("terms")}
                  style={{
                    border: "none",
                    padding: 0,
                    background: "transparent",
                    color: "var(--primary-blue, #155eef)",
                    font: "inherit",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Terms and Conditions
                </button>
              </span>
            </label>

            <label
              className="ka-policy-checkbox"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                fontSize: "14px",
                lineHeight: 1.6,
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={acceptedPrivacy}
                onChange={(event) => setAcceptedPrivacy(event.target.checked)}
                style={{
                  width: "17px",
                  height: "17px",
                  marginTop: "3px",
                  flexShrink: 0,
                  accentColor: "var(--primary-blue, #155eef)",
                  cursor: "pointer",
                }}
              />
              <span>
                I have read the{" "}
                <button
                  type="button"
                  className="ka-policy-link"
                  onClick={() => changeSection("privacy")}
                  style={{
                    border: "none",
                    padding: 0,
                    background: "transparent",
                    color: "var(--primary-blue, #155eef)",
                    font: "inherit",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Privacy Policy
                </button>
              </span>
            </label>
          </div>

          {isEditingProfile && (
            <div className="ka-form-actions">
              <button type="submit" className="ka-btn ka-btn-primary">
                {renderIcon("check", 16)} Save changes
              </button>
              <button
                type="button"
                className="ka-btn ka-btn-outline"
                onClick={handleProfileCancel}
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </section>

      {renderAddresses()}
      {renderBookings()}
    </>
  );

  const renderOtherSection = () => {
    const details = {
      support: {
        eyebrow: "WE ARE HERE TO HELP",
        title: "Help & Support",
        description: "Need help with a service or booking? Contact our support team.",
        icon: "headset",
      },
      refer: {
        eyebrow: "SHARE THE EXPERIENCE",
        title: "Refer & Earn",
        description: "Invite friends to discover convenient home services.",
        icon: "gift",
      },
      terms: {
        eyebrow: "LEGAL INFORMATION",
        title: "Terms of Services",
        description: "Review the terms and conditions applicable to Kaamdaar.",
        icon: "file-text",
      },
      about: {
        eyebrow: "ABOUT KAAMDAAR",
        title: "About Us",
        description: "Your platform for discovering and booking everyday services.",
        icon: "info",
      },
      privacy: {
        eyebrow: "YOUR PRIVACY MATTERS",
        title: "Privacy Policy",
        description: "Learn how your account information is handled.",
        icon: "shield-check",
      },
      delete: {
        eyebrow: "ACCOUNT MANAGEMENT",
        title: "Request account deletion",
        description: "Request the deletion of your account through the official support process.",
        icon: "user-round-x",
      },
      logout: {
        eyebrow: "ACCOUNT MANAGEMENT",
        title: "Logout",
        description: "Sign out of your Kaamdaar account.",
        icon: "log-out",
      },
    };

    const item = details[activeSection];
    if (!item) return null;

    return (
      <section className="ka-card ka-other-section">
        <span className="ka-eyebrow">{item.eyebrow}</span>
        <div className="ka-other-illustration">{renderIcon(item.icon, 30)}</div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>

        {activeSection === "delete" && (
          <button
            type="button"
            className="ka-btn ka-btn-outline ka-danger-button"
            onClick={() =>
              setConfirmAction({
                type: "delete",
                title: "Request account deletion",
                message:
                  "Account deletion must be completed through your official account support process.",
              })
            }
          >
            Request deletion
          </button>
        )}

        {activeSection === "logout" && (
          <button
            type="button"
            className="ka-btn ka-btn-primary"
            onClick={() =>
              setConfirmAction({
                type: "logout",
                title: "Logout",
                message:
                  "Connect your existing authentication logout flow before signing out.",
              })
            }
          >
            Logout
          </button>
        )}

        {activeSection === "support" && (
          <button
            type="button"
            className="ka-btn ka-btn-primary"
            onClick={() => showNotice("Connect your support page or contact API here.", "info")}
          >
            Contact support
          </button>
        )}

        {activeSection === "refer" && (
          <button
            type="button"
            className="ka-btn ka-btn-primary"
            onClick={() => showNotice("Connect your referral program here.", "info")}
          >
            View referral options
          </button>
        )}
      </section>
    );
  };

  return (
    <main className="ka-profile-page">
      <div className="ka-profile-container">
        <header className="ka-page-header">
          <div>
            <span className="ka-eyebrow">YOUR ACCOUNT</span>
            <h1>My Profile</h1>
            <p>Manage your profile, addresses and service bookings.</p>
          </div>

          <div className="ka-header-phone">
            <span className="ka-phone-status">{renderIcon("check", 13)}</span>
            <div>
              <small>Verified mobile</small>
              <strong>{savedProfile.mobile}</strong>
            </div>
          </div>
        </header>

        <div className="ka-welcome-banner">
          <div className="ka-welcome-icon">{renderIcon("check", 18)}</div>
          <div>
            <strong>Welcome to Kaamdaar, {savedProfile.firstName}!</strong>
            <p>
              Your mobile number is verified. Complete your profile to make
              your service bookings smoother.
            </p>
          </div>
        </div>

        {notice && (
          <div className={`ka-notice ${noticeType}`} role="status">
            <span>{notice}</span>
            <button
              type="button"
              onClick={() => setNotice("")}
              aria-label="Dismiss notification"
            >
              ×
            </button>
          </div>
        )}

        <div className="ka-profile-layout">
          <aside className="ka-sidebar">
            <div className="ka-sidebar-user">
              <div className="ka-sidebar-avatar">{initials}</div>
              <div className="ka-sidebar-user-info">
                <strong>{fullName}</strong>
                <span>{savedProfile.mobile}</span>
                <span className="ka-sidebar-status">
                  <i /> Mobile verified
                </span>
              </div>
            </div>

            <div className="ka-sidebar-label">ACCOUNT MENU</div>

            <nav aria-label="Account navigation">
              {MENU_ITEMS.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={[
                    "ka-nav-item",
                    activeSection === item.id ? "active" : "",
                    item.danger ? "danger" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => changeSection(item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  <span className="ka-nav-icon">{renderIcon(item.icon, 17)}</span>
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="ka-nav-indicator" />
                  )}
                </button>
              ))}
            </nav>

            <div className="ka-sidebar-help">
              <span>{renderIcon("headset", 20)}</span>
              <div>
                <strong>Need help?</strong>
                <p>We're here for you.</p>
                <button type="button" onClick={() => changeSection("support")}>
                  Get support →
                </button>
              </div>
            </div>
          </aside>

          <div className="ka-profile-main">
            {activeSection === "profile" && renderProfile()}
            {activeSection === "addresses" && renderAddresses()}
            {activeSection === "bookings" && renderBookings()}
            {!["profile", "addresses", "bookings"].includes(activeSection) &&
              renderOtherSection()}
          </div>
        </div>

        {confirmAction && (
          <div
            className="ka-modal-backdrop"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setConfirmAction(null);
              }
            }}
          >
            <section
              className="ka-confirm-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="ka-confirm-title"
            >
              <h2 id="ka-confirm-title">{confirmAction.title}</h2>
              <p>{confirmAction.message}</p>
              <div className="ka-form-actions">
                <button
                  type="button"
                  className="ka-btn ka-btn-outline"
                  onClick={() => setConfirmAction(null)}
                >
                  Close
                </button>
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
};

export default Profile;
