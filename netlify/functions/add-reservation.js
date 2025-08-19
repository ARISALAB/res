const { createClient } = require('@supabase/supabase-js');
const nodemailer = require('nodemailer');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ message: 'Method Not Allowed' }) };
  }

  try {
    const data = JSON.parse(event.body);

    // Αποθήκευση στη Supabase
    const { error } = await supabase
      .from('reservations')
      .insert([{
        name: data.name,
        date: data.date,
        time: data.time,
        guests: data.guests,
        phone: data.phone,
        email: data.email,
        notes: data.notes
      }]);

    if (error) {
      console.error('Supabase insert error:', error);
      return { statusCode: 500, body: JSON.stringify({ message: 'Database insert error' }) };
    }

    // Στείλε Email
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pandrosougarden@gmail.com',
        pass: process.env.EMAIL_PASS   // βάλε το APP PASSWORD στο Netlify env
      }
    });

    await transporter.sendMail({
      from: `"Pandrosou Garden" <pandrosougarden@gmail.com>`,
      to: 'pandrosougarden@gmail.com',
      subject: 'Νέα Κράτηση Τραπεζιού',
      text: `Όνομα: ${data.name}
Ημερομηνία: ${data.date}
Ώρα: ${data.time}
Άτομα: ${data.guests}
Τηλέφωνο: ${data.phone}
Email: ${data.email || '—'}
Σχόλια: ${data.notes || '—'}`,
      html: `<h2>Νέα Κράτηση</h2>
             <p><b>Όνομα:</b> ${data.name}</p>
             <p><b>Ημερομηνία:</b> ${data.date}</p>
             <p><b>Ώρα:</b> ${data.time}</p>
             <p><b>Άτομα:</b> ${data.guests}</p>
             <p><b>Τηλέφωνο:</b> ${data.phone}</p>
             <p><b>Email:</b> ${data.email || '—'}</p>
             <p><b>Σχόλια:</b> ${data.notes || '—'}</p>`
    });

    return { statusCode: 200, body: JSON.stringify({ message: 'Reservation added and email sent' }) };

  } catch (err) {
    console.error('Error:', err);
    return { statusCode: 500, body: JSON.stringify({ message: 'Server error' }) };
  }
};
