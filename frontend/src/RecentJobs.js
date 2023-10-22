import React from 'react';
import { Typography, Card, CardContent, CardActions, Grid, Button, Box } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function RecentJobs() {
    // Fake job data for various Finnish cities
    const jobData = [
        { title: "Software Developer", company: "TechCorp", location: "Helsinki" },
        { title: "Data Scientist", company: "DataSolutions", location: "Espoo" },
        { title: "Marketing Specialist", company: "MarketMinds", location: "Tampere" },
        { title: "Product Manager", company: "ProdTech", location: "Vantaa" },
        { title: "UX Designer", company: "DesignHub", location: "Oulu" },
        { title: "HR Specialist", company: "PeopleFirst", location: "Turku" }
    ];

    return (
        <Box sx={{ padding: '60px 0', backgroundColor: '#A67da' }}>
            <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
                Recent Jobs
            </Typography>
            <Grid container spacing={3}>
                {jobData.map((job, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card elevation={3}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {job.title}
                                </Typography>
                                <Box display="flex" alignItems="center" marginBottom={1}>
                                    <BusinessIcon color="primary" fontSize="small" sx={{ marginRight: '5px' }} />
                                    <Typography variant="subtitle1" gutterBottom>
                                        {job.company}
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" marginBottom={1}>
                                    <LocationOnIcon color="secondary" fontSize="small" sx={{ marginRight: '5px' }} />
                                    <Typography variant="body2" gutterBottom>
                                        {job.location}
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    View Details
                                </Button>
                                <Button size="small" color="secondary">
                                    Apply Now
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default RecentJobs;
