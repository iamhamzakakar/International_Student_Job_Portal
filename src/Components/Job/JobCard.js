import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Slide } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const JobCard = ({ id, postedOn, title, type, location, companyName, link, skills, experience, qualification,shift, description, ...jobDetails }) => {
    const [open, setOpen] = useState(false);


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleApply = () => {
        window.open(link, '_blank'); // Open the application link in a new tab
    };

    const dateObject = new Date(postedOn);
    const formattedDate = dateObject.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return (
    <>
      <Box p={2} mb={2} sx={{
          border: '1px solid #e8e8e8',
          transition: '.3s ease',
          backgroundColor: 'background.paper',
          "&:hover": {
              boxShadow: '0px 5px 25px rgba(0,0,0,0.1)',
              borderLeft: '6px solid #00668c',
              backgroundColor: '#d4eaf7'
          }
      }}>
        {/* Set the outer Grid as a container */}
        <Grid container spacing={2} alignItems="center">
          {/* First Grid item for the job title and company */}
          <Grid item xs={12} sm={4}>
            <Typography variant='subtitle1'>{title}</Typography>
            <Typography sx={{
              fontsize: '13.5px',
              backgroundColor: 'primary.main',
              padding: '6px',
              borderRadius: '5px',
              display: 'inline-block',
              fontweight: 'bold'
            }} variant='subtitle1'>{companyName}</Typography>
          </Grid>
            <Grid item xs={12} sm={4}>
                <Grid container spacing={1}>
                    {skills.map((skill, index) => (
                        <Grid sx={{
                            margin: '4px',
                            padding: '6px',
                            fontSize: '14.5px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            backgroundColor: 'text.secondary',
                            color: 'background.default'
                        }} key={index} item>
                            <Typography>{skill}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
          <Grid item xs={12} sm={4} container direction="column" alignItems="flex-end">
            <Grid item>
              <Typography variant='caption2'>{formattedDate} | {type} | {location}</Typography>
            </Grid>
            <Grid item>
              <Box mt={2}>
                <Button variant="outlined" onClick={handleOpen} disableElevation>
                  Check
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* Dialog for Job Details */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="job-details-description"
        >
      <DialogTitle>{title}</DialogTitle>
          <DialogContent>
              <DialogContentText id="job-details-description">
                  <Typography gutterBottom>Job Summary: {description}</Typography> {/* Updated this line */}
                  <Typography gutterBottom>Qualifications: {qualification}</Typography>
                  <Typography gutterBottom>Experience: {experience}</Typography>
                  <Typography gutterBottom>Shift: {shift}</Typography>
                  <Typography gutterBottom>Location: {location}</Typography>
              </DialogContentText>
          </DialogContent>
      <DialogActions>
          <Button color="primary" variant="contained" onClick={handleApply}>
                        Apply
          </Button>
          <Button color="secondary" onClick={handleClose}>Close</Button>
      </DialogActions>
      </Dialog>
      </>
  );
};

export default JobCard;
