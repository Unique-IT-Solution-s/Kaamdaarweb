import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import Logo from "../../assets/Kaamdaar_Primary_Logo_400x137.png";

import { sendPhoneOtp } from "../../api/phoneotp";
import { API_ROUTES } from "../../api/api.jsx";

const Login = () => {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const cleanedMobile = mobile.replace(/\D/g, "");
    console.log("cleanedMobile", cleanedMobile)

    if (cleanedMobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    const fullMobile = `${countryCode}${cleanedMobile}`;
  

    try {
      setLoading(true);

      // Clear any previously saved phone number.
      sessionStorage.removeItem("userPhone");
      console.log("fullMobile", fullMobile)

      // Request OTP through your backend.
      const response = await fetch(API_ROUTES.requestOtp, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile: fullMobile,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.success === false) {
        throw new Error(
          data.error?.message || data.message || "Backend OTP request failed.",
        );
      }

      // Send Firebase OTP to the exact number entered.
      await sendPhoneOtp(fullMobile);

      // Save the current number.
      sessionStorage.setItem("userPhone", fullMobile);

      // Pass the same number to the OTP page.
      navigate("/otp", {
        state: {
          fullMobile,
        },
      });
    } catch (err) {
      console.error("Login/OTP error:", err);
      setError(err.message || "Unable to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        {/* Header */}
        <div className="auth-header">
          <img src={Logo} alt="Kaamdaar" className="auth-logo" />
          <h2>Welcome to Kaamdaar</h2>
          <p>Enter your mobile number to continue</p>
        </div>

        {/* Form */}
        <form className="auth-form" onSubmit={handleLogin}>
          <label htmlFor="mobile">Mobile Number</label>

          <div className="input-group">
            <span className="country-code">
              <span aria-hidden="true">🇮🇳</span>
              <span>+91</span>
              <span className="country-divider"></span>
            </span>

            <input
              id="mobile"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="Enter 10-digit number"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value.replace(/\D/g, "").slice(0, 10));
                setError("");
              }}
              maxLength={10}
              required
              disabled={loading}
              aria-invalid={Boolean(error)}
            />
          </div>

          {error ? (
            <p className="auth-error" role="alert">
              {error}
            </p>
          ) : (
            <p className="auth-input-help">
              We'll send you a one-time password (OTP).
            </p>
          )}

          <div id="recaptcha-container"></div>

          {/* Footer Button */}
          <div className="auth-footer">
            <button type="submit" className="auth-btn" disabled={loading}>
              <span>{loading ? "Sending OTP..." : "Continue"}</span>

              {!loading && (
                <span className="auth-btn-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </button>

            <p className="auth-terms">
              By continuing, you agree to our{" "}
              <a href="/terms">Terms of Service</a> and{" "}
              <a href="/privacy">Privacy Policy</a>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;