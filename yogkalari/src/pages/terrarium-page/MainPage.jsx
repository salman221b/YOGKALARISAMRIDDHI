import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";

const HeroSection = () => {
  const images = [
    "https://res.cloudinary.com/dpjfm1pha/image/upload/v1757153623/3276138ba1bc3e3910a00da617119e54fcc90abf_auyfgf.png",
    "https://res.cloudinary.com/dpjfm1pha/image/upload/v1757153615/ca4f2efd71cad639a0cff2ffe3acbc748bb8bcd6_m0zok7.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <section className="overflow-hidden pt-30">
      {/* Carousel */}
      <div className="w-full max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={img}
                alt={`slide-${index}`}
                className="rounded-xl object-cover w-full max-h-[500px] shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Text Content */}
      <div className="max-w-5xl mx-2 sm:mx-5  md:mx-20 mt-12 px-6">
        <h1
          className="text-3xl sm:text-5xl md:text-6xl font-semibold text-[#084C2E] tracking-wide"
          style={{
            fontFamily: "Clash Display, sans-serif",
          }}
        >
          SAMRIDDHI COLLECTIONS
        </h1>
        <p
          className="mt-4 text-gray-700 leading-relaxed text-base sm:text-sm md:text-lg lg:text-lg  text-justify"
          style={{ fontFamily: "IBM Plex Sans, sans-serif" }}
        >
          Each terrarium is handcrafted by Sachin Gurukkal, carrying the focused{" "}
          <span className="italic">prāṇa</span> of an ancient warrior tradition.
          Every piece is a miniature sacred grove, built to hold space, regulate
          energy, and invite presence.
        </p>
        <p
          className="mt-4 text-gray-700 leading-relaxed text-base sm:text-sm md:text-lg lg:text-lg  text-justify"
          style={{ fontFamily: "IBM Plex Sans, sans-serif" }}
        >
          They are not decorative items — they are ritual companions. Designed
          around the <span className="italic">pañca mahābhūtas</span>, they work
          silently to harmonize your space through breath, stillness, and rooted
          earth energy.
        </p>
      </div>
      <ProductCard />
    </section>
  );
};

export default HeroSection;
