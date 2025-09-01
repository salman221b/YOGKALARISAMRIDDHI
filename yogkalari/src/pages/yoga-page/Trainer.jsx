import React from "react";
const Trainer = () => {
  return (
    <section className="bg-[#FFFCF5] py-16 px-6 sm:px-10 md:px-16 lg:px-24 font-sans">
      {/* Section Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#FD6F8E]">
        Trainer
      </h2>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Image */}
        <div>
          <img
            src="https://res.cloudinary.com/dpjfm1pha/image/upload/v1756702243/face1_bbgauz.jpg"
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
            Yoga Therapist | Wellness Educator | Conscious Entrepreneur{" "}
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            With over 13 years of experience in therapeutic yoga, Sucheta has
            supported hundreds of individuals — especially women — through
            hormonal imbalances, burnout recovery, and chronic health
            conditions.
          </p>
          <p> Her approach draws from the yoga śāstra, integrating:</p>
          <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
            <li>Prāṇāyāma — breathwork to regulate subtle energy</li>
            <li>Āsana — movement adapted to each body</li>
            <li> Manonigraha — mental clarity and inner stillness</li>
            <li>
              Upayoga-inspired rituals — accessible daily practices for
              real-life regulation
            </li>
          </ul>

          <p className="mt-4 text-gray-700 leading-relaxed">
            A former corporate professional herself, she brings a unique lens to
            workplace wellness, helping professionals shift from depletion to
            ojas — vital strength and presence.
          </p>

          <p className="mt-2 text-gray-700 leading-relaxed">
            For her, the body is not just a vessel, but a sādhana-yantra — a
            sacred instrument for restoring clarity, rhythm, and connection.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            This philosophy flows into her work with Samriddhi Terrariums, where
            earth wisdom, care, and quiet beauty meet in ritual form.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trainer;
