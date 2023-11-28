import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import HeroBanner from '../Components/HeroSection'
import WhoAreWe from '../Components/WhoAreWe'
import JobCardSection from '../Components/JobCardSection/JobCardSection'
import jobData from '../JobData'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <HeroBanner/>
      <WhoAreWe/>
      <JobCardSection jobs={jobData} />
      <Footer/>
    </div>
  )
}

export default Home