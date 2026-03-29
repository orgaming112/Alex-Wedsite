import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import ReviewsPage from './pages/ReviewsPage';

// Color Palette
const colors = {
  navy: '#0a1628',
  copper: '#c47a3a',
  copperLight: '#e09a5a',
  cream: '#f5f0e8',
  slate: '#2a3a52',
  pipeGray: '#8a9bb0',
  white: '#ffffff',
  deepNavy: '#060e1a',
};

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: colors.navy,
    },
    secondary: {
      main: colors.copper,
    },
    background: {
      default: colors.navy,
      paper: colors.cream,
    },
    text: {
      primary: colors.white,
      secondary: colors.pipeGray,
    },
    divider: colors.copper,
  },
  typography: {
    fontFamily: '"Heebo", "Rubik", sans-serif',
    h1: {
      fontFamily: '"Rubik", sans-serif',
      fontSize: '3rem',
      fontWeight: 900,
      marginBottom: '1.5rem',
      color: colors.white,
      textAlign: 'center',
    },
    h2: {
      fontFamily: '"Rubik", sans-serif',
      fontSize: '2.5rem',
      fontWeight: 800,
      marginBottom: '1.5rem',
      color: colors.white,
      textAlign: 'center',
    },
    h3: {
      fontFamily: '"Rubik", sans-serif',
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: '1rem',
      color: colors.copper,
      textAlign: 'center',
    },
    body1: {
      fontFamily: '"Heebo", sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      color: colors.pipeGray,
    },
    body2: {
      fontFamily: '"Heebo", sans-serif',
      fontSize: '0.95rem',
      fontWeight: 400,
      color: colors.pipeGray,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          direction: 'rtl',
          scrollBehavior: 'smooth',
        },
        '@import': [
          'url("https://fonts.googleapis.com/css2?family=Rubik:wght@700;800;900&family=Heebo:wght@400;500;700&display=swap")',
        ],
        body: {
          backgroundColor: colors.navy,
          color: colors.white,
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(196, 122, 58, 0.03) 0px, rgba(196, 122, 58, 0.03) 1px, transparent 1px, transparent 50px)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: colors.copper,
          color: colors.white,
          '&:hover': {
            backgroundColor: colors.copperLight,
            boxShadow: `0 8px 16px ${colors.copper}66`,
            transform: 'translateY(-2px)',
          },
          borderRadius: '4px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.slate,
          borderRadius: '8px',
          boxShadow: `0 4px 12px ${colors.navy}40`,
          border: `1px solid ${colors.slate}`,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: colors.navy,
          }}
        >
          <Navbar />
          <Box component="main" sx={{ flex: 1, pt: 10 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/works" element={<WorksPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
            </Routes>
          </Box>
        </Box>
        <WhatsAppButton />
      </Router>
    </ThemeProvider>
  );
}

export default App;
export { colors };
