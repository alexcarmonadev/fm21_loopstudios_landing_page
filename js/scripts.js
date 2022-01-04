/* ------------MOBILE MENU------------ */
const btnMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');
const imgLeader = document.querySelector('.leader__img');

let menuOpen = false;

const openMenu = () => {
  if (!menuOpen) {
    btnMenu.src = '../assets/images/icon-close.svg';
    btnMenu.style.width = '1.25rem';
    menu.style.display = 'block';
    imgLeader.style.display = 'none';
    document.body.style.overflow = 'hidden';
    menuOpen = true;
  } else {
    btnMenu.src = '../assets/images/icon-hamburger.svg';
    btnMenu.style.width = '1.55rem';
    menu.style.display = 'none';
    imgLeader.style.display = 'block';
    document.body.style.overflow = 'visible';
    menuOpen = false;
    //recarga la página, tambien "window.location.reload()"
    window.location.href = window.location.href;
  }
};

btnMenu.addEventListener('click', openMenu);
