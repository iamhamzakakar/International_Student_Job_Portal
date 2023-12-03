import React, {useEffect, useState} from 'react'
import NavBar from '../Components/NavBar/NavBar'
import HeroBanner from '../Components/HeroSection'
import WhoAreWe from '../Components/WhoAreWe'
import JobCardSection from '../Components/JobCardSection/JobCardSection'
import jobData from '../JobData'
import Footer from '../Components/Footer'

const Home = () => {

    const [isNewJobModalOpen, setNewJobModalOpen] = useState(false);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8080/api/get-job');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setJobs(data.jobData);
            } catch (error) {
                console.error('Fetch jobs failed:', error);
            }
        };

        fetchJobs();
    }, []);

  return (
    <div>
      <NavBar/>
      <HeroBanner/>
      <WhoAreWe/>
      <JobCardSection jobs={jobs} />
      <Footer/>
    </div>
  )
}

export default Home