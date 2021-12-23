(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);

    mobileMenu.classList.toggle('is-open');

    if (isMenuOpen) {
      enableScroll();
    } else {
      disableScroll();
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
      // if any scroll is attempted, set this to the previous value
      window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
      };
  }
  
  function enableScroll() {
    window.onscroll = function() {};
  }

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);

    if (isMenuOpen) {
      enableScroll();
    } else {
      disableScroll();
    }
  });

  // TODO: click to memu
  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(function(){
      //document.querySelector('.js-open-menu').click();
    }, 500)
  })

})();