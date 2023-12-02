import React from 'react';
import { TextField, Box, Typography,Button } from '@mui/material';
import SharedLayout from './SharedLayout';
import ImageUpload from '../ImageUpload';

const CompanyProfile = () => {
    const rightContent = (
        <Box>
            <ImageUpload label="Upload Logo" />
        </Box>
    );

    return (
        <>
            <SharedLayout rightContent={rightContent}>
            <Typography variant="h2" align="center" gutterBottom>
                Company Profile
            </Typography>
                <TextField label="Name" fullWidth margin="normal" />
                <TextField label="Email" fullWidth margin="normal" />
                <TextField label="Website" fullWidth margin="normal" />
                <TextField label="Contact" fullWidth margin="normal" />
                <TextField label="Address" fullWidth margin="normal" />
                <TextField label="Description" fullWidth margin="normal" multiline rows={4} />
                <Box sx={{textAlign: "center", mt: 4}}
                ><Button color="secondary" variant="outlined" label="Upload Profile">Update</Button></Box>
            </SharedLayout>
        </>
    );
};

export default CompanyProfile;
