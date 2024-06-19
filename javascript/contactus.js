/* eslint-disable no-unused-vars */
function validateForm() {
  const email = document.getElementById('email').value;
  const contact = document.getElementById('contact').value;

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return false;
  }

  // Simple phone number validation (10 digits only)
  const contactRegex = /^\d{10}$/;
  if (!contactRegex.test(contact)) {
    alert('Please enter a valid 10-digit contact number');
    return false;
  }

  // You can add more validation rules as needed

  return true; // Submit the form if all validations pass
}
/* eslint-enable no-unused-vars */
