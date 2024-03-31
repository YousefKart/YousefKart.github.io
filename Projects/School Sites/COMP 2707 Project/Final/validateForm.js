document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // If all validations pass, submit the form
        submitForm(name, email, message);
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function submitForm(name, email, message) {
        // You can send the data to a PHP script using AJAX
        // Here's a basic example using Fetch API
        fetch("sendEmail.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to send message.");
                }
                alert("Message sent successfully!");
                form.reset();
            })
            .catch((error) => {
                alert(error.message);
            });
    }
});
