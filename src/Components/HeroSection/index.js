import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroBanner = () => {
    const bannerStyle = {
        backgroundImage: 'url("https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // adjust the height as needed
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff', // assuming white text
        textAlign: 'center',
        padding: '20px',
    };

    return (
        <Box style={bannerStyle}>
            <Typography variant="h1">
                Your Job Search Ends Right Here
            </Typography>
            <Button href='/JobList' variant="contained" color="primary" style={{ marginTop: '20px' }}>
                Job Listing
            </Button>
        </Box>
    );
};

export default HeroBanner;
