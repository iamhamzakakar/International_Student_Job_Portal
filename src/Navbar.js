import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
    return (
        <AppBar position="static" style={{ backgroundColor: '#2E3B55' }}>
            <Toolbar>
                {/* Placeholder for the logo */}
                {/* Uncomment and replace 'LOGO_URL_HERE' with your logo's URL */}
                {/* <img src="LOGO_URL_HERE" alt="Website Logo" height={40} style={{ marginRight: '20px' }} /> */}
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Job Portal
                </Typography>
                <Button color="inherit" component={RouterLink} to="/">Home</Button>
                <Button color="inherit" component={RouterLink} to="/">Events</Button>
                <Button color="inherit" component={RouterLink} to="/">Contact Us</Button>
                <Button color="inherit" component={RouterLink} to="/open-jobs">Open Jobs</Button>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <SearchIcon />
                </IconButton>
                <Button color="inherit" component={RouterLink} to="/auth">Sign In / Sign Up</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
