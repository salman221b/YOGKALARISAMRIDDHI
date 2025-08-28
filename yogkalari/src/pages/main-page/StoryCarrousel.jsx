import React, { useState, useEffect } from "react";

const StoryCarousel = () => {
  const stories = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=face",
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
    };
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden px-2 sm:px-4">
        {/* Carousel Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {stories.map((story, index) => {
            const isActive = index === currentIndex;

            return (
              <div
                key={story.id}
                className="absolute transition-all duration-700 ease-in-out cursor-pointer group"
                style={getItemPosition(index)}
                onClick={() => goToSlide(index)}
              >
                <img
                  src={story.image}
                  alt={`Story ${index + 1}`}
                  className={`w-20 h-20 sm:w-30 sm:h-33 md:w-40 md:h-50 lg:w-45 lg:h-55 xl:w-55 xl:h-65 rounded-[60px] object-cover shadow-2xl transition-all duration-300 ${
                    isActive ? "grayscale-0" : "grayscale group-hover:grayscale-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StoryCarousel;
