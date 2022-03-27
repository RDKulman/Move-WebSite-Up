const btnUpContainer = document.querySelector('.btn-up-wrapper');
const btnUp = btnUpContainer.querySelector('.btn-up');
let scrolledHeight;
let scrollTimer;

if (btnUpContainer) {
  window.addEventListener('scroll', showBtnUp);
  btnUp.addEventListener('click', () => {
    scrolledHeight = window.scrollY;
    moveSiteUp();
  });
}

function showBtnUp() {
  if (window.scrollY > 200) {
    btnUp.classList.add('btn-up--active');
  } 
  else {
    btnUp.classList.remove('btn-up--active');
  }
}

function moveSiteUp() {
  if (scrolledHeight > 0) {
    scrolledHeight -= 40;
    window.scrollTo(0, scrolledHeight);
    scrollTimer = setTimeout(moveSiteUp, 10);
  }
  else {
    window.scrollTo(0, 0);
    clearTimeout(scrollTimer);
  }
}