// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    // Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-links'); // This will need to be adapted for mobile view structure in HTML
    
    // We'll Create a separate mobile menu container in HTML or adapt the existing one.
    // For now, let's assume we toggle a class on a container.
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.toggle('open');
                navToggle.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
            }
        });
    }

    // Dynamic Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});
