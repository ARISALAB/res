// netlify/functions/add-reservation.js
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const reservation = JSON.parse(event.body);

    // Έλεγχος πεδίων
    if (!reservation.name || !reservation.date || !reservation.time || !reservation.guests) {
      return { statusCode: 400, body: 'Missing required fields' };
    }

    // Αποθήκευση στο Supabase
    const { data, error } = await supabase
      .from('reservations')
      .insert([reservation]);

    if (error) throw error;

    // Ρύθμιση Gmail transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // π.χ. pandrosougarden@gmail.com
        pass: process.env.EMAIL_PASS, // App Password από Google
      },
    });

    // Κείμενο email
    const emailText = `
Νέα κράτηση στο Pandrosou Garden

Όνομα: ${reservation.name}
Ημερομηνία: ${reservation.date}
Ώρα: ${reservation.time}
Άτομα: ${reservation.guests}
Σχόλια: ${reservation.notes || 'Κανένα'}
    `;

    // Αποστολή email
    await transporter.sendMail({
      from: `"Pandrosou Garden" <${process.env.EMAIL_USER}>`,
      to: 'pandrosougarden@gmail.com',
      subject: 'Νέα Κράτηση',
      text: emailText,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Reservation saved and email sent!' }),
    };

  } catch (err) {
    console.error('Error adding reservation:', err);
    return { statusCode: 500, body: err.message };
  }
}
