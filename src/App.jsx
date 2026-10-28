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
import PackingUnpacking from './pages/Search/PackingUnpackin';
import UtensilsCleaning from "./pages/Search/UtensilsCleaning";
import KitchenPrep from "./pages/Search/KitchenPrep";
import DustingWiping from './pages/Search/DustingWiping';
import SweepingMopping from './pages/Search/SweepingMopping';
import PrePartyExpress from './pages/Search/PrePartyExpress';
import CompleteWardrobe from './pages/Search/CompleteWardrobe';
import AfterPartyExpress from './pages/Search/AfterPartyExpress';
import IroningFolding from './pages/Search/IroningFolding';
import HomeDeepCleaning from './pages/Search/HomeDeepCleaning';
import KitchenCleaning from './pages/Search/KitchenCleaning';
import LivingRoomCleaning from './pages/Search/LivingRoomCleaning';
import LaundryServices from './pages/Search/LaundryServices';
import WindowCleaning from './pages/Search/WindowCleaning';
import MoveInMoveOutCleaning from './pages/Search/MoveInMoveOutCleaning';
import Register from "./pages/Register/Register";

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
          <Route path="/packing-unpacking" element={<PackingUnpacking />} />
          <Route path="/utensils-cleaning" element={<UtensilsCleaning />} />
          <Route path="/kitchen-prep" element={<KitchenPrep />} />
          <Route path="/dusting-wiping" element={<DustingWiping />} />
          <Route
            path="/sweeping-mopping"
            element={<SweepingMopping />}
          />
          <Route
            path="/pre-party-express"
            element={<PrePartyExpress />}
          />
          <Route
            path="/complete-wardrobe"
            element={<CompleteWardrobe />}
          />
          <Route
            path="/after-party-express"
            element={<AfterPartyExpress />}
          />
          <Route
            path="/ironing-folding"
            element={<IroningFolding />}
          />
          <Route
            path="/home-deep-cleaning"
            element={<HomeDeepCleaning />}
          />
          <Route
            path="/kitchen-cleaning"
            element={<KitchenCleaning />}
          />
          <Route
            path="/living-room-cleaning"
            element={<LivingRoomCleaning />}
          />
          <Route
            path="/laundry-services"
            element={<LaundryServices />}
          />
          <Route
            path="/window-cleaning"
            element={<WindowCleaning />}
          />
          <Route
            path="/move-in-move-out-cleaning"
            element={<MoveInMoveOutCleaning />}
          />
          


          <Route path="/service" element={<ServiceDetail />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/tracking" element={<LiveTracking />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/help" element={<HelpSupport />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

