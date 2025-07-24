import express from 'express';

const router = express.Router();

// Dummy bus data
const buses = [
    { id: 1, name: "Express Travels", time: "08:00 AM" },
    { id: 2, name: "City Link", time: "10:00 AM" },
    { id: 3, name: "Green Line", time: "02:00 PM" },
    { id: 4, name: "Red Express", time: "06:00 PM" }
];

// API to get available buses based on selected time
router.get('/available-buses', (req, res) => {
    const selectedTime = req.query.time;
    const availableBuses = buses.filter(bus => bus.time === selectedTime);

    res.json({ buses: availableBuses });
});

export default router;
