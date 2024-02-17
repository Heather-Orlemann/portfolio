// Store the form element in a variable
const form = document.getElementById("myForm");

// Toggle the contact form visibility
function toggleForm() {
  if (form.style.display === "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
}

// Open the contact form
function openForm() {
  form.style.display = "block";
}

// Close the contact form
function closeForm() {
  form.style.display = "none";
}

// Close the contact form when clicking outside the form or on the cancel button
document.addEventListener("click", function (event) {
  if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
    closeForm();
  }
}, false);

// Scroll down button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
