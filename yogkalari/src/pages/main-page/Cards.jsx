import React from "react";

const cards = [
  {
    title: "Yoga Therapy",
    subtitle: "corporate yoga | private yoga | yoga workshop",
    description:
      "Traditional yoga for real-life healing. Breath, gentle movement and deep rest ease pain, steady hormones and calm a wired mind. Tailored one-to-one care—quiet, attentive, effective—for women navigating burnout, cycles and stress. Private sessions and select workplace programs for those who value depth over trends.",
    image:
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&h=400",

        

       

  },
  {
    title: "Samriddhi Terrariums",
    subtitle: "“पृथ्वी तत्वं शुभं करोतु”",
    description:
      "Prthvi tattvam śubham karotu. May the earth element bring auspiciousness.",
    image:
     "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=600&h=400",
  },
  {
    title: "Kalaripayattu - Martial Arts",
    subtitle: "Group classes | Private class | kalaripayattu workshops",
    description:
      "India’s classical warrior art—taught with discipline and care. Flowing Kalari sequences build strength, agility and focus while cultivating humility and discipline. Beginners, adults and kids welcome. Join a small group or book private training to move with grounded power.",
    image:
 "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&h=400",  },
];

const ServiceCards = () => {
  return (
    <div className="bg-[#f8f5eb] min-h-screen flex flex-col items-center py-12 px-6">
      <h2 className="text-3xl font-semibold text-green-900 mb-10 text-center">
        Sanctuary for Reconnection
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-72 object-cover rounded-t-2xl transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:h-full"
              />
            </div>

            {/* Normal Content */}
            <div className="p-5 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {card.title}
              </h3>
              <p className="text-green-700 text-sm mt-1">{card.subtitle}</p>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-sm px-5 py-6 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center">
              <h3 className="text-white text-lg font-semibold">{card.title}</h3>
              <p className="text-white text-sm mt-1">{card.subtitle}</p>
              <button className="mt-4 border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                Know more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
