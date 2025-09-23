import nodemailer from "nodemailer";

export function createTransporter() {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    throw new Error("❌ Missing GMAIL_USER or GMAIL_PASS in .env");
  }

  console.log("📨 Creating Gmail transporter with user:", process.env.GMAIL_USER);

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // STARTTLS
    auth: {
      user: process.env.GMAIL_USER, // Server token
      pass: process.env.GMAIL_PASS, // Same token again
    },
  });
}
