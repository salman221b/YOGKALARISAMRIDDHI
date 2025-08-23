import React, { useState, useEffect } from "react";

const StoryCarousel = () => {
  const stories = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      title: "Story 1",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      title: "Story 2",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      title: "Story 3",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      title: "Story 4",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face",
      title: "Story 5",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
      title: "Story 6",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      title: "Story 7",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds — infinite looping
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? stories.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getItemPosition = (index) => {
    const total = stories.length;
    const diff = (index - currentIndex + total) % total;
    const half = Math.floor(total / 2);
    const normalizedDiff = diff > half ? diff - total : diff;

    const absDistance = Math.abs(normalizedDiff);

    // Hide distant items smoothly
    if (absDistance > 3) {
      return {
        transform: `translateX(${normalizedDiff > 0 ? "400px" : "-400px"}) scale(0)`,
        zIndex: 0,
        opacity: 0,
        filter: "grayscale(100%)",
      };
    }

    // Responsive spacings
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const isTablet = typeof window !== "undefined" && window.innerWidth < 1024;

    const baseSpacing = isMobile ? 120 : isTablet ? 160 : 200;
    const archHeight = isMobile ? 25 : isTablet ? 35 : 45;

    // Center item (active story)
    if (absDistance === 0) {
      return {
        transform: `translateX(0px) translateY(0px) scale(${isMobile ? 1.1 : 1.3})`,
        zIndex: 10,
        opacity: 1,
        filter: "none",
      };
    }

    // Calculate curve + scaling + opacity
    const translateX = normalizedDiff * baseSpacing;
    const translateY = Math.pow(absDistance, 1.4) * archHeight;
    const scale =
      absDistance === 1
        ? isMobile
          ? 0.8
          : 0.9
        : absDistance === 2
        ? isMobile
          ? 0.6
          : 0.7
        : isMobile
        ? 0.4
        : 0.5;

    const opacity =
      absDistance === 1
        ? 0.9
        : absDistance === 2
        ? 0.7
        : absDistance === 3
        ? 0.5
        : 0.3;

    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
      zIndex: 10 - absDistance,
      opacity,
      filter: "grayscale(100%)",
    };
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden px-2 sm:px-4">
        {/* Carousel Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className="absolute transition-all duration-700 ease-in-out cursor-pointer"
              style={getItemPosition(index)}
              onClick={() => goToSlide(index)}
            >
              <img
                src={story.image}
                alt={`Story ${index + 1}`}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-44 xl:h-44 rounded-[60px] object-cover shadow-2xl"
              />
            </div>
          ))}
        </div>

        {/* Prev & Next Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full shadow-lg w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-700 font-bold"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full shadow-lg w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-700 font-bold"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default StoryCarousel;
