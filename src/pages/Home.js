import React from 'react'
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import Experiences from '../components/Experiences'
import GiftCards from '../components/GiftCards'
import Inspiration from '../components/Inspiration'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <Experiences />
        <GiftCards />
        {/* <Inspiration /> */}
        {/* <Footer /> */}
    </>
  )
}

export default Home