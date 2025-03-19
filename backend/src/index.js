import express from 'express';
import dotenv from 'dotenv';
import CookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';

import { connectDB } from './lib/db.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json()); // allow us to parse incoming JSON data
app.use(CookieParser()); // allow us to parse incoming cookie data
 
// to not have the cors error. Because the frontend and backend are on different ports.
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true, // to allow the cookie to be sent from the frontend to the backend
}));

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
    connectDB();
}); 
