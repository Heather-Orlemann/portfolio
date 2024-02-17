// Toggle the contact form visibility
function toggleForm() {
  const form = document.getElementById("myForm");
  if (form.style.display === "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
}

// Open the contact form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

// Close the contact form
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Close the contact form when clicking outside the form or on the cancel button
document.addEventListener("click", function (event) {
  if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
    closeForm();
  }
}, false);

// Scroll down button
$(function() {
  $('a[href*=\\#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
  });
});
