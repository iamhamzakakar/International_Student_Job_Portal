import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Box, Typography, FormControl, InputLabel, MenuItem, Select, Button } from '@mui/material';
import SharedLayout from './SharedLayout';
import ImageUpload from '../ImageUpload';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const StudentProfile = () => {
    const { id } = useParams();
    const [studentData, setStudentData] = useState({
        username: '',
        email: '',
        university: '',
        aboutMe: '',
        resume: null,
    });

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8080/api/get-student/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch student data');
                }
                const data = await response.json();
                setStudentData(data); // Update state with fetched data
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchStudentData();
    }, [id]);

    const handleInputChange = (e) => {
        setStudentData({ ...studentData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setStudentData({ ...studentData, resume: file });
    };

    const rightContent = (
        <Box>
            <ImageUpload label="Upload Profile Picture"/>
        </Box>
    );

    return (
        <>
            <SharedLayout rightContent={rightContent}>
                <Typography variant="h2" align="center" gutterBottom>
                    Student Profile
                </Typography>
                <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    name="name"
                    value={studentData.username}
                    onChange={handleInputChange}
                />
                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    name="email"
                    value={studentData.email}
                    onChange={handleInputChange}
                />
                <FormControl fullWidth sx={{ mt: 1, pt: 1 }}>
                    <InputLabel>University</InputLabel>
                    <Select
                        name="university"
                        value={studentData.university}
                        onChange={handleInputChange}
                    >
                        <MenuItem value="Lut">Lappeenranta–Lahti University of Technology LUT</MenuItem>
                        <MenuItem value="University of Helsinki">University of Helsinki</MenuItem>
                        <MenuItem value="OULU">University of Oulu</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    label="About Me"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    name="aboutMe"
                    value={studentData.aboutMe}
                    onChange={handleInputChange}
                />
                <Box mt={3} display="flex" flexDirection="column" alignItems="center">
                    <Typography>Upload Your Resume</Typography>
                    <Box display="flex" justifyContent="center" width="100%">
                        <Button component="label" variant="contained" disableElevation startIcon={<CloudUploadIcon />}>
                            Upload file
                            <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ textAlign: "center", mt: 4 }}>
                    <Button color="secondary" variant="outlined">Update</Button>
                </Box>
            </SharedLayout>
        </>
    );
};

export default StudentProfile;
