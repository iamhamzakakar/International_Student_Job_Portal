import React from 'react';
import { Grid, Paper, Box } from '@mui/material';

const SharedLayout = ({ children, rightContent }) => {
    return (
        <Box sx={{
            backgroundColor: 'rgba(212,234,247,0.7)', p: 3,  }}>
            <Paper elevation={3}>
                <Grid sx={{p:9, height:"100vh", }} container spacing={1}>
                    <Grid item xs={12} md={8}>
                        {children}
                    </Grid>
                    <Grid item xs={12} md={4} pt={8}>
                        {rightContent}
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default SharedLayout;
