import React, {useContext, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import theme from '../../theme/theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { UserContext } from "../UserContext/UserContext";
const NavBar = () => {
    const { user } = useContext(UserContext);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="sticky" style={{ backgroundColor: 'secondary.main' }} disableElevation
            sx={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(212, 234, 247, 0.4)',
                padding: '4px',
            }}>
                <Toolbar disableElevation>
                    <Typography variant="h6" style={{ flexGrow: 1, color: 'background.default' }}>
                        StudyFinJourney
                    </Typography>
                    {/* Other navigation buttons */}
                    <Button color="inherit" component={NavLink} to="/home" exact style={({ isActive }) => ({
                        color: isActive ? '#1d1c1c' : 'inherit',
                        backgroundColor: isActive ? '#71c4ef' : 'transparent',
                    })}>
                        Home
                    </Button>
                <Button
                    color="inherit" component={NavLink} to="/JobList"
                    style={({isActive})=>({color: isActive ? '#1d1c1c' : 'inherit',
                    backgroundColor: isActive ? '#71c4ef' : 'transparent',})}>
                    Job Listing
                </Button>
                <Button color="inherit" component={NavLink} to="/Events" 
                    style={({isActive})=>({color: isActive ? '#1d1c1c' : 'inherit',
                    backgroundColor: isActive ? '#71c4ef' : 'transparent',})}>
                    Events
                </Button>
                <Button color="inherit" component={NavLink} to="/Contact" activeClassName="active">
                    Contact
                </Button>
                <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} component={NavLink} to={`/Profile/${user && user.id}`}  activeClassName="active" >Profile</MenuItem>
                        {user && user.role === 'company' && (
                        <MenuItem onClick={handleClose} component={NavLink} to={`/AppliedJobs/${user && user.id}`}  activeClassName="active" >Applied Jobs</MenuItem>
                            )}
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default NavBar;