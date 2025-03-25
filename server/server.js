require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const socketIo = require('socket.io');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes (to be implemented)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tweets', require('./routes/tweets'));
app.use('/api/users', require('./routes/users'));

// Create HTTP server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Socket.io setup
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('New client connected');
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  // Real-time tweet updates
  socket.on('newTweet', (tweet) => {
    io.emit('tweetCreated', tweet);
  });
});
