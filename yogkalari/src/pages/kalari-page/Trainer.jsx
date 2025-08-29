import React from "react";
import trainerImg from "../../assets/face1.jpg"; // Replace with your trainer image path

const Trainer = () => {
  return (
    <section className="bg-[#FFFCF5] py-16 px-6 sm:px-10 md:px-16 lg:px-24 font-sans">
      
      {/* Section Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#B35434]">
        Trainer
      </h2>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Image */}
        <div>
          <img
            src={trainerImg}
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

          <p className="mt-4 text-gray-700 leading-relaxed">
            Trained in the ancient gurukula system of Kerala, Sachin Gurukkal brings
            over 15 years of teaching experience, including the past 8 years in Dubai,
            offering Kalaripayattu as a powerful system of movement, breath, and inner
            stillness.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Rooted in the marma system and temple traditions of southern India, his
            teaching transmits not just form and technique — but śarīra śikṣa (body
            education), energetic discipline, and grounded awareness.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            His classes are rigorous yet graceful, inviting students of all ages to embody:
          </p>

          <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
            <li>Strength through surrender</li>
            <li>Power through stillness</li>
            <li>Discipline through presence</li>
          </ul>

          <p className="mt-4 text-gray-700 leading-relaxed">
            His work brings ancient Kalari into modern spaces — without dilution,
            without compromise.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            <strong>A Business Anchored in Ritual</strong>
          </p>

          <p className="mt-2 text-gray-700 leading-relaxed">
            From breath-led yoga to living terrariums to the fire and form of Kalari,
            every offering of YogKalariSamriddhi is:
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Guided by śāstra and rooted in ṛta (cosmic rhythm). Inspired by the pañca
            mahābhūtas — earth, water, fire, air, and space. Designed to foster inner
            prosperity and outer harmony.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            This is not wellness for performance.
            <br />
            This is wellness as sādhana — a return to what is essential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trainer;
