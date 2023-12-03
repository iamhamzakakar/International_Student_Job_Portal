import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Box, Typography, Button } from '@mui/material';
import SharedLayout from './SharedLayout';
import ImageUpload from '../ImageUpload';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
import { ToastContainer } from 'react-toastify';

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
    const [logo, setLogo] = useState(null);


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
    const updateCompany = async () => {
        try {
            // Update company details
            await fetch(`http://127.0.0.1:8080/api/update-company/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(companyData),
            });

            // If a logo has been selected, upload it
            if (logo) {
                const formData = new FormData();
                formData.append('logo', logo);

                await fetch(`http://127.0.0.1:8080/api/upload-logo/${id}`, {
                    method: 'POST',
                    body: formData,
                });
            }
            toast.success("Company profile updated successfully!", {
                position: toast.POSITION.TOP_CENTER,
                onClose: () => {
                }
            });
        } catch (error) {
            console.error('Error updating company:', error);
        }
    };
    const handleInputChange = (e) => {
        setCompanyData({ ...companyData, [e.target.name]: e.target.value });
    };

    const handleLogoChange = (newLogo) => {
        console.log(newLogo)
        setLogo(newLogo);
    };


    const rightContent = (
        <Box>
            <ImageUpload label="Upload Logo" onImageSelect={handleLogoChange} />
        </Box>
    );

    return (
        <>
            <ToastContainer />
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
                    name="phone"
                    value={companyData.phone}
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
                    <Button color="secondary" variant="outlined" onClick={updateCompany}>Update</Button>
                </Box>
            </SharedLayout>
        </>
    );
};

export default CompanyProfile;
