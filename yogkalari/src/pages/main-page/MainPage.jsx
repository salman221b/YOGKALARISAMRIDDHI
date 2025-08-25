import React from 'react'
import Hero from './Hero'
import StoryCarousel from './StoryCarrousel'
import Cards from './Cards'
import FounderSection from './FounderSection'
import Marquee from './Marquee'
import WhispersWellnessPage from './WhispersWellnessPage'


const MainPage = () => {
  return (
    <div>
      <Hero/> 
      <StoryCarousel />
      <Cards/>
      <FounderSection/>
      <Marquee/>
      <WhispersWellnessPage/>
      
    </div>
  )
}

export default MainPage
