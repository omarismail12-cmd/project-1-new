
# Portfolio Assessment with Contact Form

## **Project Goal**
The goal of this assessment is to demonstrate a foundational understanding of HTML, CSS, and JavaScript by building a responsive portfolio webpage. The primary focus is on implementing a **contact form** that includes real-world JavaScript fundamentals such as form validation, event handling, and API integration.

By completing this assessment, you will showcase:
- Basic front-end development skills.
- The ability to create user-friendly and responsive designs.
- Implementation of JavaScript to handle dynamic behavior and backend integration.

---

## **Features**
1. **Responsive Portfolio Design**:
   - Includes sections for "About Me," "Projects," and "Contact."
   - Aesthetic layout using Flexbox and Grid.
   - Fully responsive for all devices.

2. **Contact Form**:
   - **HTML**: Semantic structure with `input` fields for name, email, and a `textarea` for the message.
   - **CSS**: Centered form with a modern, user-friendly design.
   - **JavaScript**:
     - Client-side form validation.
     - Dynamic success/error feedback messages.
     - Integration with EmailJS for sending messages.

---

## **How It Works**
1. **Form Submission**:
   - User fills in their name, email, and message.
   - JavaScript validates inputs:
     - Ensures no field is empty.
     - Checks for a valid email format.
   - The form is submitted using EmailJS to send the message.

2. **Feedback Messages**:
   - If submission is successful, the user receives a confirmation message.
   - If submission fails or inputs are invalid, the user sees appropriate error messages.

---

## **Resources**
### **1. Technologies Used**
- **HTML**: Semantic structure for accessibility and readability.
- **CSS**: Modern responsive design using Flexbox and Grid.
- **JavaScript**: Client-side interactivity, including validation and API integration.

### **2. Tools and APIs**
- [**EmailJS**](https://www.emailjs.com/): For sending emails without needing a server backend.  
  **Setup Steps**:
  - Create an account on EmailJS.
  - Set up a service and template.
  - Get your `service_id`, `template_id`, and `user_id`.
  - Replace placeholders in the JavaScript code with your EmailJS credentials.

---

## **Getting Started**
### **1. Prerequisites**
- Basic understanding of HTML, CSS, and JavaScript.
- A code editor like [Visual Studio Code](https://code.visualstudio.com/).
- A web browser to test the portfolio.

### **2. Instructions**
1. Clone or download the project files.
2. Open `index.html` in your browser to view the portfolio.
3. Edit the EmailJS credentials in `scripts.js` to enable the contact form functionality.
4. Test the form by filling out the fields and submitting it.

---

## **Assessment Checklist**
- [x] The portfolio is responsive across all devices.
- [x] The contact form is centered and visually appealing.
- [x] Input validation works as expected.
- [ ] Email submissions are processed successfully via EmailJS.
- [ ] Feedback messages display correctly for both success and error cases.

---

## **Learning Resources**
- [MDN Web Docs: HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs: CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN Web Docs: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS Tricks: Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)

---

## **License**
This project is for educational purposes only. Feel free to use and modify it for personal or learning projects. 

--- 

### **Good Luck!**
This assessment is an excellent step toward mastering front-end development. Take your time to learn and refine your skills!
