import React from "react";
const KalaripayattuDetails = () => {
  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 text-gray-800 font-sans leading-relaxed">
      {/* Intro Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-[36px] text-[#A97375] font-nunito">
            Yoga Therapy
          </h2>
          <p className="text-[#A97375] italic mt-2 text-lg">
            “शरीरम् आद्यं खलु धर्मसाधनम्”
          </p>
          <p className="text-gray-700 italic mb-4">
            The body is the foremost instrument for dharma.— Kālidāsa
          </p>

          <p className="mb-4">
            Each session is a sādhanā— a living ritual, adapted to your prakṛti
            (constitution), vikṛti (imbalance), and the ṛtu (season or cycle)
            you're in. At YogKalariSamriddhi, our approach to yoga is not about
            flexibility or performance — it is about healing, regulation, and
            returning to your unique rhythm.
          </p>
          <p className="mb-4">
            Led by Sucheta Chadha, an experienced yoga therapist with over 13
            years of one-on-one practice, this offering is grounded in the yoga
            śāstra, designed to support both physical recovery and energetic
            realignment.
          </p>
          <p className="mb-4">
            Whether you're navigating a health condition or seeking deeper
            connection with your body, our therapeutic programs integrate:
          </p>
          <p>
            Āsana — Postural support tailored to your capacity <br />
            Prāṇāyāma — Breath regulation to restore nervous system balance
            <br /> Dhyāna — Meditation for clarity and inner quiet
            <br /> Daily Vihāra Kriyās — Small, accessible rituals for everyday
            regulation
          </p>
        </div>

        {/* Right Column Image */}
        <div>
          <img
            src="https://res.cloudinary.com/dpjfm1pha/image/upload/v1756890082/offering1_tipcfw_3e76c6.jpg"
            alt="Yoga Therapy"
            className="rounded-lg shadow-lg object-cover w-full h-[600px]"
          />
        </div>
      </div>

      {/* What Kalari Builds Section */}
      <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center md:flex md:flex-col-reverse">
        {/* Left Image */}
        <div className="sm:order-1">
          <img
            src="https://res.cloudinary.com/dpjfm1pha/image/upload/v1756704038/795e8cc62a0e7256200c0ee507bfbd8d6c4a91a7_bzoniw.jpg"
            alt="Kalari Training"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="sm:order-2">
          <h2 className="text-3xl md:text-4xl lg:text-[36px] text-[#A97375] font-nunito">
            We support clients with
          </h2>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li>
              Hormonal health (PCOS, perimenopause, thyroid, menstrual
              irregularities)
            </li>
            <li>
              Immune & energy imbalances (chronic fatigue, long COVID,
              autoimmune conditions)
            </li>
            <li>
              Stress & nervous system dysregulation (anxiety, burnout, sleep
              disorders)
            </li>
            <li>
              Pain management (arthritis, spine issues, tension-based patterns)
            </li>
            <li>
              Restorative support for leaders, creatives & sensitive systems
            </li>
          </ul>
        </div>
      </div>

      {/* Who Is It For Section */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-[36px] text-[#A97375] font-nunito">
            What makes our Yoga Therapy different?
          </h2>
          <p>
            Unlike group classes offering generalized flows, our approach is
            tailored, introspective, and intentional. We hold space for inquiry,
            stillness, and sacred nuance — where practice becomes medicine, and
            your śarīra (body) becomes a temple of awareness.
          </p>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://res.cloudinary.com/dpjfm1pha/image/upload/v1756704191/c715afba25082f168a9425be119c5f75bf52e700_1_jzyes8.jpg"
            alt="Kalari Students"
            className="rounded-lg shadow-lg w-full object-cover h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default KalaripayattuDetails;
