// netlify/functions/admin-reservations.js
import { createClient } from '@supabase/supabase-js';

export const handler = async (event) => {
  // Επιτρέπουμε μόνο GET
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  // PIN προστασία
  const adminPin = process.env.ADMIN_PIN || '2468';
  const providedPin = event.headers['x-admin-pin'];
  if (providedPin !== adminPin) {
    return {
      statusCode: 403,
      body: JSON.stringify({ error: 'Forbidden' })
    };
  }

  try {
    // Σύνδεση με Supabase
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE
    );

    // Ανάγνωση κρατήσεων ταξινομημένες
    const { data, error } = await supabase
      .from('reservations')
      .select('*')
      .order('date', { ascending: true })
      .order('time', { ascending: true });

    if (error) throw error;

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
