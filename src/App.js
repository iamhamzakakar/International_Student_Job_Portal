// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import Home from './Pages/Home';
import JobList from './Pages/JobList';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Pagenotfound from './Pages/Pagenotfound';
import Events from './Pages/Events';
import theme from './theme/theme';
import { UserProvider }  from './Components/UserContext/UserContext';



const App = () => {
    const [user, setUser] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('userData');

        try {
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
            }
            setIsLoading(false);
        } catch (error) {
            console.error('Error parsing user data:', error);
        }
    }, []);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <ThemeProvider theme={theme}>
            <UserProvider>
                <Router>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/joblist" element={<JobList />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="*" element={<Pagenotfound />} />
                    </Routes>
                </Router>
            </UserProvider>
        </ThemeProvider>
    );
};

export default App;
