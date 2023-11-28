import React from 'react';
import { Box, Button, Typography, Grid, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: 'primary.light', color: 'black', padding: '20px' }}>
            <Grid container spacing={3} justifyContent="center">
                {/* First Section */}
                <Grid item xs={12} sm={4} textAlign={'center'}>
                    <Button color="inherit" component={NavLink} to="/"
                    sx={{pb:2}}>
                        StudyFinInfo
                    </Button>
                    <Box>
                        <IconButton color="inherit" component="a" href="https://www.linkedin.com">
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton color="inherit" component="a" href="https://www.twitter.com">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton color="inherit" component="a" href="https://www.instagram.com">
                            <InstagramIcon />
                        </IconButton>
                    </Box>
                </Grid>

                {/* Second Section */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h5">Services</Typography>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><Link href="/JobList" color="inherit" underline="none">Job Listing</Link></li>
                        <li><Link href="/Events" color="inherit" underline="none">Events</Link></li>
                        <li><Link href="/WhoAreWe" color="inherit" underline="none">Who Are We</Link></li>
                        <li><Link href="/Contact" color="inherit" underline="none">Contact Us</Link></li>
                    </ul>
                </Grid>

                {/* Third Section */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h5">Why us?</Typography>
                    <Typography variant="body1">
                        Choose StudyFin for the latest insights in finance studies, 
                        exceptional job opportunities, and a community that supports 
                        your academic and professional growth.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
