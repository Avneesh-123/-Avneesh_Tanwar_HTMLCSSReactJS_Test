document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous error messages
    document
      .querySelectorAll(".error")
      .forEach((error) => (error.textContent = ""));

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    // Validation flags
    let valid = true;

    // Validate First Name
    if (!firstName) {
      document.getElementById("firstNameError").textContent =
        "First Name is required.";
      valid = false;
    }

    // Validate Last Name
    if (!lastName) {
      document.getElementById("lastNameError").textContent =
        "Last Name is required.";
      valid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email address.";
      valid = false;
    }

    // Validate Phone Number
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      document.getElementById("phoneError").textContent =
        "Please enter a valid 10-digit phone number.";
      valid = false;
    }

    // Validate Password
    if (password.length < 8) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 8 characters.";
      valid = false;
    }

    // If all fields are valid, log the data
    if (valid) {
      const formData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phone,
        password: password,
      };
      console.log(formData);
      alert("Form submitted successfully! Check the console for the output.");
    }
  });
