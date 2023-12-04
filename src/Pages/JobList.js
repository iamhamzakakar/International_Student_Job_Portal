import React, { useState, useEffect } from 'react';
import { ThemeProvider, Grid, CssBaseline, Pagination } from '@mui/material';
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
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 5;

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

    // Calculate the current jobs to display
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    // Change page
    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <ThemeProvider theme={theme}>
            <NavBar/>
            <CssBaseline />
            <Header openNewJobModal={() => setNewJobModalOpen(true)}/>
            <NewJobModal open={isNewJobModalOpen} setOpen={setNewJobModalOpen}/>
            <Grid container justifyContent={"center"}>
                <Grid item xs={10}>
                    <SearchBar />
                    {currentJobs.map(job => <JobCard key={job.id} {...job} />)}
                    <Pagination
                        count={Math.ceil(jobs.length / jobsPerPage)}
                        page={currentPage}
                        onChange={handleChangePage}
                        color="secondary"
                        align="center"
                        sx={{ marginTop: 2, paddingBottom: 2 }}
                    />
                </Grid>
            </Grid>
            <Footer/>
        </ThemeProvider>
    )
}

export default JobList;
