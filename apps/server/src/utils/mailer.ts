import nodemailer from "nodemailer";

export function createTransporter() {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("❌ Missing EMAIL_USER or EMAIL_PASS in .env");
  }

  console.log("📨 Creating Outlook transporter with user:", process.env.EMAIL_USER);

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT), // default fallback
    secure: false, // port 465
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // sometimes needed with cPanel SSL
    },
  });

  // Verify connection at startup
  transporter.verify((error, success) => {
    if (error) {
      console.error("❌ SMTP connection failed:", error.message);
    } else {
      console.log("✅ SMTP server is ready to take messages");
    }
  });

  return transporter;
}
