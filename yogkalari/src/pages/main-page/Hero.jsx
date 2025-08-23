import React from 'react'

const Hero = () => {
  return (
    <div>
        <h1 className='text-2xl 2xs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl 5xl:text-9xl pt-35 mx-auto text-center font-semibold text-[#2F5C4E]' style={{ fontFamily: 'Josefin Sans, sans-serif', letterSpacing: '0.1em' }}>YOGKALARISAMRIDDHI</h1>
        <p className='sm:text-xl md:text-2xl lg:text-4xl mx-auto text-center text-black'>Where Wellness Meets Prosperity</p>
        <p className='xs:text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl mx-10 sm:mx-20 md:mx-50 lg:mx-50 xl:mx-70 mt-3 text-center text-black'>An integrated wellness offering born from Indian tradition, ritual, and rootedness. At YogKalariSamriddhi, we unite body, breath, and earth—through therapeutic Yoga, Kalaripayattu training, and curated living terrariums</p>
        <button className='transition duration-500 ease-in-out text-[#2F5C4E] px-6 py-2 rounded-full mt-5 mx-auto block border-2 border-[#2F5C4E] cursor-pointer hover:bg-[#2F5C4E] hover:text-white '>Book An Appointment</button>
    </div>
  )
}

export default Hero
