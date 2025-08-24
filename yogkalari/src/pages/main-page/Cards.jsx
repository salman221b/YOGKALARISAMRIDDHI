import React, { useState } from "react";

const Cards = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&h=400",
      title: "Yoga Therapy",
      description: "corporate yoga | private yoga | yoga workshop",
      hoverDescription:
        "“पृथ्वी तत्त्वं शुभं करोतु” — May the earth element bring auspiciousness.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=600&h=400",
      title: "Samriddhi Terrariums",
      description: "Corporate Gifting | Sacred Home | Wellness Décor",
      hoverDescription:
        "Closed-glass living terrariums that calm a room and invite pause.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&h=400",
      title: "Kalaripayattu - Martial Arts",
      description: "Group classes | Private class | kalaripayattu workshops",
      hoverDescription:
        "India’s classical warrior art taught with discipline and care.",
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center py-10 px-5 bg-[#F7F3EB]">
        <p className="text-2xl 2xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-5 text-[#2F5C4E]">Sanctuary for Reconnection</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative w-full sm:w-[360px] md:w-[380px] lg:w-[400px] h-[420px] rounded-xl overflow-hidden shadow-lg cursor-pointer group transition-all duration-500 hover:shadow-2xl mx-auto"
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 
                ${hoveredCard === card.id ? "scale-110" : "scale-100"}`}
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent 
                transition-opacity duration-500 ${hoveredCard === card.id ? "opacity-80" : "opacity-30"}`}
            ></div>

            {/* Text */}
            <div
              className={`absolute bottom-0 p-5 text-white transition-all duration-500 
                ${hoveredCard === card.id ? "bottom-4" : "bottom-0"}`}
            >
              <h2 className="text-2xl font-bold">{card.title}</h2>
              <p className="mt-2 text-base">
                {hoveredCard === card.id
                  ? card.hoverDescription
                  : card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
