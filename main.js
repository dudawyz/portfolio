// Mobile nav toggle
const burger = document.querySelector('.burger');
const links = document.querySelector('nav.links');
if (burger) burger.addEventListener('click', () => links.classList.toggle('open'));
document.querySelectorAll('nav.links a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Contact form (front-end only demo)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('formMsg').textContent =
      'Thank you! Your message has been noted. I\'ll reply within 24 hours.';
    form.reset();
  });
}
