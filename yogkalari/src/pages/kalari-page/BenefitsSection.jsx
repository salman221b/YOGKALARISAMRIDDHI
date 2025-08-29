import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Physical Strength",
      desc: "Build functional strength, flexibility, and cardiovascular endurance through dynamic movements.",
    },
    {
      title: "Mental Clarity",
      desc: "Develop focus, concentration, and mental resilience through meditative practices.",
    },
    {
      title: "Self Defense",
      desc: "Learn practical self-defense techniques applicable in real-world situations.",
    },
    {
      title: "Balance & Coordination",
      desc: "Improve body awareness, balance, and coordination through precise movement patterns.",
    },
    {
      title: "Stress Relief",
      desc: "Release stress and tension through rhythmic movements and breathing exercises.",
    },
    {
      title: "Cultural Connection",
      desc: "Connect with ancient Indian traditions and philosophy through authentic practice.",
    },
  ];

  return (
    <div className="bg-[#f8f5f1] px-6 md:px-16 py-12">
      {/* Benefits Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#b4623a] mb-8">
        Benefits of Kalaripayattu
      </h2>

      {/* Benefits Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="bg-[#f2eee9] p-5 rounded-xl shadow-sm hover:shadow-md transition duration-300"
          >
            <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
            <p className="text-sm text-gray-700">{benefit.desc}</p>
          </div>
        ))}
      </div>

      {/* Whispers of Wellness */}
      <div className="mt-10">
        <h3 className="text-center text-2xl md:text-3xl font-semibold text-[#b4623a] mb-6">
          Whispers of Wellness
        </h3>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-8">
          {/* Left Side Text */}
          <p className="text-lg text-gray-900 md:w-1/2 leading-relaxed">
            Every word shared here is a quiet echo of trust, transformation, and timeless care. 
            Our clients don’t just experience a service; they step into a philosophy.
          </p>

          {/* Testimonial Card */}
          <div className="bg-white rounded-xl shadow-md p-6 md:w-1/2">
            <FaQuoteLeft className="text-gray-300 text-3xl mb-3" />
            <h4 className="font-semibold text-lg">The Experience was awesome</h4>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum is a dummy or placeholder text commonly used in graphic design,
              publishing, and web development. Its purpose is to permit a page layout to be
              designed, independently of the copy that will subsequently populate it.
            </p>
            <div className="flex items-center justify-between mt-4">
              {/* Avatar & Name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full" />
                <div>
                  <p className="font-semibold text-gray-800">John Doe</p>
                </div>
              </div>
              {/* Stars */}
              <div className="text-[#f97316] text-lg">★★★★☆</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
