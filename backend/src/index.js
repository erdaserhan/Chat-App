import express from 'express';
import dotenv from 'dotenv';
import CookieParser from 'cookie-parser';

import authRoutes from './routes/auth.route.js';

import { connectDB } from './lib/db.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json()); // allow us to parse incoming JSON data
app.use(CookieParser()); // allow us to parse incoming cookie data

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
    connectDB();
}); 
