import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import client from '@/lib/mongoClient';

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Save to MongoDB without a model
  try {
    await client.connect();
    const db = client.db();
    await db.collection('contacts').insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });
  } catch (dbErr) {
    console.error('DB save error:', dbErr);
    // Still try to send email even if DB fails
  }

  // Send email notification
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: subject,
      text: message,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
  } catch (emailErr) {
    console.error('Email send error:', emailErr);
  }

  return NextResponse.json({ success: true });
}
