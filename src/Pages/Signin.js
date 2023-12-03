import React, { useState } from 'react';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
    const navigate = useNavigate();
    const paperStyle = { padding: 40, height: '60vh', width: 400, margin: "80px auto", backgroundColor: '#F8FFF9' };
    const avatarStyle = { backgroundColor: '#66b9bf' };
    const btnstyle = { margin: '8px 0px' };
    const Fieldkstyle = { margin: '8px 0px' };
    const sorc = { margin: '8px 0px' };
    const [value, setValue] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            role: value,
            email: event.target.email?.value,
            password: event.target.password?.value,
        };

        const response = await fetch('http://127.0.0.1:8080/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(userData),
        });

        const data = await response.json();
        if (data.accessToken) {
            // Store the token and redirect user or update UI
            localStorage.setItem('authToken', data.accessToken);
            const jsonData = JSON.stringify(data);
            localStorage.setItem('userData', jsonData);
            navigate("/home");
            window.location.reload();
        } else {
            toast.error(data.message || 'An error occurred');
        }
    };


    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Grid className="background-gradient">
            <Paper elevation={10} style={paperStyle}>
                <form onSubmit={handleSubmit}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <LockOpenRoundedIcon />
                        </Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    {/* Radio for company and student */}
                    <Grid align="center">
                        <FormControl>
                            <FormLabel style={sorc}>Login in as a:</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={value}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="student" control={<Radio />} label="Student" />
                                <FormControlLabel value="company" control={<Radio />} label="Company" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <TextField id="email" label="Email" variant="filled" style={Fieldkstyle} fullWidth required />
                    <TextField id="password" label="Enter Password" variant="filled" type='password' fullWidth required />
                    <Button type="submit" color="primary" variant='contained' style={btnstyle} fullWidth>Sign In</Button>
                    <Typography>
                        <Link href="#basics">Forgot Password?</Link>
                    </Typography>
                    <Typography>
                        Do you have an Account?
                        <RouterLink to="/signup"> Sign up</RouterLink>
                    </Typography>
                </form>
                <ToastContainer />
            </Paper>
        </Grid>
    );
};

export default Signin;
