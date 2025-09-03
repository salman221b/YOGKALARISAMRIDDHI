import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import YogaFooter from "./components/YogaFooter";

// Import pages
import MainPage from "./pages/yoga-page/MainPage";
import KalariPage from "./pages/kalari-page/MainPage";
import HomePage from "./pages/main-page/MainPage";
import ContactForm from "./pages/contact-form/Contact";
import ScrollUp from "./components/ScrollUp";

const App = () => {
  return (
    <Router>
      <ScrollUp />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kalari" element={<KalariPage />} />
        <Route path="/yoga" element={<MainPage />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <YogaFooter />
    </Router>
  );
};

export default App;
