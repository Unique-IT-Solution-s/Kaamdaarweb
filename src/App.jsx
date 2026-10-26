import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Saare components aur pages ko import karein
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
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

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Ye component check karega ki Navbar dikhana hai ya nahi
const Layout = ({ children }) => {
  const location = useLocation();
  
  // Agar URL /login ya /otp hai, toh Navbar nahi dikhega
  const isAuthPage = location.pathname === '/login' || location.pathname === '/otp';

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
      
      {/* Layout component ke andar Routes daal diye */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
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