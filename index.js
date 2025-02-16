// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Add your form validation code here

  // Add your EmailJS integration code here
  
});

document.addEventListener("DOMContentLoaded", function () {
  let testimonials = document.querySelectorAll(".testimonial");
  let index = 0;

  function showNextTestimonial() {
      // Remove active class from current testimonial
      testimonials[index].classList.remove("active");

      // Move to the next testimonial
      index = (index + 1) % testimonials.length;

      // Add active class to the next testimonial
      testimonials[index].classList.add("active");
  }

  // Auto switch every 2 seconds
  setInterval(showNextTestimonial, 2000);
});

