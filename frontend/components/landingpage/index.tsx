import React from 'react'
import AppBar from '../appbar'
import HeroSection from '../herosection'
import Footer from '../footer'
import CardList from '../cardlist'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
        <AppBar/>
        <HeroSection/>
        <CardList/>
        <Footer/>
    </div>
  )
}

export default LandingPage