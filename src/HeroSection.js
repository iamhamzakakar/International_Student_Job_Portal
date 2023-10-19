import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function HeroSection() {
  return (
    <Container style={{ 
        padding: '5rem 0', 
        textAlign: 'center',
        height: '600px',
        backgroundImage: 'url(/Hero Section Image.png)', // Direct path set in inline style
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}>
      <Typography variant="h2" gutterBottom>
        Working life professional
      </Typography>
      <Typography variant="h5" gutterBottom>
        Celebrating work and life
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Find the best job opportunities for international students.
      </Typography>
      <Button variant="contained" color="primary" style={{ marginTop: '2rem' }}>
        Explore Jobs
      </Button>
    </Container>
  );
}

export default HeroSection;
