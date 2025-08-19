const nodemailer = require("nodemailer");
const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body);

    // Αποθήκευση στη Supabase
    const { error } = await supabase.from("reservations").insert([{
      id: crypto.randomUUID(),
      date: data.date,
      time: data.time,
      guests: data.guests,
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      notes: data.notes || null,
      created_at: new Date().toISOString(),
    }]);

    if (error) throw error;

    // Ρυθμίσεις SMTP με Gmail App Password
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pandrosougarden@gmail.com",
        pass: process.env.GMAIL_APP_KEY, // αποθηκεύεις εδώ το "ugxn tlbp lhqu jmlv"
      },
    });

    // Email περιεχόμενο
    const mailOptions = {
      from: '"Pandrosou Garden" <pandrosougarden@gmail.com>',
      to: "pandrosougarden@gmail.com",
      subject: "Νέα Κράτηση Τραπεζιού",
      html: `
        <h2>Νέα κράτηση</h2>
        <p><b>Ημερομηνία:</b> ${data.date}</p>
        <p><b>Ώρα:</b> ${data.time}</p>
        <p><b>Άτομα:</b> ${data.guests}</p>
        <p><b>Όνομα:</b> ${data.name}</p>
        <p><b>Τηλέφωνο:</b> ${data.phone}</p>
        <p><b>Email:</b> ${data.email || "-"}</p>
        <p><b>Σχόλια:</b> ${data.notes || "-"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Reservation stored and email sent" }),
    };
  } catch (err) {
    console.error("Add reservation error:", err);
    return { statusCode: 500, body: JSON.stringify({ message: err.message }) };
  }
};
