document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;

    let valid = true;

    // Clear previous messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("successMessage").innerText = "";

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerText =
            "Name is required";
        valid = false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("emailError").innerText =
            "Email is required";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText =
            "Enter a valid email address";
        valid = false;
    }

    // Phone validation
    let phonePattern = /^[0-9]{10}$/;

    if (phone === "") {
        document.getElementById("phoneError").innerText =
            "Phone number is required";
        valid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerText =
            "Enter a valid 10-digit phone number";
        valid = false;
    }

    // Password validation
    if (password === "") {
        document.getElementById("passwordError").innerText =
            "Password is required";
        valid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").innerText =
            "Password must contain at least 6 characters";
        valid = false;
    }

    // Successful registration
    if (valid) {
        document.getElementById("successMessage").innerText =
            "Registration successful!";
    }
});
