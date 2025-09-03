import React, { useState, useEffect } from "react";

const StoryCarousel = () => {
  const stories = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1756887471/d22053ac8a59909c4e20fa84c906539ebd0e060c_rzq1fc.jpg",
      title: "Story 1",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1756887342/42deff99815ae5baa6f94c29e7689133493381b3_xzm0em.jpg",
      title: "Story 2",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1756887608/500732db0ff8525cc436ca1b6992fd9db86d7c98_1_utts2r.jpg",
      title: "Story 3",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1756704191/c715afba25082f168a9425be119c5f75bf52e700_1_jzyes8.jpg",
      title: "Story 4",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1756887517/3f8f0b350d22a0bd20140f4de3a153c3abb90bcd_fzr9tk.jpg",
      title: "Story 5",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1756887492/3be659bca2266070c12b2fbee5572de98c8171a1_dxaho5.jpg",
      title: "Story 6",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1756887464/41d0a24f97d9f9bb6ae48e9b42e332fae7d97924_zwsex5.jpg",
      title: "Story 7",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
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

    // Hide distant items
    if (absDistance > 3) {
      return {
        transform: `translateX(${
          normalizedDiff > 0 ? "1000px" : "-1000px"
        }) scale(0)`,
        zIndex: 0,
        opacity: 0,
      };
    }

    // Responsive spacings
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const isTablet = typeof window !== "undefined" && window.innerWidth < 1024;

    const baseSpacing = isMobile ? 150 : isTablet ? 220 : 300;
    const archHeight = isMobile ? 25 : isTablet ? 35 : 50;

    // Active (center) item
    if (absDistance === 0) {
      return {
        transform: `translateX(0px) translateY(0px) scale(1.4)`,
        zIndex: 20,
        opacity: 1,
      };
    }

    // Other items on the sides
    const translateX = normalizedDiff * baseSpacing;
    const translateY = Math.pow(absDistance, 1.4) * archHeight;
    const scale = 1 - absDistance * 0.2;
    const opacity = 1 - absDistance * 0.2;

    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
      zIndex: 20 - absDistance,
      opacity,
    };
  };

  return (
    <div className="w-full flex items-center justify-center bg-[#F6F3EB] py-10">
      <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
        {/* Carousel */}
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
                  className={`w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-[40px] object-cover shadow-2xl transition-all duration-500 ${
                    isActive
                      ? "grayscale-0"
                      : "grayscale group-hover:grayscale-0"
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
