// netlify/functions/add-reservation.js
import { createClient } from '@supabase/supabase-js';

export const handler = async (event) => {
  // Επιτρέπουμε μόνο POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    // Δεδομένα από το body
    const reservation = JSON.parse(event.body);

    // Σύνδεση στο Supabase
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE
    );

    // Εισαγωγή στον πίνακα
    const { data, error } = await supabase
      .from('reservations')
      .insert([reservation]);

    if (error) throw error;

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
