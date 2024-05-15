import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f', // Vibrant red for accents
    },
    background: {
      default: '#121212', // Dark grey for background
      paper: '#1e1e1e', // Slightly lighter grey for elements like cards and paper
    },
    text: {
      primary: '#ffffff', // White text for readability on the dark background
      secondary: '#a5a5a5', // Light grey for less important text
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700, // Assuming a bold weight for section headers
    },
    // other typography settings as needed...
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 16, // Adjust the padding to match the design
          "&:last-child": {
            paddingBottom: 16,
          },
        },
      },
    },
    // ... other component overrides
  },
  // Other theme overrides as needed...
});

export default theme;
