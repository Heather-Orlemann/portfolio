// Add event listeners for navbar items
function addNavListeners() {
    document.getElementById("navHome").addEventListener("click", function () {
      window.location.href = "#Home";
    });
  
    document.getElementById("navSlideshow").addEventListener("click", function () {
      window.location.href = "#Slideshow";
    });
  
    document.getElementById("navAbout").addEventListener("click", function () {
      window.location.href = "#About";
    });
  
    document.getElementById("navGitH0ub").addEventListener("click", function () {
      window.location.href = "#GitHub";
    });
  
    document.getElementById("navContact").addEventListener("click", function () {
      toggleForm();
    });
  }
  
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
  
  // Initialize the slideshow with the first image
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Change the slide when left or right arrows are clicked
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Change the slide when dots are clicked
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  // Show the slide with the given index
  function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
  
    if (n > slides.length) {
      slideIndex = 1;
    }
  
    if (n < 1) {
      slideIndex = slides.length;
    }
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
  
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
  }
  
  // Close the contact form when clicking outside the form or on the cancel button
  document.addEventListener("click", function (event) {
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
      closeForm();
    }
  }, false);
  
  // Call the function to add event listeners to navbar items
  addNavListeners();
  