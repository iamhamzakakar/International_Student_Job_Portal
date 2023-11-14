import React from "react";
import { Typography, Button, Box, Grid } from "@mui/material";

const Header = ({openNewJobModal} ) => {
  return (
    <Box sx={{ 
      bgcolor: 'primary.light', // Make sure 'primary.banner' is defined in your theme
      color: 'text.primary',
      pt: 10,
      pb: 8,
    }}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={10}>
          <Box display={'flex'} justifyContent={"space-between"}>
            <Typography variant="h4" color="text.primary" gutterBottom>
              Open Job Listing
            </Typography>
            <Button onClick={openNewJobModal} variant="contained" disableElevation >
              Post a Job
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
