import React from 'react';
import { Button, Container, Typography, TextField, FormControlLabel, Checkbox, Box, Link } from '@mui/material';

function SignIn() {
    return (
        <Container maxWidth="sm" style={{ marginTop: '10%', backgroundColor: '#FFF', padding: '40px', borderRadius: '10px', boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
            <Typography variant="h4" gutterBottom align="center" color="Black">
                Welcome Back
            </Typography>
            <Typography variant="h5" gutterBottom align="center" color="Black">
                Sign in to continue
            </Typography>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
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
                autoComplete="current-password"
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                style={{ margin: '20px 0' }}
            >
                Sign In
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="#" variant="body2">
                    Forgot password?
                </Link>
                <Link href="/signup" variant="body2">
                    Create a New Account
                </Link>
            </Box>
        </Container>
    );
}

export default SignIn;
