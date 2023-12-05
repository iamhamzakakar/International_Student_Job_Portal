import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Grid, FilledInput, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton, Snackbar } from '@mui/material';
import { Close as CloseButton } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
import { UserContext } from "../UserContext/UserContext";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const JobPost = ({ open, setOpen }) => {
    const { user, isLoading } = useContext(UserContext);
    const [isPosting, setIsPosting] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '' });


    const skills = [
        "JavaScript",
        "React",
        "Node",
        "Html",
        "MongoDb",
        "SQL"
    ];

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
        experience: '',
        shift: '',
        qualification: '',
        skills: [], // Updated to include skills
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

    const handleSkillsChange = (event) => {
        const selectedSkills = Array.from(event.target.value);
        setJobData((prevState) => ({
            ...prevState,
            skills: selectedSkills,
        }));
    };

    const handlePostJob = async () => {
        if (!jobData.title.trim()) {
            setSnackbar({ open: true, message: 'Add Post Name' });
            return;
        }
        if (jobData.type === 'job-type' || !jobData.type.trim()) {
            setSnackbar({ open: true, message: 'Select Job Type' });
            return;
        }
        if (jobData.nature === 'job-nature' || !jobData.nature.trim()) {
            setSnackbar({ open: true, message: 'Select Job Nature' });
            return;
        }
        if (jobData.shift === 'shift' || !jobData.shift.trim()) {
            setSnackbar({ open: true, message: 'Select Working Shift' });
            return;
        }
        if (!jobData.description.trim()) {
            setSnackbar({ open: true, message: 'Add Job Description' });
            return;
        }
        if (!jobData.experience.trim()) {
            setSnackbar({ open: true, message: 'Add Job Experience' });
            return;
        }
        
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
                formData.append('experience', jobData.experience);
                formData.append('qualification', jobData.qualification);
                formData.append('shift', jobData.shift);
                jobData.skills.forEach(skill => {
                    formData.append('skills[]', skill);
                });

                const response = await fetch('http://127.0.0.1:8080/api/post-job', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    toast.success('Job posted successfully!');
                    handleClose();
                    if (data.message) {
                        handleClose();
                        toast.error(data.message || 'An error occurred');
                    } else {
                        toast.error(data.message || 'An error occurred');
                    }
                    console.log('Job posted successfully!');
                    setSnackbar({ open: true, message: 'Job posted successfully!' });
                } else {
                    // Handle error response
                    const errorData = await response.json();
                    toast.error(errorData.message || 'Failed to post job');
                }
            } catch (error) {
                toast.error('An error occurred while posting the job');
                console.error('Error posting job:', error);
            } finally {
                setIsPosting(false);
            }
            
        }, 3000);
    };

    return(
        <>
        <Dialog open={open} fullWidth>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => setSnackbar({ open: false, message: '' })}
                message={snackbar.message}
            />
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
                            <MenuItem value='Part time'>Part time</MenuItem>
                            <MenuItem value='Contract'>Contract</MenuItem>
                            <MenuItem value='Full time'>Full time</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <Select variant="filled" fullWidth disableUnderline defaultValue={"job-nature"}
                                onChange={(e) => handleInputChange('nature', e.target.value)}

                        >
                            <MenuItem value='job-nature'>Select Job Nature</MenuItem>
                            <MenuItem value='Remote'>Remote</MenuItem>
                            <MenuItem value='In Office'>In-Office</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Job Link"  disableUnderline fullWidth
                                     onChange={(e) => handleInputChange('link', e.target.value)}

                        ></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Experience"  disableUnderline fullWidth
                                     onChange={(e) => handleInputChange('experience', e.target.value)}

                        ></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Qualification"  disableUnderline fullWidth
                                     onChange={(e) => handleInputChange('qualification', e.target.value)}

                        ></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            defaultValue={"skills"}
                            variant="filled"
                            fullWidth
                            disableUnderline
                            multiple
                            value={jobData.skills}
                            onChange={handleSkillsChange}
                        >
                            <MenuItem disabled value="skills">Select Skills</MenuItem>
                            {skills.map((skill) => (
                                <MenuItem key={skill} value={skill}>
                                    {skill}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <Select variant="filled" fullWidth disableUnderline defaultValue={"shift"}
                                onChange={(e) => handleInputChange('shift', e.target.value)}

                        >
                            <MenuItem value='shift'>Select Working Shift</MenuItem>
                            <MenuItem value='Morning'>Morining</MenuItem>
                            <MenuItem value='Evening'>Evening</MenuItem>
                        </Select>
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
