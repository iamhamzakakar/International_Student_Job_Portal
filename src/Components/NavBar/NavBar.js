import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeProvider} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import theme from '../../theme/theme';
import CssBaseline from '@mui/material/CssBaseline';


const NavBar = () => {
    
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="sticky" style={{ backgroundColor: 'secondary.main' }}>
            <Toolbar disableElevation>
                <Typography variant="h6" style={{ flexGrow: 1, color: 'background.default' }}>
                    StudyFinJourney
                </Typography>
                <Button color="inherit" component={NavLink} to="/" exact style={({ isActive }) => ({
                    color: isActive ? '#1d1c1c' : 'inherit',
                    backgroundColor: isActive ? '#71c4ef' : 'transparent',
                  })}>
                    Home
                </Button>
                <Button color="inherit" component={NavLink} to="/About" style={({isActive})=>({color: isActive ? '#1d1c1c' : 'inherit',
                    backgroundColor: isActive ? '#71c4ef' : 'transparent',})}>
                    About
                </Button>
                <Button color="inherit" component={NavLink} to="/Contact" activeClassName="active">
                    Contact
                </Button>
                <Button color="inherit" component={NavLink} to="/JobList" 
                    style={({isActive})=>({color: isActive ? '#1d1c1c' : 'inherit',
                    backgroundColor: isActive ? '#71c4ef' : 'transparent',})}>
                    Job Listing
                </Button>
                <Button color="inherit" component={NavLink} to="/Signin" activeClassName="active">
                    Sign in / Sign Up
                </Button>
            </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
};

export default NavBar;
