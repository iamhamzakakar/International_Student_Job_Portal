// App.js
import React, { useEffect } from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
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
import Profiles from './Pages/Profiles';
import {Helmet} from "react-helmet";
import AppliedJobs from './Pages/AppliedJobs';


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
            <Helmet>
                <meta charSet="utf-8" />
                <title>StudyFinJourney</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Find Your First Student Job" />
            </Helmet>
            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/joblist" element={<JobList />} />
                        <Route path="/events" element={<Events />} />
                        <Route path='/Profile/:id' element={<Profiles/>} />
                        <Route path='/AppliedJobs/:id' element={<AppliedJobs/>} />
                        <Route path="*" element={<Pagenotfound />} />
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </ThemeProvider>
    );
};

export default App;
