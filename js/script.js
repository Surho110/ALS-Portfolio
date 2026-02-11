// Navbar Toggle for Mobile
const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '☰'; // Hamburger icon
document.querySelector('.navbar').prepend(navToggle);

navToggle.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth Scroll for Internal Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        if (link.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(link.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Contact Form Validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contactForm');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();

            const name = document.querySelector('#name');
            const email = document.querySelector('#email');
            const message = document.querySelector('#message');

            let errors = [];

            if (!name.value.trim()) {
                errors.push("Name is required.");
            }

            if (!email.value.trim()) {
                errors.push("Email is required.");
            } else {
                const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
                if (!emailPattern.test(email.value)) {
                    errors.push("Please enter a valid email address.");
                }
            }

            if (!message.value.trim()) {
                errors.push("Message cannot be empty.");
            }

            if (errors.length > 0) {
                alert(errors.join("\n"));
            } else {
                alert("Thank you! Your message has been submitted.");
                form.reset();
            }
        });
    }
});
