// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", async function (event) {
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

    // Send email using EmailJS API
    try {
      await sendMail(name, email, message);
      showMessage("Message sent successfully!", "green");
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      showMessage("Failed to send email. Try again later.", "red");
    }
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

  // Send email using EmailJS API
  async function sendMail(name, email, message) {
    const serviceID = "service_vv1aoua"; 
    const templateID = "template_ezsew2r"; 
    const publicKey = "dLZTj0d5O9tacoaWO"; 

    const data = {
      service_id: serviceID,
      template_id: templateID,
      user_id: publicKey,
      template_params: {
        name: name,
        email: email,
        message: message,
      },
    };

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Email could not be sent");
    }
  }
});

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



