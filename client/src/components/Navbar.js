import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Home, Person, Notifications, Mail, Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = true; // This will be managed by Redux

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Twitter Clone
        </Typography>
        
        {isAuthenticated ? (
          <>
            <IconButton color="inherit">
              <Home />
            </IconButton>
            <IconButton color="inherit">
              <Search />
            </IconButton>
            <IconButton color="inherit">
              <Notifications />
            </IconButton>
            <IconButton color="inherit">
              <Mail />
            </IconButton>
            <IconButton color="inherit" onClick={handleLogout}>
              <Person />
            </IconButton>
          </>
        ) : (
          <>
            <Button color="inherit" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button color="inherit" onClick={() => navigate('/register')}>
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
