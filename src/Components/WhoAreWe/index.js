import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';

const WhoAreWe = () => {
    const backgroundStyle = {
        backgroundImage: 'url("https://images.pexels.com/photos/3205567/pexels-photo-3205567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        height: '75vh',
        backgroundPosition: 'center',
        padding: '50px 0', // Adjust as needed
        position: 'relative-bottom',
    };

    const blurStyle = {
        backdropFilter: 'blur(10px)', // Apply blur effect
        backgroundColor: 'rgba(212,234,247,0.7)', // Semi-transparent background
        padding: '20px',
        borderRadius: '15px',
        border: '1px solid #fff', // Optional: add border
    };

    const textStyle = {
        textAlign: 'center', // Center align text
        color: '#333', // Text color
        '&:hover': {
            color: '#ffde59', // Change color on hover
            cursor: 'pointer',
        },
    };

    return (
        <Box style={backgroundStyle}>
            <Container>
                <Grid mt={4} mb={6} container justifyContent="center">
                    <Grid item xs={12} sm={8} md={6}>
                        <Paper style={blurStyle}>
                            <Typography variant="h2" style={textStyle}>
                                Who Are We
                            </Typography>
                            <Typography variant="body1" style={textStyle} paragraph>
                                At our core, we are innovators passionate about bridging the gap between job seekers and their ideal roles. We specialize in understanding the unique challenges faced by international students and provide tailored solutions to facilitate a seamless job search. Our approach is distinct in its personal touch and commitment to finding not just any job, but the right fit for your career aspirations.
                            </Typography>
                            <Typography variant="h5" style={textStyle}>
                                "Empowering Your Career Journey"
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default WhoAreWe;