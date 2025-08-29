import React from "react";
import offering1 from "../../assets/offering1.jpg"; // Left image
import offering2 from "../../assets/offering1.jpg"; // Middle image
import offering3 from "../../assets/offering1.jpg"; // Right image

const Offerings = () => {
  const offerings = [
    {
      image: offering1,
      title: "Group Kalari Classes",
      desc: "Contact us for active batches",
    },
    {
      image: offering2,
      title: "Private Training",
      desc: "Adults & kids — by appointment",
    },
    {
      image: offering3,
      title: "Pop-Up Workshops",
      desc: "Festivals, wellness events, schools",
    },
  ];

  return (
    <section className="bg-[#EDEAE0] py-16 px-6 sm:px-10 md:px-16 lg:px-24 text-center">
      
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#B35434]">Offerings</h2>
      <p className="text-gray-600 mt-2 max-w-xl mx-auto text-sm sm:text-base">
        Based in Dubai. (Classes offered in select locations. Contact us to explore starting a group near you.)
      </p>

      {/* Offerings Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {offerings.map((offering, index) => (
          <div
            key={index}
            className="bg-[#F8F6F2] rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Image */}
            <img
              src={offering.image}
              alt={offering.title}
              className="w-full h-[300px] object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {offering.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{offering.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offerings;
