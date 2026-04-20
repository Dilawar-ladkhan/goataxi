/* ========================================
   GOA TAXI — JavaScript
   Minimal: scroll effects, mobile menu, form → WhatsApp
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Dynamic footer year ---
  const footerYear = document.getElementById('footerYear');
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  // --- Set min date to today ---
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  // --- Navbar scroll effect ---
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Mobile menu toggle ---
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const mobileCta = document.getElementById('mobileCta');

  const openMenu = () => {
    menuToggle.classList.add('active');
    navLinks.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (mobileCta) mobileCta.style.display = 'none';
  };

  const closeMenu = () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
    if (mobileCta) mobileCta.style.display = '';
  };

  menuToggle.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // --- Fade-in on scroll (Intersection Observer) ---
  const fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: show everything
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  // --- Quote form → Direct Call ---
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Form is informational — trigger direct call
      window.location.href = 'tel:+919900549959';
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = navbar.offsetHeight + 8;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});

