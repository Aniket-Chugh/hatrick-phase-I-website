import React from 'react'
import Preloader from './components/NavBar'
import HeroSection from './components/Herosection'
import IndiaMapSection from './components/Aboutus'
import ServicesSection from './components/SerivcesSection'

const App = () => {
  return (
    <>

    <Preloader></Preloader>
    <HeroSection></HeroSection>
    <IndiaMapSection></IndiaMapSection>
    <ServicesSection></ServicesSection>
    </>
  )
}

export default App
