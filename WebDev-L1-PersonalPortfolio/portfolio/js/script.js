// ===============================
// AOS Initialization
// ===============================
AOS.init({
    duration: 1000,
    once: true
});

// ===============================
// Typing Animation
// ===============================
const roles = [
    "Quality Assurance Inspector",
    "Computer Science Student",
    "Frontend Developer",
    "Future Software QA Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingElement.textContent = currentRole.substring(0, charIndex++);
        if (charIndex > currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex--);
        if (charIndex < 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

// ===============================
// Sticky Navbar Background
// ===============================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.style.background = "#0f172a";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";
    } else {
        navbar.style.background = "rgba(15,23,42,.85)";
        navbar.style.boxShadow = "none";
    }

});

// ===============================
// Active Navigation Link
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Smooth Scroll
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ===============================
// Back To Top Button
// ===============================
const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

Object.assign(topButton.style, {
    position: "fixed",
    right: "25px",
    bottom: "25px",
    width: "50px",
    height: "50px",
    border: "none",
    borderRadius: "50%",
    background: "#3b82f6",
    color: "#fff",
    fontSize: "22px",
    cursor: "pointer",
    display: "none",
    zIndex: "9999",
    transition: ".3s"
});

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// Contact Form Validation
// ===============================
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                input.style.border = "1px solid red";

                valid = false;

            } else {

                input.style.border = "1px solid #38bdf8";

            }

        });

        if (!valid) {

            alert("Please fill all fields.");

            return;

        }

        alert("Thank you! Your message has been submitted.");

        form.reset();

    });

}

// ===============================
// Skill Card Hover Animation
// ===============================
document.querySelectorAll(".skill-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ===============================
// Project Card Tilt Effect
// ===============================
document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 20;
        const rotateX = (rect.height / 2 - y) / 20;

        card.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

// ===============================
// Hero Fade In
// ===============================
window.addEventListener("load", () => {

    document.querySelector(".hero").style.opacity = "1";

});

// ===============================
// Console Message
// ===============================
console.log("Portfolio Loaded Successfully 🚀");