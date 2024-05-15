import React from 'react';
import { Box, Typography, IconButton, Link, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MapIcon from '@mui/icons-material/Map';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#212121', color: '#fff', padding: '16px 24px' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="body1" color="inherit">
            AMESABU
          </Typography>
          <Typography variant="caption" color="inherit">
            Copyrights Reserved 2024 © Amesabu
          </Typography>
        </Box>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="body1" color="inherit" mr={2}>
            Follow Amesabu
          </Typography>
          <IconButton color="inherit" aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Twitter">
            <TwitterIcon />
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Link href="#" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
            <MapIcon sx={{ mr: 1 }} />
            <Typography variant="caption">
              Open Maps
            </Typography>
          </Link>
          <Typography variant="caption" color="inherit">
            Amesabu Private Limited, 49 - Be.D.A Complex, 1st Floor, Near City Bus Stand, Berhampur-760001
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
