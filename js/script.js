document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('#navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  function addShadow() {
    if (window.scrollY >= 300) {
      nav.classList.add('shadow-bg');
    } else {
      nav.classList.remove('shadow-bg');
    }
  }

  function hideNav() {
    const nav = document.querySelector('.navbar-collapse');
    nav.classList.remove('show');
  }

  window.addEventListener('scroll', addShadow);
  navLinks.forEach((link) => link.addEventListener('click', hideNav));
});
