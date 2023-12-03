import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Grid, FilledInput, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton } from '@mui/material';
import { Close as CloseButton } from '@mui/icons-material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
import { UserContext } from "../UserContext/UserContext";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const JobPost = ({ open, setOpen }) => {
    const { user, isLoading } = useContext(UserContext);
    const [isPosting, setIsPosting] = useState(false);

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    const company_id = user ? user.id : null;
    const [jobData, setJobData] = useState({
        title: '',
        type: '',
        nature: '',
        link: '',
        description: '',
        company_id: null,
    });
    useEffect(() => {
        if (user) {
            setJobData(prevState => ({
                ...prevState,
                company_id: user.id
            }));
        }
    }, [user]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (key, value) => {
        setJobData({
            ...jobData,
            [key]: value,
        });
    };



    const handlePostJob = async () => {
        setIsPosting(true);

        setTimeout(async () => {
        try {
            const formData = new FormData();
            formData.append('title', jobData.title);
            formData.append('type', jobData.type);
            formData.append('nature', jobData.nature);
            formData.append('link', jobData.link);
            formData.append('description', jobData.description);
            formData.append('company_id', jobData.company_id);

            const response = await fetch('http://127.0.0.1:8080/api/post-job', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                if (data.message) {
                    handleClose();
                    toast.error(data.message || 'An error occurred');
                } else {
                    toast.error(data.message || 'An error occurred');
                }
                console.log('Job posted successfully!');
            } else {
                // Handle error response
                console.error('Failed to post job:', response.statusText);
            }
        } catch (error) {
            console.error('Error posting job:', error);
        }finally {
            setIsPosting(false);

        }
        }, 3000);
    };

    return(
        <>
        <Dialog open={open} fullWidth>
            <DialogTitle>
                <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                    Post Job
                    <IconButton onClick={handleClose}>
                        <CloseButton/>
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput  placeholder="Post Job *" disableUnderline fullWidth
                                      onChange={(e) => handleInputChange('title', e.target.value)}

                        ></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <Select disableUnderline  variant="filled" defaultValue={"job-type"} fullWidth
                                onChange={(e) => handleInputChange('type', e.target.value)}
                        >
                            <MenuItem value='job-type'>Select Job Type</MenuItem>
                            <MenuItem value='part-time'>Part time</MenuItem>
                            <MenuItem value='contract'>Contract</MenuItem>
                            <MenuItem value='full-time'>Full time</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <Select variant="filled" fullWidth disableUnderline defaultValue={"job-nature"}
                                onChange={(e) => handleInputChange('nature', e.target.value)}

                        >
                            <MenuItem value='job-nature'>Select Job Nature</MenuItem>
                            <MenuItem value='remote'>Remote</MenuItem>
                            <MenuItem value='in-office'>In-Office</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Job Link"  disableUnderline fullWidth
                                     onChange={(e) => handleInputChange('link', e.target.value)}

                        ></FilledInput>
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput  placeholder="Job Description" disableUnderline fullWidth multiline rows={4}
                                      onChange={(e) => handleInputChange('description', e.target.value)}
                        ></FilledInput>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Box width='100%' display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography variant="caption" color={'secondary.main'}>Required Fields *</Typography>
                    <Button variant="contained" disableElevation onClick={handlePostJob}>
                        Post Job
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isPosting}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
            );

};
export default JobPost;
