fetch("/.netlify/functions/add-reservation", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData)
})
.then(res => res.json())
.then(data => {
  alert("✅ Η κράτηση καταχωρήθηκε με επιτυχία!");
})
.catch(err => {
  console.error("Σφάλμα:", err);
  alert("❌ Υπήρξε πρόβλημα με την κράτηση");
});
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
