import React from "react";
const Trainer = () => {
  return (
    <section className="py-16 px-6 sm:px-10 md:px-16 lg:px-24 font-sans">
      {/* Section Title */}
      <h2 className="text-center text-2xl md:text-3xl font-nunito text-[#94563D]">
        Meet your Kalari Gurukkal
      </h2>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Image */}
        <div>
          <img
            src="https://res.cloudinary.com/dpjfm1pha/image/upload/v1756887436/5f559bbdd3c549582b72b03a0da938256f33c829_wzrsgu.jpg"
            alt="Sachin Gurukkal"
            className="rounded-xl shadow-lg w-xl object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Sachin Gurukkal
          </h3>
          <p className="text-gray-600 italic mt-1">
            Traditional Kalari Teacher | Lineage Holder | Movement Guide
          </p>

          {/* Introduction */}
          <p className="mt-6 text-gray-700 leading-relaxed text-[1.05rem]">
            <span className="font-semibold">Sachin Gurukkal, </span>
            Trained in the{" "}
            <span className="font-semibold">
              ancient gurukula tradition of Kerala
            </span>
            , Sachin Gurukkal brings{" "}
            <span className="font-semibold">
              15+ years of expertise in Kalaripayattu instruction
            </span>
            , including{" "}
            <span className="font-semibold">
              8 immersive years of teaching in Dubai
            </span>
            . His approach offers{" "}
            <span className="font-semibold">
              Kalaripayattu as a transformative practice
            </span>
            —a dynamic fusion of{" "}
            <span className="italic">movement, breathwork,</span> and{" "}
            <span className="italic">inner stillness</span>.
          </p>

          {/* Roots and Philosophy */}
          <p className="mt-5 text-gray-700 leading-relaxed text-[1.05rem]">
            Rooted in the <span className="font-semibold">marma system</span>{" "}
            and <span className="font-semibold">temple traditions</span> of
            southern India, his teaching transmits not just form and technique
            but also <span className="italic">śarīra śikṣaṇa</span> (body
            education),{" "}
            <span className="font-semibold">energetic discipline</span>, and{" "}
            <span className="font-semibold">grounded awareness</span>.
          </p>

          {/* Classes */}
          <p className="mt-6 text-gray-700 leading-relaxed text-[1.05rem]">
            His classes are{" "}
            <span className="font-semibold">rigorous yet graceful</span>,
            inviting students of all ages to embody:
          </p>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside text-[1.05rem]">
            <li>
              <span className="font-semibold">Strength</span> through surrender
            </li>
            <li>
              <span className="font-semibold">Power</span> through stillness
            </li>
            <li>
              <span className="font-semibold">Discipline</span> through presence
            </li>
          </ul>

          {/* Integration */}
          <p className="mt-6 text-gray-700 leading-relaxed text-[1.05rem]">
            Sachin Gurukkal’s work{" "}
            <span className="font-semibold">
              bridges ancient Kalari wisdom with modern wellness spaces
            </span>
            —without dilution, without compromise.
          </p>

          {/* Brand Philosophy */}
          <p className="mt-6 font-semibold text-gray-900">
            YogKalariSamriddhi: A Ritual-Rooted Wellness Brand
          </p>
          <p className="mt-2 text-gray-700 leading-relaxed text-[1.05rem]">
            From <span className="italic">breath-led yoga</span> to{" "}
            <span className="italic">living terrariums</span> to the{" "}
            <span className="italic">fire and form of Kalari</span>, every
            offering from YogKalariSamriddhi is:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside text-[1.05rem]">
            <li>
              <span className="font-semibold">
                Guided by śāstra and aligned with ṛta
              </span>{" "}
              (cosmic rhythm)
            </li>
            <li>
              <span className="font-semibold">
                Inspired by pañca mahābhūtas
              </span>{" "}
              — earth, water, fire, air, and space
            </li>
            <li>
              <span className="font-semibold">
                Designed to cultivate inner prosperity and outer harmony
              </span>
            </li>
          </ul>

          {/* Closing Note */}
          <p className="mt-6 text-gray-700 leading-relaxed text-[1.05rem]">
            This is{" "}
            <span className="font-semibold">
              not performance-driven wellness
            </span>
            . <br />
            This is{" "}
            <span className="font-semibold italic">wellness as sādhana</span> —
            a sacred return to what is essential, timeless, and true.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trainer;
