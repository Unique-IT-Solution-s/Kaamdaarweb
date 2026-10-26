
import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Booking from './pages/Booking/Booking';
import LiveTracking from './pages/LiveTracking/LiveTracking';
import MyBookings from './pages/MyBookings/MyBookings';
import Profile from './pages/Profile/Profile';
import HelpSupport from './pages/HelpSupport/HelpSupport';
import Login from './pages/login/login';
import OTP from './pages/otp/otp';
import Hourly_Booking from './pages/Search/hourly_booking';
import ServiceOne from './pages/Search/service_one';
import ServicesTwo from "./pages/Search/services_two";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Shared Navbar and Footer layout
const Layout = ({ children }) => {
  const location = useLocation();

  const isAuthPage =
    location.pathname === '/login' ||
    location.pathname === '/otp';

  return (
    <>
      {!isAuthPage && <Navbar />}

      {children}

      {!isAuthPage && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/search" element={<Search />} />

          {/* Hourly Bookings Page */}
          <Route
            path="/hourly-booking"
            element={<Hourly_Booking />}
          />
          <Route
            path="/service-one"
            element={<ServiceOne />}
          />
          <Route
            path="/services-two"
            element={<ServicesTwo />}
          />

          <Route path="/service" element={<ServiceDetail />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/tracking" element={<LiveTracking />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/help" element={<HelpSupport />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<OTP />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
