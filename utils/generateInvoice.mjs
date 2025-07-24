import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

export const generateInvoice = (ticket) => {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument();
        const filePath = path.join('invoices', `invoice-${ticket._id}.pdf`);

        const writeStream = fs.createWriteStream(filePath);
        doc.pipe(writeStream);

        // Invoice Header
        doc.fontSize(20).text('Bus Ticket Invoice', { align: 'center' });
        doc.moveDown();

        // Ticket Details
        doc.fontSize(12).text(`Passenger: ${ticket.passengerName}`);
        doc.text(`Bus: ${ticket.busName}`);
        doc.text(`Travel Date: ${ticket.travelDate}`);
        doc.text(`Seats: ${ticket.numSeats}`);
        doc.text(`Total Amount: $${ticket.numSeats * 20}`);
        doc.text(`Payment Status: ${ticket.paymentStatus}`);
        doc.moveDown();

        doc.text('Thank you for booking with us! ', { align: 'center' });

        doc.end();

        writeStream.on('finish', () => resolve(filePath));
        writeStream.on('error', (err) => reject(err));
    });
};
