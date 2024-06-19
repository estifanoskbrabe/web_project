/* eslint-disable no-unused-vars */
function validateForm() {
  const rollNumber = document.getElementById('rollno').value;
  const studentClass = document.getElementById('std').value;

  // Regular expression to allow only digits (0-9)
  const digitRegex = /^\d+$/;

  // Validate Rollno field
  if (!digitRegex.test(rollNumber)) {
    alert('Roll number should contain only digits (0-9).');
    return false;
  }

  // Validate Class field
  if (!digitRegex.test(studentClass)) {
    alert('Class should contain only digits (0-9).');
    return false;
  }

  return true; // Submit the form if all validations pass
}
/* eslint-disable no-unused-vars */