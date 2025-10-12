// main.js
// PURPOSE: Smooth-scroll to sections AND close the mobile nav after clicking a link.

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Select all nav links (including brand link if it points to a hash)
  const links = document.querySelectorAll('a.nav-link, .navbar-brand[href^="#"]');

  // This handler smooth-scrolls to section and then closes the mobile menu (if open)
  const handleNavClick = (e) => {
    const a = e.currentTarget;
    const href = a.getAttribute('href');

    // Only handle hash links like #about, #projects, etc.
    if (!href || !href.startsWith('#')) return;

    const target = document.querySelector(href);
    if (!target) return;

    // Stop default jump and do a smooth scroll instead
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Attempt to close the mobile menu if it's open
    const nav = document.getElementById('navbarNav');

    // Bootstrap JS exposes window.bootstrap.Collapse in v5 bundle
    const bootstrapGlobal = window.bootstrap;
    if (bootstrapGlobal && bootstrapGlobal.Collapse && nav) {
      const instance = bootstrapGlobal.Collapse.getOrCreateInstance(nav, { toggle: false });
      // If the menu is currently shown (expanded), hide it after click
      if (nav.classList.contains('show')) {
        instance.hide();
      }
    }
  };

  // Attach our click handler to each link
  links.forEach((l) => l.addEventListener('click', handleNavClick));
});
