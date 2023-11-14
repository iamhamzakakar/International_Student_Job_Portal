// theme.js
import { createTheme } from '@mui/material';

const theme = createTheme({
  // Add your theme customizations here
  palette: {
    primary: {
      light: '#d4eaf7',
      main: '#b6ccd8',
      dark: '#3b3c3d',
      banner: '#cccbc8'
    },
    secondary: {
      light: '#71c4ef',
      main: '#00668c',
    },
    text: {
      primary: '#1d1c1c',
      secondary: '#313d44',
    },
    background: {
      default: '#fffefb',
      paper: '#f5f4f1',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Define global styles here
        '.active': {
          // Your active link styles
          backgroundColorcolor: '#1d1c1c', // Example: Change text color for active links
          fontWeight: 'bold', // Example: Make active link bold
          // Add more styles as needed
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '12px 36px',
          fontsize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
        },
        contained: {
          // This will change the background color for the contained button
          backgroundColor: '#71c4ef', // Replace with your desired color
          '&:hover': {
            backgroundColor: '#d4eaf7', // Replace with your desired hover color
          },
        },
        outlined: {
          borderRadius: '40px',
          borderRadiusColor: '#1d1c1c',
          color: '#313d44',
          backgroundColor: '#fffefb',
          padding: '8px 24px', // Increased padding to match the root style
          fontSize: '1rem', // Adjust font size as needed
        },
        sizeLarge: {
          padding: '16px 48px', // Even larger padding for large size
          fontSize: '1.25rem', // Larger font size for large size
        },
        sizeSmall: {
          padding: '8px 24px', // Smaller padding for small size
          fontSize: '0.875rem', // Smaller font size for small size
        },
        
      },
    },
    MuiSelect: {
      styleOverrides: {
        '.active': {
          // Your active link styles
          color: '#e11249', // Example: Change text color for active links
          fontWeight: 'bold', // Example: Make active link bold
          // Add more styles as needed
        },
        filled: {
          padding: '15px 0 15px 15px',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        input: {
          height: '49px',
          padding: '0px 0 0 10px',
        },
      },
    },
  },
});
export default theme;
