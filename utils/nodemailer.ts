import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use TLS// Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    },
});
