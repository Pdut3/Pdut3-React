import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div class="contact-info">
          <p>Email: <a href="mailto:your-email@example.com">pdutile3@gmail.com</a></p>
          <p>Phone: +1 401-658-6903</p>
        </div>
        <div class="contact-form-container">
          <form id="contact-form">
            <div class="form-group">
              <label for="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" required></input>
              <span class="error-message" id="email-error"></span>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
    </section>
  );
}

export default Contact;
