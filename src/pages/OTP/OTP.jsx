import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OTP.css";

import Logo from "../../assets/Kaamdaar_Primary_Logo_400x137.png";

import {
  verifyPhoneOtp,
  sendPhoneOtp,
  clearPhoneOtp,
} from "../../api/phoneotp";

import { API_ROUTES } from "../../api/api.jsx";

const OTP_LENGTH = 6;
const RESEND_SECONDS = 44;

const OTP = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const inputRefs = useRef([]);

  // Read the number passed by Login.jsx or saved in sessionStorage.
  const fullMobile =
    location.state?.fullMobile ||
    location.state?.draft?.fullMobile ||
    sessionStorage.getItem("userPhone") ||
    "";

  // Convert the full number into country code and mobile number.
  const parsedPhone = fullMobile.match(/^(\+\d{1,3})(\d{10})$/);

  const draft =
    location.state?.draft ||
    (parsedPhone
      ? {
          country_code: parsedPhone[1],
          mobile: parsedPhone[2],
        }
      : null);

  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [seconds, setSeconds] = useState(RESEND_SECONDS);

  // Countdown for the resend button.
  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setTimeout(() => {
      setSeconds((current) => current - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  // Focus the first OTP box when the page opens.
  useEffect(() => {
    if (draft?.mobile) {
      inputRefs.current[0]?.focus();
    }
  }, []);

  // Handle a missing or invalid phone number.
  useEffect(() => {
    if (!draft?.mobile || !draft?.country_code) {
      setError("Mobile number not found. Please return to login.");
    }
  }, []);

  // Update OTP input and move focus to the next box.
  const handleChange = (index, value) => {
    const digit = value.replace(/\D/g, "").slice(-1);

    setOtp((current) => {
      const next = [...current];
      next[index] = digit;
      return next;
    });

    setError("");
    setMessage("");

    if (digit && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Support Backspace and arrow-key navigation.
  const handleKeyDown = (index, event) => {
    if (
      event.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Allow users to paste the complete OTP.
  const handlePaste = (event) => {
    event.preventDefault();

    const pastedDigits = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);

    if (!pastedDigits) return;

    setOtp(
      Array.from(
        { length: OTP_LENGTH },
        (_, index) => pastedDigits[index] || ""
      )
    );

    setError("");
    setMessage("");

    const nextIndex = Math.min(
      pastedDigits.length,
      OTP_LENGTH - 1
    );

    inputRefs.current[nextIndex]?.focus();
  };

  // Verify Firebase OTP and then ask the backend to continue.
  const handleVerify = async (event) => {
    event.preventDefault();

    setError("");
    setMessage("");

    if (!draft?.mobile || !draft?.country_code) {
      setError("Mobile number not found. Please log in again.");
      return;
    }

    const otpValue = otp.join("");

    if (otpValue.length !== OTP_LENGTH) {
      setError("Please enter the complete 6-digit OTP.");
      return;
    }

    try {
      setLoading(true);

      // Step 1: Verify the SMS code with Firebase.
      const verification = await verifyPhoneOtp(otpValue);
      const idToken = verification.idToken;

      if (!idToken) {
        throw new Error("Firebase verification token was not received.");
      }

      // Step 2: Send the Firebase ID token to your backend.
      const response = await fetch(API_ROUTES.verifyOtp, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile: `${draft.country_code}${draft.mobile}`,
        }),
      });

      const result = await response.json().catch(() => ({}));
      console.log("CONTINUE API RESPONSE:", result);

      console.log("OTP verification API status:", response.status);
      console.log("OTP verification API response:", result);

      if (!response.ok || result.success === false) {
        throw new Error(
          result.error?.message ||
            result.message ||
            "Unable to continue authentication."
        );
      }

      const nextStep = result.data?.next_step;

      if (nextStep === "REGISTER") {
        sessionStorage.setItem(
          "kaamdaar_registration_draft",
          JSON.stringify(draft)
        );

        navigate("/register", {
          state: {
            draft,
            verificationMethod: "mobile",
            firebaseIdToken: idToken,
            previewMode: false,
          },
        });
      } else if (nextStep === "LOGIN") {
        navigate("/", {
          state: {
            verifiedPhone:
              verification.phoneNumber ||
              `${draft.country_code}${draft.mobile}`,
            firebaseIdToken: idToken,
          },
        });
      } else {
        throw new Error(
          "Unexpected response from auth/continue. Check the backend response."
        );
      }

      clearPhoneOtp();
    } catch (err) {
      console.error("OTP verification failed:", err);

      setError(
        err.code === "auth/invalid-verification-code"
          ? "Incorrect OTP. Please try again."
          : err.code === "auth/code-expired"
            ? "OTP expired. Please request a new OTP."
            : err.message || "Unable to verify OTP."
      );
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP using the same phone number.
  const handleResend = async () => {
    if (seconds > 0 || resending || loading) return;

    if (!draft?.mobile || !draft?.country_code) {
      setError("Mobile number not found. Please log in again.");
      return;
    }

    try {
      setError("");
      setMessage("");
      setResending(true);

      const phone = `${draft.country_code}${draft.mobile}`;

      // Request a new Firebase OTP.
      await sendPhoneOtp(phone);

      setOtp(Array(OTP_LENGTH).fill(""));
      setSeconds(RESEND_SECONDS);
      setMessage("A new OTP has been sent.");

      inputRefs.current[0]?.focus();
    } catch (err) {
      console.error("Resend OTP failed:", err);

      setError(
        err.message || "Unable to resend OTP. Please try again."
      );
    } finally {
      setResending(false);
    }
  };

  const maskedMobile = draft?.mobile
    ? `${draft.country_code} ${draft.mobile.replace(
        /^(\d{2})\d+(\d{2})$/,
        "$1••••••$2"
      )}`
    : "Unknown number";

  const formattedTime = `00:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="auth-wrapper">
      <div className="otp-card">
        <div className="otp-blue-header">
          <div className="logo-box">
            <img
              src={Logo}
              alt="Kaamdaar Logo"
              className="otp-logo"
            />
          </div>
        </div>

        <div className="otp-body">
          <h2>Verify OTP</h2>

          <p className="otp-subtext">
            We have sent a 6-digit OTP to
            <br />
            <strong>{maskedMobile}</strong>
          </p>

          <form onSubmit={handleVerify}>
            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  type="text"
                  inputMode="numeric"
                  autoComplete={index === 0 ? "one-time-code" : "off"}
                  aria-label={`OTP digit ${index + 1}`}
                  maxLength={1}
                  value={digit}
                  onChange={(event) =>
                    handleChange(index, event.target.value)
                  }
                  onKeyDown={(event) =>
                    handleKeyDown(index, event)
                  }
                  onPaste={handlePaste}
                  onFocus={(event) => event.target.select()}
                  disabled={loading || !draft?.mobile}
                  required
                />
              ))}
            </div>

            {error && (
              <p className="auth-error" role="alert">
                {error}
              </p>
            )}

            {message && (
              <p className="auth-input-help" role="status">
                {message}
              </p>
            )}

            <p className="resend-text">
              {seconds > 0 ? (
                <>
                  Resend OTP in <strong>{formattedTime}</strong>
                </>
              ) : (
                <>
                  Didn't receive the OTP?{" "}
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={resending || loading}
                  >
                    {resending ? "Resending..." : "Resend OTP"}
                  </button>
                </>
              )}
            </p>

            <div id="recaptcha-container"></div>

            <div className="otp-footer">
              <button
                type="submit"
                className="auth-btn"
                disabled={loading || !draft?.mobile}
              >
                {loading ? "Verifying..." : "Continue"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTP;