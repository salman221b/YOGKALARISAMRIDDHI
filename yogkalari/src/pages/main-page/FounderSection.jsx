import React from "react";

const founders = [
  {
    name: "Sachin Gurukkal",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=600&fit=crop&crop=face",
    description:
      "Sachin Gurukkal is a lineage-trained Kalaripayattu teacher with 15 years’ teaching. He leads adults and kids through flowing Kalari that builds strength, agility, focus and humility. Grounded and safe, his training honors tradition while meeting modern bodies—cultivating courage, discipline and quiet power.",
  },
  {
    name: "Another Founder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
    description:
      "Another Founder is passionate about holistic living, teaching techniques to maintain balance and wellness in life. Her sessions blend mindfulness, fitness, and self-awareness for personal growth.",
  },
];

const FounderCards = () => {
  return (
    <div className="bg-[#f8f5eb] min-h-screen flex flex-col items-center py-12 px-6">
      <h2 className="text-3xl font-semibold text-green-900 mb-10 text-center">
        Meet the Founders
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl w-full">
        {founders.map((founder, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.03]"
          >
            {/* Founder Image */}
            <div className="overflow-hidden">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-72 object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105 "
              />
            </div>

            {/* Content (Before Hover) */}
            <div className="p-5 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {founder.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {founder.description}
              </p>
              <button className="mt-3 text-green-700 font-medium hover:underline">
                Know More
              </button>
            </div>

            {/* Hover Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-sm p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center">
              <h3 className="text-white text-lg font-semibold">
                {founder.name}
              </h3>
              <button className="mt-3 border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                Know more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FounderCards;
