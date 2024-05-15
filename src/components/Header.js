import React, { useState } from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Link as RouterLink } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';



const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLoginClick = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  return (
    <>
      <AppBar position="static" sx={{ background: '#212121', padding: '8px 0' }}>
        <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1280px', width: '100%', margin: '0 auto' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AMESABU
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" component={RouterLink} to="/">Home</Button>
            <Button color="inherit" component={RouterLink} to="/ai-productions">AI Productions</Button>
            <Button color="inherit" component={RouterLink} to="/advertisements">Advertisements</Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleLoginClick} color="inherit">
              <AccountCircleIcon />
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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Login Dialog */}
      <Dialog fullScreen={fullScreen} open={isLoginOpen} onClose={handleLoginClose}>
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Login to Continue
          <IconButton
            aria-label="close"
            onClick={handleLoginClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              paddingBottom: 4,
            }}
          >
            <Button
              variant="outlined"
              startIcon={<MailOutlineIcon />}
              fullWidth
            >
              Login with Email
            </Button>
            <Button
              variant="outlined"
              startIcon={<VpnKeyIcon />}
              fullWidth
            >
              Login with OTP
            </Button>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                marginTop: 2,
              }}
            >
              <PersonAddIcon />
              <Typography variant="body1">
                New user? Sign up to Amesabu to start enjoying content
              </Typography>
              <Button color="primary" variant="contained">
                Sign Up
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
