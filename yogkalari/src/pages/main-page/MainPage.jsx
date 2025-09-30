import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import StoryCarousel from "./StoryCarrousel";
import Cards from "./Cards";
import FounderSection from "./FounderSection";
import Marquee from "./Marquee";
import WhispersWellnessPage from "./WhispersWellnessPage";
import ScrollToTop from "../../components/ScrollToTop";

const MainPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-24 h-24 animate-scale-up"
        />
      </div>
    );
  }

  return (
    <div>
      <Hero />
      <StoryCarousel />
      <Cards />
      <FounderSection />
      <Marquee />
      <WhispersWellnessPage />
      <ScrollToTop />
    </div>
  );
};

export default MainPage;
