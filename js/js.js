// footer section 
function updateDateTime() {
    const now = new Date();
    const day = now.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedDateTime = `${day} ${month} ${year}, ${hours}:${minutes}:${seconds}`;

    document.getElementById('datetime').textContent = formattedDateTime;
}

setInterval(updateDateTime, 1000);

updateDateTime();


// contact form validation 

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const address = document.getElementById("address").value.trim();

    // Validation চেক
    if (!name || !email || !phone || !message || !address) {
        alert(" Please fill out all fields before submitting!");
        return;
    }

    // Email Validation (simple regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!email.match(emailPattern)) {
        alert(" Please enter a valid email address!");
        return;
    }


    alert(
        ` Form Submitted Successfully!\n\n` +
        ` Name: ${name}\n Email: ${email}\n Phone: ${phone}\n Address: ${address}\n Message: ${message}`
    );

    document.getElementById("contactForm").reset();
});