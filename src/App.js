import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import RecentJobs from './RecentJobs';
import Footer from './Footer';
import './styles.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <HeroSection />
            <AboutUs />
            <RecentJobs />
            <Footer />
        </div>
    );
}

export default App;
