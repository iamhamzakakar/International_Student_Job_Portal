import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import HeroBanner from '../Components/HeroSection'
import WhoAreWe from '../Components/WhoAreWe'
import JobCardSection from '../Components/JobCardSection/JobCardSection'
import jobData from '../JobData'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <HeroBanner/>
      <WhoAreWe/>
      <JobCardSection jobs={jobData} />
      <h1>Home</h1>
    </div>
  )
}

export default Home