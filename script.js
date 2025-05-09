const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  fetch(form.action, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: new FormData(form),
  })
    .then((response) => {
      if (response.ok) {
        successMessage.style.display = "block";
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    })
    .catch((error) => {
      errorMessage.style.display = "block";
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

const toggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("active");
});

// aminated background

tsParticles.load("particles-js", {
  fullScreen: { enable: true },
  particles: {
    number: { value: 200 },
    color: { value: "#6e4f3a" }, 
    links: {
      enable: true,
      color: "#6e4f3a", 
    },
    move: { enable: true },
    size: { value: 2 },
  },
  background: {
    color: "#fef9f5", 
  },
});