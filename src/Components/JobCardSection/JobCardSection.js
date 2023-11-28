// JobCardSection.js

import React, { useState } from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import JobCard from '../Job/JobCard';

const JobCardSection = ({ jobs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev < jobs.length - 1 ? prev + 1 : prev));
  };

  return (
    <Box sx={{
      backgroundColor: "background.paper",
      height: "40vh",
      paddingTop: "8px"
    }}>
      <Grid container justifyContent="center" spacing={2}
      sx={{ maxWidth: 1000, margin: 'auto', position: 'relative', padding: '0 8px' }}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Recent Listed Jobs
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ position: 'relative', padding: '0 8px' }}> {/* Reduced padding */}
          <Box display={'block'} justifyContent="right"
            sx={{ maxWidth: 900, margin: 'auto', position: 'relative', padding: '0 8px' }}>
            {jobs[currentIndex] && <JobCard {...jobs[currentIndex]} />}
          </Box>
          <Box position="absolute" bottom={-40} right={40} display="flex" mt={2}> {/* Lowered buttons position */}
            <Button color='secondary' onClick={handlePrev} disabled={currentIndex === 0}>
              <ArrowBackIosIcon />
            </Button>
            <Button color='secondary' onClick={handleNext} disabled={currentIndex === jobs.length - 1}>
              <ArrowForwardIosIcon />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobCardSection;
