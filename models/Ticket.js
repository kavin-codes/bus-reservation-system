import mongoose from 'mongoose';

// Schema for booking tickets
const ticketSchema = new mongoose.Schema({
    busType: String,
    busName: String,
    fromAddress: String,
    toAddress: String,
    travelDate: String,
    passengerName: String,
    email: String,
    contactNumber: String,
    numSeats: Number,
    selectedSeats: [Number],
    bookingTime: { type: Date, default: Date.now },
    paymentStatus: { type: String, default: 'Pending' }  // ✅ Add this field
});

// Export model
const Ticket = mongoose.model('Ticket', ticketSchema);
export default Ticket;
