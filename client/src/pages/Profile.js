import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Avatar,
  Box,
  Button,
  Divider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        {/* Profile Header */}
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Avatar
                src={user.profilePicture}
                sx={{ width: 120, height: 120 }}
              />
            </Grid>
            
            <Grid item xs={12} md={9}>
              <Typography variant="h4" gutterBottom>
                {user.name}
              </Typography>
              
              <Typography variant="h6" color="textSecondary" gutterBottom>
                @{user.username}
              </Typography>
              
              {user.bio && (
                <Typography variant="body1" paragraph>
                  {user.bio}
                </Typography>
              )}
              
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <Button variant="outlined" onClick={() => navigate('/edit-profile')}>
                  Edit Profile
                </Button>
                <Button variant="outlined" onClick={() => navigate('/settings')}>
                  Settings
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Stats */}
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="h6" align="center">
                {user.followers.length}
              </Typography>
              <Typography variant="body2" align="center">
                Followers
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" align="center">
                {user.following.length}
              </Typography>
              <Typography variant="body2" align="center">
                Following
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" align="center">
                {user.tweets.length}
              </Typography>
              <Typography variant="body2" align="center">
                Tweets
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Tweets Section */}
        <Typography variant="h6" gutterBottom>
          Tweets
        </Typography>
        
        <Divider sx={{ my: 2 }} />
        
        {/* Tweets will be rendered here */}
      </Box>
    </Container>
  );
};

export default Profile;
