import React, { useState, useEffect } from 'react';
import { ThemeProvider, Grid, CssBaseline } from '@mui/material';
import theme from '../theme/theme';
import Header from '../Components/Header';
import SearchBar from '../Components/Header/SearchBar';
import JobCard from '../Components/Job/JobCard';
import NewJobModal from '../Components/Job/NewJobModal';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/index.js';

const JobList = () => {
    const [isNewJobModalOpen, setNewJobModalOpen] = useState(false);
    const [jobs, setJobs] = useState([]);

    // Fetching jobs data from the API
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8080/api/get-job');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setJobs(data.jobData);
                console.log(data.jobData)
            } catch (error) {
                console.error('Fetch jobs failed:', error);
            }
        };

        fetchJobs();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <NavBar/>
            <CssBaseline />
            <Header openNewJobModal={() => setNewJobModalOpen(true)}/>
            <NewJobModal open={isNewJobModalOpen} setOpen={setNewJobModalOpen}/>
            <Grid container justifyContent={"center"}>
                <Grid item xs={10}>
                    <SearchBar />
                    {jobs.map(job => <JobCard key={job.id} {...job} />)}
                </Grid>
            </Grid>
            <Footer/>
        </ThemeProvider>
    )
}

export default JobList;
