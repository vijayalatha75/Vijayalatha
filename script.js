function scrollToForm() {
  document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' });
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (message.length < 20) {
    alert("Message must be at least 20 characters long.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}