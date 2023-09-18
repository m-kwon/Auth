import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => res.send('Server is ready'));

app.listen(port, () => console.log(`Server started on port ${port}`));

// Register a user                   | POST /api/users
// Authenticate a user and get token | POST /api/users/auth
// Logout user and clear cookie      | POST /api/users/logout
// Get user profile                  | GET  /api/users/profile
// Update profile                    | PUT  /api/users/profile