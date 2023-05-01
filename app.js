// Get the current year for the copyright footer
const currentYear = new Date().getFullYear();
const copyright = document.querySelector('footer p');
copyright.textContent = `© ${currentYear} Natasha Cooper - Mechanical Engineering`;

// Smooth scrolling for internal links
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true
});

// Toggle mobile menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav-menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menu.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.classList.remove('open');
    menuOpen = false;
  }
});
