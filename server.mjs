import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static(__dirname));

// Import Routes (move imports before using them)
import ticketRoutes from './routes/ticketRoutes.mjs';
import busRoutes from './routes/busRoutes.mjs';
import Ticket from './models/Ticket.js';  // Ensure the correct extension

// Routes
app.use('/api', ticketRoutes);
app.use('/api', busRoutes);

// ✅ Default Route: Serve p1.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'p1.html'));
});

// ✅ Route to Get Booked Seats
app.get('/api/booked-seats', async (req, res) => {
    try {
        const tickets = await Ticket.find();
        const bookedSeats = tickets.flatMap(ticket => ticket.selectedSeats);
        res.status(200).json(bookedSeats);
    } catch (error) {
        console.error('❌ Failed to fetch booked seats:', error);
        res.status(500).json({ error: 'Failed to fetch booked seats' });
    }
});

// ✅ Improved MongoDB Connection Handling
const mongoURI = 'mongodb://localhost:27017/bus-booking';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✅ MongoDB Connected Successfully'))
    .catch((err) => {
        console.error('❌ MongoDB Connection Error:', err);
        process.exit(1); // Stop the server if DB connection fails
    });

// ✅ Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
