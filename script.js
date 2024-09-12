document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");

    // Reset error messages
    emailError.style.display = "none";
    passwordError.style.display = "none";
    successMessage.style.display = "none";

    let isValid = true;

    // Validate email
    if (email.length <= 3 || !email.includes("@") || !email.includes(".")) {
        emailError.style.display = "block";
        isValid = false;
    }

    // Validate password
    if (password.length <= 8) {
        passwordError.style.display = "block";
        isValid = false;
    }

    // If valid, show success message
    if (isValid) {
        successMessage.style.display = "block";
    }
});
