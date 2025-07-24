import express from 'express';
import mongoose from 'mongoose'; // ✅ Added mongoose to validate ObjectId
import Ticket from '../models/Ticket.js';
import { generateInvoice } from '../utils/generateInvoice.mjs'; // ✅ PDF Invoice Generation
import { sendInvoiceEmail } from '../utils/sendEmail.js'; // ✅ Email Sending

const router = express.Router();

// ✅ POST: Book a Ticket
router.post('/book', async (req, res) => {
    try {
        const newTicket = new Ticket(req.body);
        await newTicket.save();
        console.log("✅ Ticket booked:", newTicket);
        res.status(201).json({ message: 'Ticket booked successfully!', ticket: newTicket });
    } catch (error) {
        console.error("❌ Error booking ticket:", error);
        res.status(400).json({ error: error.message });
    }
});

// ✅ GET: Fetch All Tickets
router.get('/tickets', async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.status(200).json(tickets);
    } catch (error) {
        console.error("❌ Error fetching tickets:", error);
        res.status(400).json({ error: error.message });
    }
});

// ✅ GET: Fetch Booking History
router.get('/tickets/history/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const tickets = await Ticket.find({ email });
        if (!tickets.length) {
            return res.status(404).json({ message: 'No booking history found for this email.' });
        }
        res.status(200).json(tickets);
    } catch (error) {
        console.error("❌ Error fetching booking history:", error);
        res.status(500).json({ error: error.message });
    }
});

// ✅ DELETE: Cancel a Ticket by ID
router.delete('/tickets/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid Ticket ID' });
        }

        const deletedTicket = await Ticket.findByIdAndDelete(id);
        if (!deletedTicket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        console.log("✅ Ticket cancelled:", deletedTicket);
        res.status(200).json({ message: 'Booking cancelled successfully!' });
    } catch (error) {
        console.error("❌ Error cancelling ticket:", error);
        res.status(500).json({ error: error.message });
    }
});

// ✅ PATCH: Update Payment Status to "Paid" & Send Invoice
router.patch('/tickets/:id/pay', async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid Ticket ID' });
        }

        const updatedTicket = await Ticket.findByIdAndUpdate(
            id,
            { paymentStatus: 'Paid' },
            { new: true }
        );

        if (!updatedTicket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }

        console.log("✅ Payment successful for ticket:", updatedTicket);

        try {
            // ✅ Generate PDF Invoice
            const invoicePath = await generateInvoice(updatedTicket);

            // ✅ Send Email with Invoice
            await sendInvoiceEmail(updatedTicket, invoicePath);
            console.log("✅ Invoice sent successfully to:", updatedTicket.email);
        } catch (emailError) {
            console.error("❌ Error sending invoice email:", emailError);
        }

        res.status(200).json({ message: 'Payment successful & invoice sent!', ticket: updatedTicket });
    } catch (error) {
        console.error("❌ Payment update error:", error);
        res.status(500).json({ error: error.message });
    }
});

// ✅ NEW: Check MongoDB Connection
router.get('/db-check', async (req, res) => {
    try {
        await mongoose.connection.db.admin().ping();
        console.log("✅ MongoDB connection verified");
        res.status(200).json({ message: "MongoDB is connected!" });
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        res.status(500).json({ error: "MongoDB is not connected" });
    }
});

export default router;
