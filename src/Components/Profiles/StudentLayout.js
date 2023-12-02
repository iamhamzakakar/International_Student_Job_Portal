import React from "react";
import { TextField, Box, Typography,FormControl,InputLabel,MenuItem,Select, Button } from '@mui/material';
import SharedLayout from './SharedLayout';
import ImageUpload from '../ImageUpload';
import { useState } from "react";



const StudentProfile = () => {
    const rightContent = (
        <Box>
            <ImageUpload label="Upload Profile Picture"/>
        </Box>
    );

    const [fieldOfStudy, setFieldOfStudy] = useState('');
    const handleFieldOfStudyChange = (event) => {
        setFieldOfStudy(event.target.value);
    };


    return (
        <>
            <SharedLayout rightContent={rightContent}>
            <Typography variant="h2" align="center" gutterBottom>
                Student Profile
            </Typography>
                <TextField label="Name" fullWidth margin="normal" />
                <TextField label="Email" fullWidth margin="normal" />
                <FormControl fullWidth sx={{mt:1,pt:1}}>
                                <InputLabel>University</InputLabel>
                                <Select
                                    value={fieldOfStudy}
                                    onChange={handleFieldOfStudyChange}
                                >
                                    <MenuItem value={"Lut"}>Lappeenranta–Lahti University of Technology LUT</MenuItem>
                                    <MenuItem value={"University of Helsinki"}>University of Helsinki</MenuItem>
                                    <MenuItem value={"OULU"}>University of Oulu</MenuItem>
                                </Select>
                    </FormControl>
                <TextField label="About Me" fullWidth margin="normal" multiline rows={4} />
                <Box sx={{textAlign: "center", mt: 4}}
                ><Button color="secondary" variant="outlined" label="Upload Profile">Update</Button></Box>
            </SharedLayout>
        </>
    );
};

export default StudentProfile;
