// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate inputs
    if (!name || !email || !message) {
      showMessage("Please fill out all fields", "red");
      return;
    }

    if (!validateEmail(email)) {
      showMessage("Please enter a valid email", "red");
      return;
    }

    // Success message
    showMessage("Message sent successfully!", "green");

    // Send email using EmailJS
    sendMail(name, email, message);

    setTimeout(() => {
      form.reset();
      formMessage.textContent = ""; // Clear message after reset
    }, 2000);
  });

  // Email validation function
  function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }

  // Function to display form messages
  function showMessage(message, color) {
    formMessage.textContent = message;
    formMessage.style.color = color;
  }

  // Send email with EmailJS
  function sendMail(name, email, message) {
    const params = { name, email, message, subject: "Message from Portfolio" };

    emailjs.send("service_vv1aoua", "template_ezsew2r", params)
      .then(() => alert("Email sent successfully"))
      .catch(error => {
        console.error("Error sending email:", error);
        showMessage("Failed to send email. Try again later.", "red");
      });
  }

  // Testimonial Auto-Switch
  const testimonials = document.querySelectorAll(".testimonial");
  let index = 0;

  function showNextTestimonial() {
    testimonials[index].classList.remove("active");
    index = (index + 1) % testimonials.length;
    testimonials[index].classList.add("active");
  }

  if (testimonials.length > 0) {
    setInterval(showNextTestimonial, 2000);
  }
});


