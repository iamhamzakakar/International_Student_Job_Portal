import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

function Footer() {
    return (
        <Paper elevation={3} style={{ backgroundColor: '#2E3B55', marginTop: '20px', padding: '20px 0' }}> {/* Darker shade matching Navbar */}
            <Container>
                <Typography variant="body2" align="center" style={{ color: '#ffffff' }}>
                    &copy; 2023 International Student Job Portal
                </Typography>
            </Container>
        </Paper>
    );
}

export default Footer;
