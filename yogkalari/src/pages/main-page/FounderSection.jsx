import React from "react";

const FounderSection = () => {
  return (
    <div className="relative flex flex-col items-center py-20 px-6 group">
      {/* Background Arch that transforms to rectangle on hover */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#F5F2EB] to-[#F0EDE6] opacity-40 rounded-b-[50%] group-hover:opacity-100 group-hover:rounded-b-none group-hover:bg-gradient-to-br group-hover:from-[#E8F4FD] group-hover:via-[#F0F8FF] group-hover:to-[#F8FAFC] transition-all duration-700 ease-in-out -z-10 shadow-sm group-hover:shadow-lg"></div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-900 mb-12 z-10 group-hover:text-green-800 transition-colors duration-500">
        Meet the Founders
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full z-10">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-500 group-hover:shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=800&q=80"
            alt="Founder 1"
            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-800 transition-colors duration-300">
              Sachin Gurukkal
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Sachin Gurukkal is a lineage-trained Kalaripayattu teacher with 15 years' teaching.
              He leads adults and kids through flowing Kalari that builds strength, agility, focus, and humility.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium hover:underline transition-all duration-300"
            >
              Know More →
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-500 group-hover:shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
            alt="Founder 2"
            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-800 transition-colors duration-300">
              Sucheta Chadha
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Sucheta is a yoga therapist who helps people come home to their bodies.
              With 13+ years of one-to-one work, she supports women's health, pain, burnout, stress, and recovery.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium hover:underline transition-all duration-300"
            >
              Know More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;