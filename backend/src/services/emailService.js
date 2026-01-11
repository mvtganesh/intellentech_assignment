import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export const sendEmail = async ({ to, subject, text, html }) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
            html: html || text
        };

        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${to}`);
        return true;
    } catch (error) {
        console.error('Email sending error:', error);
        return false;
    }
};