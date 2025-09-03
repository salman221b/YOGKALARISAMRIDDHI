import React from "react";

const Offerings = () => {
  const offerings = [
    {
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1756890082/offering1_tipcfw_3e76c6.jpg",
      title: "Private Yoga & Energy Reset Sessions",
      desc: "Stillness-based, one-on-one sessions to gently realign the subtle body and calm the energetic field.",
    },
    {
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1756887560/a688b748dc5bb0f408128ab2878043b4578fc9ed_xshqix.jpg",
      title: "Corporate Wellness",
      desc: "Breathwork, chair yoga, and stress-relief programs for workplaces seeking calmer, more creative teams.",
    },
    {
      image:
        "https://res.cloudinary.com/dpjfm1pha/image/upload/v1756887531/4f19df3973f28100dc5f53221da8e569220f76e1_nba6xg.jpg",
      title: "Yoga Workshops",
      desc: "Live offerings including the Hormone Harmony series and therapeutic intensives.",
    },
  ];

  return (
    <section className="bg-[#EDEAE0] py-16 px-6 sm:px-10 md:px-16 lg:px-24 text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-nunito text-[#A97375]">
        Offerings
      </h2>
      <p className="text-gray-600 mt-2  mx-auto text-sm sm:text-base ">
        Based in Dubai. (Classes offered in select locations. Contact us to
        explore starting a group near you.)
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
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 font-nunito">
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
