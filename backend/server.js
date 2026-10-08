require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: '*' })); // For production, restrict this to frontend URL
app.use(express.json());

// Basic rate limiting concept (simple object store for IPs, reset every hour)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const currentTime = Date.now();
  
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, firstRequest: currentTime });
    return next();
  }
  
  const record = rateLimitMap.get(ip);
  if (currentTime - record.firstRequest > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, firstRequest: currentTime });
    return next();
  }
  
  if (record.count >= MAX_REQUESTS) {
    return res.status(429).json({ error: 'Too many requests, please try again later.' });
  }
  
  record.count++;
  next();
};

// Clean up old rate limit records periodically
setInterval(() => {
  const currentTime = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (currentTime - record.firstRequest > RATE_LIMIT_WINDOW) {
      rateLimitMap.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW);

// Endpoint to handle contact form
app.post('/api/contact', rateLimiter, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    if (message.length > 5000) {
      return res.status(400).json({ error: 'Message is too long' });
    }

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Setup email data
    const mailOptions = {
      from: `"${name.trim()}" <${process.env.EMAIL_USER}>`,
      replyTo: email.trim(),
      to: process.env.CONTACT_RECEIVER || 'ayyubihamza877@gmail.com',
      subject: `Portfolio Contact: ${subject.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nSubject: ${subject.trim()}\n\nMessage:\n${message.trim()}`
    };

    // Send email
   // Test Gmail SMTP connection and send email
console.log('Attempting to send email...');
console.log('Email user:', process.env.EMAIL_USER);
console.log('Receiver:', process.env.CONTACT_RECEIVER);

try {
  await transporter.verify();
  console.log('Gmail SMTP authentication successful');

  const info = await transporter.sendMail(mailOptions);

  console.log('Email sent successfully:', info.messageId);

  return res.status(200).json({
    success: true,
    message: 'Message sent successfully'
  });
} catch (smtpError) {
  console.error('GMAIL SMTP ERROR');
  console.error('Code:', smtpError.code);
  console.error('Command:', smtpError.command);
  console.error('Response:', smtpError.response);
  console.error('Message:', smtpError.message);

  return res.status(500).json({
    error: 'Failed to send message'
  });
}
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
