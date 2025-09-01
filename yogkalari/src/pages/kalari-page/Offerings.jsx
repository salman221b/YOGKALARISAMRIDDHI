import React from "react";


const Offerings = () => {
  const offerings = [
    {
      image: "https://res.cloudinary.com/dpjfm1pha/image/upload/v1756702257/offering1_tipcfw.jpg",
      title: "Group Kalari Classes",
      desc: "Contact us for active batches",
    },
    {
      image: "https://res.cloudinary.com/dpjfm1pha/image/upload/v1756702257/offering1_tipcfw.jpg",
      title: "Private Training",
      desc: "Adults & kids — by appointment",
    },
    {
      image: "https://res.cloudinary.com/dpjfm1pha/image/upload/v1756702257/offering1_tipcfw.jpg" ,
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
