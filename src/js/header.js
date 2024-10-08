document.addEventListener('DOMContentLoaded', function () {
  const menuLinks = document.querySelectorAll('.list li a');

  function setActiveLink() {
    menuLinks.forEach(link => {
      link.classList.remove('active');
      if (link.hash === window.location.hash) {
        link.classList.add('active');
      }
    });
  }

  setActiveLink();

  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      setActiveLink();
    });
  });

  window.addEventListener('hashchange', setActiveLink);
});
