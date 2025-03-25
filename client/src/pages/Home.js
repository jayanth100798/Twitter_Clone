import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
  Card,
  CardContent,
  CardActions,
  Avatar,
  Divider
} from '@mui/material';
import { Send, Image, VideoCall } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { addTweet } from '../../store/slices/tweetSlice';
import { socket } from '../../api/socket';

const Home = () => {
  const [tweetContent, setTweetContent] = useState('');
  const [media, setMedia] = useState('');
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleTweet = async (e) => {
    e.preventDefault();
    if (!tweetContent.trim()) return;

    try {
      const response = await fetch('http://localhost:5000/api/tweets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ content: tweetContent, media })
      });

      const data = await response.json();
      
      if (response.ok) {
        dispatch(addTweet(data));
        setTweetContent('');
        setMedia('');
        
        // Emit new tweet event to other clients
        socket.emit('newTweet', data);
      }
    } catch (error) {
      console.error('Error posting tweet:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        {/* Tweet Form */}
        <Box
          component="form"
          onSubmit={handleTweet}
          sx={{
            p: 3,
            mb: 4,
            bgcolor: 'background.paper',
            borderRadius: 1
          }}
        >
          <Typography variant="h6" gutterBottom>
            What's happening?
          </Typography>
          
          <TextField
            fullWidth
            multiline
            rows={4}
            value={tweetContent}
            onChange={(e) => setTweetContent(e.target.value)}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <IconButton color="primary">
              <Image />
            </IconButton>
            <IconButton color="primary">
              <VideoCall />
            </IconButton>
          </Box>
          
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<Send />}
            fullWidth
          >
            Tweet
          </Button>
        </Box>

        {/* Tweets Feed */}
        <Typography variant="h6" gutterBottom>
          Home
        </Typography>
        
        <Box sx={{ mt: 2 }}>
          {/* Tweets will be rendered here */}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
