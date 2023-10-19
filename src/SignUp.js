import { Box, Button, Container, FormControlLabel, Link, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React from 'react';

function SignUp() {
    return (
        <Container component="main" maxWidth="xs" style={{ backgroundColor: '#FFFFFF', height: '100vh' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '8vh',
                    padding: '24px',
                    borderRadius: '5px',
                    backgroundColor: '#f7f7f7',
                    boxShadow: '0 0 10px rgba(0,0,0,0.05)'
                }}
            >
                <Typography component="h1" variant="h5" gutterBottom color="textPrimary">
    Create Account
</Typography>

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                />
                <RadioGroup row aria-label="type" name="row-radio-buttons-group" style={{ justifyContent: 'center', margin: '16px 0' }}>
    <FormControlLabel 
        value="student" 
        control={<Radio color="primary" />} 
        label={<Typography color="textPrimary">Student</Typography>} 
    />
    <FormControlLabel 
        value="company" 
        control={<Radio color="primary" />} 
        label={<Typography color="textPrimary">Company</Typography>} 
    />
</RadioGroup>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{ margin: '24px 0 16px 0' }}
                >
                    Sign Up
                </Button>
                <Link href="/auth" variant="body2">
                    Already have an account? Sign In
                </Link>

            </Box>
        </Container>
    );
}

export default SignUp;
