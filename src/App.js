import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Header from './components/Header';
import AIProductionsPage from './components/AIProductionsPage';
import AdvertisementsPage from './components/AdvertisementsPage';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai-productions" element={<AIProductionsPage />} />
          <Route path="/advertisements" element={<AdvertisementsPage />} />
          {/* Define additional routes if necessary */}
        </Routes>
        <Footer />
      </Router>
      {/* Place Footer here if it's consistent across all pages */}
    </ThemeProvider>
  );
}

export default App;
