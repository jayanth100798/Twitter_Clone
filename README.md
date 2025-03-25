# Twitter Clone

A modern Twitter clone built with React, Node.js, and MongoDB.

## Features
- User authentication (signup/login)
- Tweet creation and deletion
- Like and retweet functionality
- Follow/unfollow users
- User profiles with bio and profile picture
- Real-time tweet updates using Socket.io
- Responsive design using Material-UI
- Redux for state management
- Protected routes and authentication middleware

## Tech Stack
- Frontend: React.js, Redux, Material-UI
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- Real-time updates: Socket.io
- State Management: Redux Toolkit
- Routing: React Router

## Project Structure
```
Twitter_Clone/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── api/          # API configuration and socket setup
│   │   └── store/        # Redux store and slices
│   └── package.json      # Frontend dependencies
│
├── server/                # Backend Node.js/Express application
│   ├── controllers/      # Request handlers
│   ├── middleware/       # Custom middleware
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   └── server.js        # Main server file
│
├── .gitignore            # Git ignore file
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. Create a .env file in the server directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development servers:
   ```bash
   # Start server
   cd server
   npm run dev

   # Start client
   cd ../client
   npm start
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Available Scripts

In the client directory, you can run:

### `npm start`
Runs the app in development mode.

### `npm build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in the interactive watch mode.

## API Endpoints

### Authentication
- POST /api/auth/register - Register new user
- POST /api/auth/login - Login user
- GET /api/auth/user - Get current user data

### Tweets
- POST /api/tweets - Create new tweet
- GET /api/tweets - Get all tweets
- DELETE /api/tweets/:id - Delete tweet
- POST /api/tweets/:id/like - Like tweet
- POST /api/tweets/:id/retweet - Retweet

### Users
- GET /api/users/:username - Get user profile
- POST /api/users/follow - Follow user
- POST /api/users/unfollow - Unfollow user

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.
