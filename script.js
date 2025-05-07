
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  const errorMessage = document.getElementById('errorMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    fetch(form.action, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: new FormData(form),
    })
    .then(response => {
      if (response.ok) {
        successMessage.style.display = 'block'; // Show success message
        form.reset(); // Reset form fields
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      errorMessage.style.display = 'block'; // Show error message
    });
  });




  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Dropdown toggle
  const toggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
