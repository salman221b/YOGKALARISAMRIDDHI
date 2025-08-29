import React from "react";

const WhispersWellnessPage = () => {
  return (
    <div className=" bg-[#F5F2EB]">
      {/* Top Section with Testimonials */}
      <div className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h1 className="text-2xl 2xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-5 text-[#2F5C4E] text-center">
            Whispers of Wellness
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Description */}
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                Every word shared here is a quiet echo of trust, transformation, and timeless care. Our clients don't just experience a service; they step into a philosophy.
              </p>
            </div>

            {/* Right Side - Testimonial Card */}
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  The Experience was awesome
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Lorem ipsum is a dummy or placeholder text commonly used in graphic design, 
                  publishing, and web development. Its purpose is to permit a page layout to be 
                  designed, independently of the copy that will subsequently populate it.
                </p>
                
                {/* User Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-medium">JD</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">John Doe</p>
                    <div className="flex space-x-1 mt-1">
                      {[1, 2, 3, 4].map((star) => (
                        <span key={star} className="text-orange-400 text-sm">★</span>
                      ))}
                      <span className="text-gray-300 text-sm">★</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-br from-[#2F5C4E] to-[#1E3D33] py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-lg md:text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Let's help you find balance through body, breath, and earth
          </p>

          <button className="bg-transparent border-2 border-[#F5F2EB] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#F5F2EB] hover:text-[#2F5C4E] transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhispersWellnessPage;