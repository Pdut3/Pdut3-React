// Add event listeners for navigation links
function addNavigationEventListeners() {
    const navigationLinks = document.querySelectorAll('nav ul li a');
    
    navigationLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        // Remove 'active' class from all navigation links
        navigationLinks.forEach(navLink => {
          navLink.parentElement.classList.remove('active');
        });
  
        // Add 'active' class to the clicked navigation link
        this.parentElement.classList.add('active');
  
        // Scroll to the corresponding section
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
  
  // Set the default section and navigation link as active
  function setDefaultActiveSection() {
    const defaultSection = document.querySelector('section#about');
    const defaultNavLink = document.querySelector('nav ul li:first-child a');
  
    defaultSection.classList.add('active');
    defaultNavLink.parentElement.classList.add('active');
  }
  
  // Add form validation for email field
  function addEmailValidation() {
    const contactForm = document.getElementById('contact-form');
    const emailField = document.getElementById('email');
    const emailError = document.getElementById('email-error');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      if (emailField.value === '') {
        showErrorMessage(emailError, 'Email is required');
      } else if (!isValidEmail(emailField.value)) {
        showErrorMessage(emailError, 'Invalid email address');
      } else {
        hideErrorMessage(emailError);
        // Continue with form submission or other actions
      }
    });
  
    function showErrorMessage(element, message) {
      element.innerText = message;
      element.style.display = 'block';
    }
  
    function hideErrorMessage(element) {
      element.innerText = '';
      element.style.display = 'none';
    }
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  }
  
  // Call the necessary functions when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    addNavigationEventListeners();
    setDefaultActiveSection();
    addEmailValidation();
  });
  