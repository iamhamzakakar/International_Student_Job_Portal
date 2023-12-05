import React, { useState } from "react";
import { Box, Button, Select, MenuItem } from "@mui/material";
import axios from 'axios'; // Make sure to install axios

export default ({ onSearch }) => {
    const [jobType, setJobType] = useState('');
    const [jobNature, setJobNature] = useState('');

    const handleInputChange = (field, value) => {
        if (field === 'type') {
            setJobType(value);
        } else if (field === 'nature') {
            setJobNature(value);
        }
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8080/api/jobs/search', {
                params: { type: jobType, nature: jobNature }
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    return (
        <Box p={2} mt={-5} mb={2} sx={{ width: '100%', bgcolor: 'background.default', display: 'flex', boxShadow: '0px 1px 5px rgba(0,0,0,0.1)', borderRadius: '5px', "& > *": { flex: 1, height: "45px", margin: "8px" } }}>
            <Select disableUnderline variant="filled" fullWidth
                    value={jobType}
                    onChange={(e) => handleInputChange('type', e.target.value)}
            >
                <MenuItem value=''>Select Job Type</MenuItem>
                <MenuItem value='Part time'>Part time</MenuItem>
                <MenuItem value='Contract'>Contract</MenuItem>
                <MenuItem value='Full time'>Full time</MenuItem>
            </Select>

            <Select variant="filled" fullWidth disableUnderline
                    value={jobNature}
                    onChange={(e) => handleInputChange('nature', e.target.value)}
            >
                <MenuItem value=''>Select Job Nature</MenuItem>
                <MenuItem value='Remote'>Remote</MenuItem>
                <MenuItem value='In Office'>In-Office</MenuItem>
            </Select>

            <Button variant="contained" disableElevation onClick={() => onSearch(jobType, jobNature)}>
                Search
            </Button>
        </Box>
    );
};
