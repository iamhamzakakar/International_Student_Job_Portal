import React from 'react';
import { Box, Container, TextField, Button, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '../Components/NavBar/NavBar';

const Contact = () => {
    return (
      <>
        <NavBar/>
        <CssBaseline/>
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: 'url("https://images.pexels.com/photos/6814859/pexels-photo-6814859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Container maxWidth="sm">
                <Box
                    sx={{
                        backdropFilter: 'blur(10px)',
                        backgroundColor: 'rgba(212, 234, 247, 0.4)',
                        padding: '40px',
                        borderRadius: '10px',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h4" gutterBottom>Contact Us</Typography>
                    <form>
                        <TextField label="Name" variant="outlined" fullWidth margin="normal" />
                        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
                        <TextField label="Message" variant="outlined" fullWidth margin="normal" multiline rows={4} />
                        <Button variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                            Send Message
                        </Button>
                    </form>
                </Box>
            </Container>
        </Box>
      </>
    );
};

export default Contact;
