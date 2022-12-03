AOS.init();

/** Cuando haga CLICK en .header__button, .header__nav TOGGLE .activo */
const button = document.querySelector(".header__button"),
      nav = document.querySelector(".header__nav"),
      btnMenu = document.querySelectorAll('.menu');

button.addEventListener('click',()=>{
  btnMenu.forEach(btn => btn.classList.toggle('active'));
  nav.classList.toggle('activo')
});
