import React from 'react'
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import Experiences from '../components/Experiences'
import GiftCards from '../components/GiftCards'

const Home = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <Experiences />
        <GiftCards />
    </>
  )
}

export default Home