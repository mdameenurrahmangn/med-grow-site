import { Routes, Route } from "react-router-dom";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Services from "./Pages/Services.jsx";
import ServiceDetail from "./Pages/ServiceDetail.jsx";
import Navbar from "./Components/Header-and-Footer/Navbar.jsx";
import Footer from "./Components/Header-and-Footer/Footer.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-medgrowdigi" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/category/:categorySlug" element={<Services />} />
        <Route path="/solutions" element={<Services />} />
        <Route path="/solutions/category/:categorySlug" element={<Services />} />
        <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
        <Route path="/solutions/:serviceSlug" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
