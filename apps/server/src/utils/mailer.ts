// utils/mailer.ts
import nodemailer from "nodemailer";


// 🔍 Debug env values
console.log("SMTP user:", process.env.OUTLOOK_USER);
console.log("SMTP pass:", process.env.OUTLOOK_PASS ? "******" : "MISSING");

export const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // STARTTLS
  auth: {
    user: process.env.OUTLOOK_USER, // e.g. dein.peter@petbowe.com.ph
    pass: process.env.OUTLOOK_PASS, // app password or actual password
  },
});
