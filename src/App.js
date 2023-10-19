import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import RecentJobs from './RecentJobs';
import Footer from './Footer';
import AuthPage from './AuthPage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { CssBaseline, Paper, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#ffc107',
        },
        background: {
            default: '#f5f5f5',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <CssBaseline />
                <div style={{ backgroundColor: theme.palette.background.default, minHeight: '100vh' }}>
                    <Navbar />
                    <Paper elevation={3} style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.common.white }}>
                        <Routes>
                            <Route path="/" element={<div>
                                <HeroSection />
                                <AboutUs />
                                <RecentJobs />
                            </div>} />
                            <Route path="auth" element={<SignIn />} />
                            <Route path="signup" element={<SignUp />} />
                        </Routes>
                    </Paper>
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
