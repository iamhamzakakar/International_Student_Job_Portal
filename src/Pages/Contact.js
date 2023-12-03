import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '../Components/NavBar/NavBar';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setIsLoading(true);
        setTimeout(async () => {
        try {
            const response = await fetch('http://127.0.0.1:8080/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                const data = await response.json();
                toast.error(data.message || 'An error occurred');
            } else {
                console.error('Error:', response.statusText);

            }
        } catch (error) {
            console.error('Error:', error);

        }
        finally {
            setIsLoading(false);
                window.location.reload();
        }
        }, 3000);
    };
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
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            label="Message"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            multiline
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ marginTop: '20px' }}
                        >
                            Send Message
                        </Button>
                    </form>
                </Box>
            </Container>
        </Box>
          <Button onClick={() => setIsLoading(!isLoading)}>Toggle Backdrop</Button>
          <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={isLoading}
          >
              <CircularProgress color="inherit" />
          </Backdrop>
      </>
    );
};

export default Contact;
