import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Button, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";


const SignUp = () => {
    const navigate = useNavigate();
    const paperStyle = { padding: 40, height: 'auto', width: 400, margin: "0px auto", backgroundColor: '#F8FFF9' };
    const avatarStyle = { backgroundColor: '#66b9bf' };
    const Fieldkstyle = { margin:'8px 0px'}
    const sorc = { margin: '8px 0px' };
    const [value, setValue] = useState('student');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        if (newPassword.length < 8) {
            setPasswordError('Password should be at least 8 characters long.');
        } else if (!/[A-Z]/.test(newPassword) || !/[a-z]/.test(newPassword) || !/[0-9]/.test(newPassword)) {
            setPasswordError('Password should have a mix of uppercase, lowercase, and numbers.');
        } else {
            setPasswordError('');
        }
    };

    const getPasswordStrength = () => {
        if (password.length < 8) return "Weak";
        if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) return "Moderate";
        return "Strong";
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [fieldOfStudy, setFieldOfStudy] = useState('');

    const handleFieldOfStudyChange = (event) => {
        setFieldOfStudy(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            role: value,
            name: event.target.Name.value,
            email: value === "student" ? event.target.Email.value : event.target.WorkEmail.value,
            university: fieldOfStudy,
            website: event.target.Website?.value,
            phone: event.target.ContactNumber?.value,
            address: event.target.Address?.value,
            password: password
        };

        try {
            const response = await fetch('http://127.0.0.1:8080/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(userData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            if (data.message) {
                toast.info(data.message || 'An error occurred');
                navigate("/");
            } else {
                toast.error(data.message || 'An error occurred');
            }
        } catch (error) {
            console.error('Error during signup:', error.message);

        }
    };

    return (
        <Grid className="background-image">
            <Paper elevation={10} style={paperStyle}>
                <form onSubmit={handleSubmit}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <h2>Sign Up</h2>
                        <FormControl>
                            <FormLabel style={sorc} id="demo-controlled-radio-buttons-group">Student or Company?</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={value}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="student" control={<Radio />} label="Student" />
                                <FormControlLabel value="company" control={<Radio />} label="Company" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    {/* Conditional Rendering based on Radio Button */}
                    {value === "student" && (
                        <>
                            <TextField name="Name" id="Name" label="Name" variant="filled" style={Fieldkstyle} fullWidth required />
                            <TextField name="Email" id="Email" label="Email" variant="filled" style={Fieldkstyle} fullWidth required />
                            <FormControl fullWidth variant="filled" style={Fieldkstyle}>
                                <InputLabel>University</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={fieldOfStudy}
                                    onChange={handleFieldOfStudyChange}
                                >
                                    <MenuItem value={"Lut"}>Lappeenranta–Lahti University of Technology LUT</MenuItem>
                                    <MenuItem value={"University of Helsinki"}>University of Helsinki</MenuItem>
                                    <MenuItem value={"OULU Uni"}>University of Oulu</MenuItem>
                                </Select>
                            </FormControl>
                        </>
                    )}

                    {value === "company" && (
                        <>
                            <TextField name="Name" id="Name" label="Name" variant="filled" style={Fieldkstyle} fullWidth required />
                            <TextField name="WorkEmail" id="WorkEmail" label="Work Email" variant="filled" style={Fieldkstyle} fullWidth required />
                            <TextField name="Website" id="Website" label="Website" variant="filled" style={Fieldkstyle} fullWidth required />
                            <TextField name="ContactNumber" id="ContactNumber" label="Contact Number" variant="filled" style={Fieldkstyle} fullWidth required />
                            <TextField name="Address" id="Address" label="Address" variant="filled" style={Fieldkstyle} fullWidth required />
                        </>
                    )}

                    <TextField
                        name="Password"
                        id="Password"
                        label="Password"
                        variant="filled"
                        type='password'
                        fullWidth
                        required
                        value={password}
                        onChange={handlePasswordChange}
                        error={Boolean(passwordError)}
                        helperText={passwordError || `Strength: ${getPasswordStrength()}`}
                    />

                    <Button type="submit" color="primary" variant='contained' fullWidth>Sign Up</Button>
                </form>
                <Typography>
                    <RouterLink to="/auth">Already have an account? Sign in</RouterLink>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default SignUp;
