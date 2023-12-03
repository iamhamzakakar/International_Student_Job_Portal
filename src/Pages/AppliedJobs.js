import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import jobData from '../JobData'; // Import the job data
import NavBar from '../Components/NavBar/NavBar';

const AppliedJobs = () => {
    return (
        <>
        <NavBar/>
        <Box sx={{ padding: 2 }}>
            <Typography variant="h2" align="center" gutterBottom>
                Applied Jobs
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
                Here is the list of jobs you have applied for. Keep track of your applications and stay updated.
            </Typography>

            <Paper elevation={3} sx={{ padding: 2 }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={4}><Typography variant="h6">Position</Typography></Grid>
                    <Grid item xs={12} md={4}><Typography variant="h6">Company Name</Typography></Grid>
                    <Grid item xs={12} md={4}><Typography variant="h6">Location</Typography></Grid>

                    {jobData.map((job, index) => (
                        <React.Fragment key={job.id}>
                            <Grid item xs={12} md={4}><Typography>{job.title}</Typography></Grid>
                            <Grid item xs={12} md={4}><Typography>{job.companyName}</Typography></Grid>
                            <Grid item xs={12} md={4}><Typography>{job.location}</Typography></Grid>
                        </React.Fragment>
                    ))}
                </Grid>
            </Paper>
        </Box>
        </>
    );
};

export default AppliedJobs;
