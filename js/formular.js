// Funcție pentru a gestiona selecțiile la clic și dublu clic
function toggleSelection(event) {
    var option = event.target;

    // Verificăm dacă este un element <option> și schimbăm starea selectată
    if (option.tagName.toLowerCase() === 'option') {
        // Dacă se face clic pe o opțiune, ea devine selectată
        if (event.detail === 1) {
            option.selected = !option.selected;
        }
        // Dacă se face dublu clic, opțiunea este deselecată
        if (event.detail === 2) {
            option.selected = false;
        }
    }
}


document.addEventListener("DOMContentLoaded", function () {
    // Initializează EmailJS
    emailjs.init("DLilih0ycwCcpaZLo"); // Înlocuiește "YOUR_USER_ID" cu User ID-ul tău din EmailJS

    // Selectează formularul
    const form = document.getElementById("contact-form");


    

    // Adaugă un eveniment pentru submit
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Previne reîncărcarea paginii

        // Trimite datele formularului prin EmailJS
        emailjs.sendForm("service_qeh7xyl", "template_mery79o", form)
            .then(function (response) {
                alert("Email trimis cu succes! Mulțumim!");
                console.log("Succes:", response.status, response.text);
                form.reset(); // Resetează formularul după trimitere
            }, function (error) {
                alert("A apărut o eroare. Te rugăm să încerci din nou.");
                console.error("Eroare:", error);
            });
    });
});
