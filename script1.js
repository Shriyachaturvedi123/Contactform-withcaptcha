function validateForm(event) {
    event.preventDefault(); // Prevent form submission for demonstration purposes
  
    // Perform CAPTCHA validation
    var captchaInput = document.getElementById("captchaInput").value;
    if (captchaInput !== "") {
      // Perform CAPTCHA verification here (server-side or API call)
      // Replace the following code with your validation logic
      if (captchaInput === "captcha123") {
        // CAPTCHA validation success, proceed with form submission
        submitForm();
      } else {
        alert("Invalid CAPTCHA! Please try again.");
        refreshCaptcha();
      }
    } else {
      alert("Please enter the CAPTCHA.");
    }
  }
  function submitForm() {
    // Replace this function with your form submission logic
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Display form data for demonstration purposes
    alert(
      "Form submitted!\n\nName: " +
        name +
        "\nEmail: " +
        email +
        "\nMessage: " +
        message
    );
  
    // Reset form fields
    document.getElementById("contactForm").reset();
  }
  function refreshCaptcha() {
    // Replace this function with your CAPTCHA refresh logic
    // Here, we reload the captcha.php file to generate a new CAPTCHA image
    var captchaImage = document.getElementById("captchaImage");
    captchaImage.src = "captcha.php?" + new Date().getTime();
  }