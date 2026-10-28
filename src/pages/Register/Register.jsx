import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Check, CheckCircle2, LockKeyhole, Mail, ShieldCheck, Smartphone, Sparkles, UserRound } from "lucide-react";

import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  // Optional: agar pehle se draft save hai to mobile dikhane ke liye
  const getRegistrationDraft = () => {
    try {
      const saved = sessionStorage.getItem("kaamdaar_registration_draft");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  };

  const draft = location.state?.draft || getRegistrationDraft();

  const mobile = draft?.mobile || "9876543210"; // fallback dummy
  const countryCode = draft?.country_code || "+91";

  const formattedMobile = mobile ? `${countryCode} ${mobile}` : "";

  const validateForm = () => {
    const errors = {};

    if (!name.trim() || name.trim().length < 2) {
      errors.name = "Please enter your full name.";
    }

    if (
      !email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      errors.email = "Please enter a valid email address.";
    }

    if (!acceptedTerms) {
      errors.acceptedTerms = "Please accept the Terms of Use to continue.";
    }

    if (!acceptedPrivacy) {
      errors.acceptedPrivacy = "Please acknowledge the Privacy Policy.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setFieldErrors({});

    if (!validateForm()) return;

    setLoading(true);

    // 🔁 Backend call ki jagah local simulate
    setTimeout(() => {
      try {
        const customer = {
          id: `local_${Date.now()}`,
          name: name.trim(),
          email: email.trim().toLowerCase(),
          mobile,
          countryCode,
          createdAt: new Date().toISOString(),
        };

        // ✅ Navbar ke liye zaroori LocalStorage updates
        localStorage.setItem("kaamdaar_customer", JSON.stringify(customer));
        localStorage.setItem("isLoggedIn", "true"); 
        localStorage.setItem("userPhone", customer.mobile);

        // Temporary draft clean
        sessionStorage.removeItem("kaamdaar_registration_draft");
        sessionStorage.removeItem("kaamdaar_verification_token");

        // ✅ Redirect to Home (kyunki aapke app me customer/home route nahi hai)
        navigate("/", {
          replace: true,
          state: {
            registrationComplete: true,
            customer,
          },
        });
      } catch (err) {
        console.error("Local registration failed:", err);
        setError("Something went wrong. Please try again.");
        setLoading(false);
      }
    }, 800); // fake delay for spinner UX
  };

  return (
    <div className="register-page">
      <div className="register-background register-background-one" />
      <div className="register-background register-background-two" />

      <main className="register-main">
        <aside className="register-showcase">
          <div className="showcase-badge">
            <Sparkles size={15} />
            <span>Welcome to Kaamdaar</span>
          </div>

          <h1>
            Your home.
            <br />
            Your comfort.
            <br />
            <span>Our priority.</span>
          </h1>

          <p className="showcase-description">
            Create your account and make finding trusted home services
            simpler, safer, and more convenient.
          </p>

          <div className="showcase-benefits">
            <div className="showcase-benefit">
              <div className="benefit-icon">
                <ShieldCheck size={21} />
              </div>
              <div>
                <h3>A trusted experience</h3>
                <p>Designed with your security in mind.</p>
              </div>
            </div>

            <div className="showcase-benefit">
              <div className="benefit-icon">
                <Smartphone size={21} />
              </div>
              <div>
                <h3>Easy access</h3>
                <p>Keep your home service journey organized.</p>
              </div>
            </div>

            <div className="showcase-benefit">
              <div className="benefit-icon">
                <CheckCircle2 size={21} />
              </div>
              <div>
                <h3>Simple and convenient</h3>
                <p>Get started in just a few steps.</p>
              </div>
            </div>
          </div>

          <div className="showcase-footer">
            <div className="showcase-footer-line" />
            <p>Better care for every corner of your home.</p>
          </div>
        </aside>

        <section className="register-form-section">
          <div className="register-card">
            <div className="register-card-top">
              <div className="register-step-label">
                <span className="step-dot" />
                STEP 2 OF 2
              </div>

              <div className="register-progress">
                <span />
                <span className="active" />
              </div>
            </div>

            <div className="register-heading">
              <div className="register-heading-icon">
                <UserRound size={25} />
              </div>
              <h2>Create your account</h2>
              <p>Just a few details to get you started.</p>
            </div>

            <div className="verified-mobile">
              <div className="verified-mobile-icon">
                <Smartphone size={19} />
              </div>
              <div className="verified-mobile-content">
                <span>Verified mobile number</span>
                <strong>{formattedMobile}</strong>
              </div>
              <div className="verified-check" title="Mobile verified">
                <Check size={17} />
              </div>
            </div>

            <form className="register-form" onSubmit={handleSubmit} noValidate>
              {/* Full name */}
              <div className="register-field">
                <label htmlFor="register-name">
                  Full name <span>*</span>
                </label>

                <div
                  className={`register-input-wrap ${
                    fieldErrors.name ? "input-error" : ""
                  }`}
                >
                  <UserRound size={19} />
                  <input
                    id="register-name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setFieldErrors((c) => ({ ...c, name: "" }));
                      setError("");
                    }}
                    autoComplete="name"
                    maxLength={100}
                    disabled={loading}
                    required
                  />
                </div>

                {fieldErrors.name && (
                  <p className="register-field-error">{fieldErrors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="register-field">
                <label htmlFor="register-email">
                  Email address <span>*</span>
                </label>

                <div
                  className={`register-input-wrap ${
                    fieldErrors.email ? "input-error" : ""
                  }`}
                >
                  <Mail size={19} />
                  <input
                    id="register-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setFieldErrors((c) => ({ ...c, email: "" }));
                      setError("");
                    }}
                    autoComplete="email"
                    maxLength={254}
                    disabled={loading}
                    required
                  />
                </div>

                {fieldErrors.email && (
                  <p className="register-field-error">{fieldErrors.email}</p>
                )}

                <p className="register-field-hint">
                  We'll use this email for important account updates.
                </p>
              </div>

              {/* Terms + Privacy */}
              <div className="register-consent-group">
                <label
                  className={`register-consent ${
                    fieldErrors.acceptedTerms ? "consent-error" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => {
                      setAcceptedTerms(e.target.checked);
                      setFieldErrors((c) => ({ ...c, acceptedTerms: "" }));
                      setError("");
                    }}
                    disabled={loading}
                  />
                  <span className="custom-checkbox">
                    <Check size={14} />
                  </span>
                  <span className="consent-copy">
                    I agree to the{" "}
                    <Link to="/terms" target="_blank" rel="noopener noreferrer">
                      Terms of Use
                    </Link>
                    .
                  </span>
                </label>

                {fieldErrors.acceptedTerms && (
                  <p className="register-field-error">
                    {fieldErrors.acceptedTerms}
                  </p>
                )}

                <label
                  className={`register-consent ${
                    fieldErrors.acceptedPrivacy ? "consent-error" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={acceptedPrivacy}
                    onChange={(e) => {
                      setAcceptedPrivacy(e.target.checked);
                      setFieldErrors((c) => ({ ...c, acceptedPrivacy: "" }));
                      setError("");
                    }}
                    disabled={loading}
                  />
                  <span className="custom-checkbox">
                    <Check size={14} />
                  </span>
                  <span className="consent-copy">
                    I acknowledge the{" "}
                    <Link
                      to="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>

                {fieldErrors.acceptedPrivacy && (
                  <p className="register-field-error">
                    {fieldErrors.acceptedPrivacy}
                  </p>
                )}
              </div>

              {error && (
                <div className="register-error-banner" role="alert">
                  <span className="error-indicator">!</span>
                  <p>{error}</p>
                </div>
              )}

              <button
                type="submit"
                className="register-submit-button"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="register-spinner" />
                    Creating your account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight size={19} />
                  </>
                )}
              </button>

              <div className="register-secure-note">
                <LockKeyhole size={15} />
                <span>Your information is transmitted securely.</span>
              </div>
            </form>

            <div className="register-card-bottom">
              <span>Need help?</span>
              <Link to="/contact">
                Contact support <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <p className="register-copyright">
            © {new Date().getFullYear()} Kaamdaar. All rights reserved.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Register;