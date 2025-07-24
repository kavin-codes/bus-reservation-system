import nodemailer from 'nodemailer';
import fs from 'fs';

export const sendInvoiceEmail = async (ticket, invoicePath) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'example@gmail.com', // 🔹 Replace with your email
            pass: 'xxxx xxxx xxxx'   // 🔹 Use an app password or secure method
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: ticket.email,
        subject: 'Your Bus Ticket Invoice',
        text: `Hello ${ticket.passengerName},\n\nPlease find your invoice attached.\n\nThank you!`,
        attachments: [{ filename: 'invoice.pdf', path: invoicePath }]
    };

    return transporter.sendMail(mailOptions);
};
