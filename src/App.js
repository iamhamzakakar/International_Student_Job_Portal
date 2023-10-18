import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated imports
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import RecentJobs from './RecentJobs';
import Footer from './Footer';
import AuthPage from './AuthPage';
import './styles.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HeroSection />}>
                        <Route index element={<AboutUs />} />
                        <Route path="recent-jobs" element={<RecentJobs />} />
                    </Route>
                    <Route path="auth" element={<AuthPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
