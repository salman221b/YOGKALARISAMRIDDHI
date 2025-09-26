import React from "react";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-16">
      {/* Title */}
      <h1
        className="text-2xl 2xs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl 5xl:text-9xl pt-15 text-center font-semibold text-[#94563D]"
        style={{
          fontFamily: "Josefin Sans, sans-serif",
          letterSpacing: "0.1em",
        }}
      >
        KALARIPAYATTU
      </h1>

      {/* Subtitle */}
      <p className="text-sm sm:text-base md:text-lg text-gray-700  z-10 mt-3">
        Traditional Techniques for Modern Warriors
      </p>

      {/* Large Faded Background Text */}
      <h1 className="absolute text-[12vw] sm:text-[10vw] md:text-[8vw] font-extrabold text-gray-200 opacity-70 top-65">
        KALARIPAYATTU
      </h1>

      {/* Image */}
      <div className="mt-6">
        <img
          src="https://res.cloudinary.com/dpjfm1pha/image/upload/v1756702264/kalari_y0zjhq.png"
          alt="Kalaripayattu Warriors"
          className="w-[500px] sm:w-[550px] md:w-[650px] lg:w-[700px] relative z-20"
        />
      </div>
    </section>
  );
};

export default Hero;
