import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Box, Typography, Button } from '@mui/material';
import SharedLayout from './SharedLayout';
import ImageUpload from '../ImageUpload';

const CompanyProfile = () => {
    const { id } = useParams();
    const [companyData, setCompanyData] = useState({
        name: '',
        email: '',
        website: '',
        contact: '',
        address: '',
        description: '',
    });

    useEffect(() => {
        const fetchCompanyData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8080/api/get-company/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch company data');
                }
                const data = await response.json();
                console.log(data)
                setCompanyData(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchCompanyData();
    }, [id]);

    const handleInputChange = (e) => {
        setCompanyData({ ...companyData, [e.target.name]: e.target.value });
    };

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
                <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    name="name"
                    value={companyData.name}
                    onChange={handleInputChange}
                />
                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    name="email"
                    value={companyData.email}
                    onChange={handleInputChange}
                />
                <TextField
                    label="Website"
                    fullWidth
                    margin="normal"
                    name="website"
                    value={companyData.website}
                    onChange={handleInputChange}
                />
                <TextField
                    label="Contact"
                    fullWidth
                    margin="normal"
                    name="contact"
                    value={companyData.contact}
                    onChange={handleInputChange}
                />
                <TextField
                    label="Address"
                    fullWidth
                    margin="normal"
                    name="address"
                    value={companyData.address}
                    onChange={handleInputChange}
                />
                <TextField
                    label="Description"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    name="description"
                    value={companyData.description}
                    onChange={handleInputChange}
                />
                <Box sx={{ textAlign: "center", mt: 4 }}>
                    <Button color="secondary" variant="outlined">Update</Button>
                </Box>
            </SharedLayout>
        </>
    );
};

export default CompanyProfile;
