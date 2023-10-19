import { Box, Container, Divider, Typography } from '@mui/material';
import React from 'react';

function AboutUs() {
    return (
        <Box
            sx={{
                padding: '80px 0',
                backgroundColor: '#ADD8E6' 
            }}
        >
            <Container>
                {/* Heading */}
                <Typography variant="h3" gutterBottom align="center">
                    About Us
                </Typography>
                
                {/* Divider for visual separation */}
                <Divider variant="middle" style={{ margin: '20px 0' }} />
                
                {/* Main content */}
                <Typography variant="body1" style={{ marginTop: '20px', lineHeight: 1.6 }}>
                    At International Student Job Portal, we bridge the gap between talent and opportunity. Our platform connects students with 
                    leading companies globally. Simplified job search. Diverse opportunities. That's our promise.
                </Typography>
            </Container>
        </Box>
    );
}

export default AboutUs;
