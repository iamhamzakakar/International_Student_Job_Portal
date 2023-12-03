import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Chip, Pagination } from '@mui/material';
import jobData from '../JobData'; // Import the job data
import NavBar from '../Components/NavBar/NavBar';

const AppliedJobs = () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 2;
    const count = Math.ceil(jobData.length / itemsPerPage);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const paginatedData = jobData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

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

                <Box sx={{ maxWidth: '80%', margin: 'auto', border: '1px solid #e8e8e8',
                            transition: '.3s ease',
                            backgroundColor: '#d4eaf7',
                            padding: 0,
                            "&:hover": {
                                boxShadow: '0px 5px 25px rgba(0,0,0,0.1)',
                                borderLeft: '6px solid #00668c',
                                backgroundColor: 'background.paper'
                                }
                         }}>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}><Typography variant="h6">Position</Typography></Grid>
                            <Grid item xs={12} md={4}><Typography variant="h6">User Name</Typography></Grid>
                            <Grid item xs={12} md={4}><Typography variant="h6">Applied Date</Typography></Grid>

                            {paginatedData.map((job) => (
                                <React.Fragment key={job.id}>
                                    <Grid item xs={12} md={4}><Typography>{job.title}</Typography></Grid>
                                    <Grid item xs={12} md={4}><Typography>{job.companyName}</Typography></Grid>
                                    <Grid item xs={12} md={4}><Typography>{job.location}</Typography></Grid>
                                    </React.Fragment>
                            ))}
                        </Grid>
                    </Paper>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 4 }}>
                    <Chip label={`Applied Jobs: ${jobData.length}`} />
                    <Pagination count={count} page={page} onChange={handleChange} color="secondary" />
                </Box>
            </Box>
        </>
    );
};

export default AppliedJobs;
