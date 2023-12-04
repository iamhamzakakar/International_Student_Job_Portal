import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Paper, Chip, Pagination } from '@mui/material';
import NavBar from '../Components/NavBar/NavBar';
import { useParams } from 'react-router-dom';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 2;
    const [count, setCount] = useState(1);
    const { id } = useParams();

    useEffect(() => {
        // Fetch applied jobs from the API when the component mounts or page changes
        const fetchAppliedJobs = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8080/api/get-applied-job/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch applied jobs');
                }
                const data = await response.json();
                setAppliedJobs(data.jobData);
                setCount(Math.ceil(data.totalCount / itemsPerPage));
            } catch (error) {
                console.error(error);
            }
        };

        fetchAppliedJobs();
    }, [page, id]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    // Function to format the date
    const formatDate = (dateString) => {
        const dateObject = new Date(dateString);
        return dateObject.toLocaleDateString('en-US');
    };

    return (
        <>
            <NavBar />
            <Box sx={{ backgroundColor: '#d4eaf7', minHeight: '100vh', paddingTop: 2 }}>
                <Typography variant="h2" align="center" color={'secondary'} gutterBottom>
                    Applied Jobs
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                    Here is the list of jobs you have applied for. Keep track of your applications and stay updated.
                </Typography>

                <Box sx={{ maxWidth: '80%', margin: 'auto', border: '1px solid #e8e8e8', transition: '.3s ease', backgroundColor: '#d4eaf7', padding: 0, "&:hover": { boxShadow: '0px 5px 25px rgba(0,0,0,0.1)', borderLeft: '6px solid #00668c', backgroundColor: 'background.paper' } }}>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}><Typography variant="h6">Position</Typography></Grid>
                            <Grid item xs={12} md={4}><Typography variant="h6">User Name</Typography></Grid>
                            <Grid item xs={12} md={4}><Typography variant="h6">Applied Date</Typography></Grid>

                            {appliedJobs.map((job) => (
                                <React.Fragment key={job.id}>
                                    <Grid item xs={12} md={4}><Typography>{job.position}</Typography></Grid>
                                    <Grid item xs={12} md={4}><Typography>{job.companyName}</Typography></Grid>
                                    <Grid item xs={12} md={4}><Typography>{formatDate(job.appliedDate)}</Typography></Grid>
                                </React.Fragment>
                            ))}
                        </Grid>
                    </Paper>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                    <Chip label={`Applied Jobs: ${appliedJobs.length}`} />
                    <Pagination count={count} page={page} onChange={handleChange} color="secondary" />
                </Box>
            </Box>
        </>
    );
};

export default AppliedJobs;
