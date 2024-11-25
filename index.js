var links = document.querySelectorAll('.carousel-items');
var sections = document.querySelectorAll('.movie-gallery');

links.forEach(function(link) {
  link.addEventListener('click', function(event) {
      links.forEach(function(link) {
          link.classList.remove('active');
      });
      sections.forEach(function(section) {
        section.classList.remove('live');
      });

      this.classList.add('active');
      var targetSectionClass = this.getAttribute('id');
      console.log(targetSectionClass)
      document.querySelector('.' + targetSectionClass).classList.add('live');
      //document.querySelector('.footer').style.display = "none";
  });
});

function openVideoModal(videoSrc) {
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  modalVideo.src = videoSrc;
  modal.style.display = "flex";
  modalVideo.play();
}
  
function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  modal.style.display = "none";
  modalVideo.pause();
  modalVideo.src = ""; // Clear the video source
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Input validation
    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Log the form data 
    console.log("Form submitted successfully:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Success feedback 
    alert("Thank you! Your message has been submitted successfully.");

    // Clear the form fields
    form.reset();
  });

  // Function to validate email
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

  