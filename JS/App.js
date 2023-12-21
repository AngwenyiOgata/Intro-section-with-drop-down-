(function () {
  'use strict';

  const navLink = document.querySelectorAll('.nav-links');
  const navMenus = document.querySelectorAll('li ol');
  const navLinkSvg = document.querySelectorAll('.nav-links svg');

  for (let i = 0; i < navMenus.length; i++) {
    navMenus[i].className = 'hidden';

  }
  for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function (evt) {
      evt.preventDefault();

      let thisLink = this.parentNode.querySelector('ol');
      let linkSvg = this.querySelector('svg');

      if (thisLink.classList.contains('hidden')) {
        for (let i = 0; i < navMenus.length; i++) {
          navMenus[i].className = 'hidden';
          for (let i = 0; i < navLinkSvg.length; i++) {
            navLinkSvg[i].classList.remove('transformed');
          }
        }
        thisLink.className = 'app__header-nav-links-ol';
        linkSvg.classList.add('transformed');
      } else {
        thisLink.className = 'hidden';
        linkSvg.classList.remove('transformed');
      }
    });
  }
})();

// app__header-nav-mobile
(function() {
  'use strict';
  const mobileNav = document.getElementById('mobileNav');
  const hambuger = document.querySelector('.hamburger-icon');
  hambuger.addEventListener('click', (evt)=>{
    evt.preventDefault();

    if (mobileNav.classList.contains('hidden')) {
      mobileNav.className = 'app__header-nav-mobile';
      hambuger.src = './images/icon-close-menu.svg';
      hambuger.setAttribute('alt', 'close menu');
    } else {
      mobileNav.className = 'hidden';
      hambuger.src = './images/icon-menu.svg';
      hambuger.setAttribute('alt', 'menu');
    }

  })

}());
