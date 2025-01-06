

// Initializează EmailJS
emailjs.init("DLilih0ycwCcpaZLo"); // Înlocuiește cu User ID-ul tău

// Selectează formularul
const form = document.getElementById("contact-form");

// Adaugă un eveniment pentru submit
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Previne reîncărcarea paginii

    // Trimite datele formularului prin EmailJS
    emailjs.sendForm("service_qeh7xyl", "template_mery79o", form)
        .then(function (response) {
            alert("E-Mail erfolgreich gesendet! Vielen Dank!");
            console.log("Succes:", response.status, response.text);
            form.reset(); // Resetează formularul după trimitere
        }, function (error) {
            alert("Es ist ein Fehler aufgetreten. Bitte versuche es erneut.");
            console.error("Eroare:", error);
        });
});
fetch('https://example.com/api/resource', {
    method: 'POST',
    body: JSON.stringify({ data: 'value' }),
    headers: { 'Content-Type': 'application/json' }
});
app.post('/api/resource', (req, res) => {
    res.send('Data received');
});
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
