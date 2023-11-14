import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Button, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const SignUp = () => {
    const paperStyle = { padding: 40, height: 'auto', width: 400, margin: "0px auto", backgroundColor: '#F8FFF9' };
    const avatarStyle = { backgroundColor: '#66b9bf' };
    const Fieldkstyle = { margin:'8px 0px'}
    const sorc = { margin: '8px 0px' };
    const [value, setValue] = useState('Student');
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
            userType: value,
            name: event.target.Name.value,
            email: value === "Student" ? event.target.Email.value : event.target.WorkEmail.value,
            university: fieldOfStudy,
            website: event.target.Website?.value,
            contactNumber: event.target.ContactNumber?.value,
            address: event.target.Address?.value,
            password: password
        };

        const response = await fetch('http://localhost:5001/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();
        if (data.message) {
            alert(data.message); // Show a success message
            // Optionally, redirect to login page
        } else {
            alert(data.error); // Show an error message
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
                                <FormControlLabel value="Student" control={<Radio />} label="Student" />
                                <FormControlLabel value="Company" control={<Radio />} label="Company" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    {/* Conditional Rendering based on Radio Button */}
                    {value === "Student" && (
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
                                    {/* Add more options as needed */}
                                </Select>
                            </FormControl>
                        </>
                    )}

                    {value === "Company" && (
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
