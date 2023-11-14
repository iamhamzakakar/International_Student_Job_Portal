import {React} from "react";
import {Box,Button,Grid,FilledInput,Select,MenuItem,Dialog,DialogTitle,DialogContent,DialogActions, Typography,IconButton} from '@mui/material'
import {Close as CloseButton} from '@mui/icons-material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const JobPost = ({ open, setOpen }) => {
    
    const handleClose = () => {
        setOpen(false);
      };  

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
    

    return(
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
                        <FilledInput placeholder="Post Job *" disableUnderline fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <Select disableUnderline  variant="filled" defaultValue={"Full time"} fullWidth>
                            <MenuItem value='Part time'>Part time</MenuItem>
                            <MenuItem value='Contract'>Contract</MenuItem>
                            <MenuItem value='Full time'>Full time</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Company Name" disableUnderline fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Company Url" disableUnderline fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <Select variant="filled" fullWidth disableUnderline defaultValue={"Remote"}>
                            <MenuItem value='Remote'>Remote</MenuItem>
                            <MenuItem value='In Office'>In-Office</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder="Job Link" disableUnderline fullWidth></FilledInput>
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput placeholder="Job Description" disableUnderline fullWidth multiline rows={4}></FilledInput>
                    </Grid>
                </Grid>
                <Box mt={2} display="flex" flexDirection="column" alignItems="center">
                    <Typography>Upload Your Resume</Typography>
                    <Box display="flex" justifyContent="center" width="100%"> {/* Center align button */}
                        <Button component="label" variant="contained" disableElevation startIcon={<CloudUploadIcon />}>
                        Upload file
                        <VisuallyHiddenInput type="file" />
                        </Button>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Box width='100%' display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography variant="caption" color={'secondary.main'}>Required Fields *</Typography>
                    <Button variant="contained" disableElevation>Post Job</Button>
                </Box>
            </DialogActions>
        </Dialog>
    )

};
export default JobPost;