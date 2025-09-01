import React from "react";
const KalaripayattuDetails = () => {
  return (
    <section className="bg-[#FFFCF5] px-6 sm:px-10 md:px-16 lg:px-24 py-16 text-gray-800 font-sans leading-relaxed">
      
      {/* Intro Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* Left Column */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#B35434]">
            Kalaripayattu
          </h2>
          <p className="text-[#B35434] italic mt-2 text-lg">
            "देहस्य विजय आत्मानः जयः"
          </p>
          <p className="text-gray-700 italic mb-4">Victory over the body is victory over the Self.</p>

          <p className="mb-4">
            Kalaripayattu is one of the oldest martial traditions in the world —
            a sophisticated and sacred system of movement, breath, and awareness
            that originated in Kerala’s ancient temple arenas (khestras).
          </p>
          <p className="mb-4">
            More than a fighting style, Kalari is a discipline of self-mastery —
            training the body to move like water and the mind to remain anchored
            like earth.
          </p>
          <p className="mb-4">
            At YogKalariSamriddhi, our Kalari offerings are guided by Sachin Gurukkal,
            a respected teacher with 15 years of teaching experience, including
            the past 8 years in Dubai. Trained in the gurukula system and deeply
            immersed in both northern and southern Kalari traditions, he brings
            the rigor of lineage with a rhythm that resonates in modern times.
          </p>
          <p>
            His approach is rooted in discipline, flow, and precision — making
            Kalari accessible for all bodies, while preserving its sacred power.
          </p>
        </div>

        {/* Right Column Image */}
        <div>
          <img
            src="https://res.cloudinary.com/dpjfm1pha/image/upload/v1756702709/kalari1_zflvdw.jpg"
            alt="Kalaripayattu Warriors"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* What Kalari Builds Section */}
      <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center md:flex md:flex-col-reverse">
        {/* Left Image */}
        <div className="sm:order-1">
          <img
            src="https://res.cloudinary.com/dpjfm1pha/image/upload/v1756702572/kalari2_zszxft.jpg"
            alt="Kalari Training"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="sm:order-2">
          <h3 className="text-2xl font-bold text-[#B35434]">What Kalari builds</h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li><strong>Śarīra niyantraṇa</strong> — physical control and coordination</li>
            <li><strong>Śvāsa sādhanā</strong> — breath training and focus</li>
            <li><strong>Bala & dhṛtā</strong> — strength, stamina, and grounded power</li>
            <li><strong>Manas shithilī</strong> — mental clarity, discipline, and stillness</li>
            <li><strong>Aṅga śuddhi</strong> — fluid body awareness and injury prevention</li>
          </ul>
          <p className="mt-4 text-gray-700">
            From dynamic movement sequences (<em>Meipayattu</em>) to breath-led
            transitions and eventually weapon forms — Kalari trains the body,
            breath, and being together.
          </p>
        </div>
      </div>

      {/* Who Is It For Section */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h3 className="text-2xl font-bold text-[#B35434]">Who is it for</h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li>Adults seeking strength, agility, and discipline</li>
            <li>Children building confidence, focus, and rooted movement</li>
            <li>Dancers, movers, and martial arts enthusiasts</li>
            <li>Beginners welcome — no prior experience needed</li>
          </ul>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://res.cloudinary.com/dpjfm1pha/image/upload/v1756702581/kalari3_qysgwj.jpg"
            alt="Kalari Students"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Footer Tagline */}
      <div className="mt-16 text-center">
        <h4 className="text-xl md:text-2xl font-semibold text-[#B35434]">
          Ancient lineage. Modern energy
        </h4>
        <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
          Kalari is where your body becomes all eyes — fully alert, fully grounded,
          fully alive.
        </p>
      </div>
    </section>
  );
};

export default KalaripayattuDetails;
